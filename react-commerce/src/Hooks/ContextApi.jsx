import { useState, useEffect } from "react";
import { createContext, useContext } from "react";
import { db, auth, googleProvider } from "./firebase";
// import { db } from "./firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithRedirect,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

const ContextApi = createContext();
export function ContextApiProvider({ children }) {
  const [count, setCount] = useState(0);
  const [myUser] = useAuthState(auth);

  const increamentButton = () => {
    setCount(count + 1);
  };
  const [item, setItem] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getProduct();
  }, []);
  const getProduct = () => {
    const productCollectionRef = collection(db, "Products");
    getDocs(productCollectionRef)
      .then((response) => {
        console.log(response);
        const prod = response.docs.map((doc) => ({
          ...doc.data(),
          data: doc.data,
          id: doc.id,
        }));
        setLoading(false);
        setItem(prod);
      })
      .catch((error) => console.log(error.message));
  };

  const [cartItems, setCartItems] = useState([]);

  const onAdd = (item) => {
    const exist = cartItems.find((x) => x?.id === item?.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x?.id == item?.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...item, qty: 1 }]);
    }
  };

  const onRem = (a) => {
    const exist = cartItems.find((x) => x.id == a.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== a.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x?.id == a?.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  const delProd = (a) => {
    setCartItems(cartItems.filter((x) => x.id !== a.id));
  };
  const cartCount = cartItems.length;
  const [filter, setFilter] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const applyFilter = (filter) => {
    setFilter(filter);
    setFilteredProducts(
      item.filter((e) => {
        return e.name?.includes(filter);
      })
    );
  };

  useEffect(() => {
    applyFilter(filter);
  }, [filter]);

  const [product, setProduct] = useState([]);

  const [user, setUser] = useState("");
  const [load, setLoad] = useState(false);
  const [msg, setMsg] = useState("");
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const signInWithGoogle = async () => {
    setLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        setToken(token);
        const user = result.user;
        setUser(user.displayName);
        const providerId = user.providerData.map((e) => {
          if (e.providerId === "google.com") return e.providerId;
        });
        setLoading(false);
        navigate("/upload");
      })
      .catch((error) => {
        console.log(error.message);
        // navigate('/')
        setLoading(false);
      });
  };

  const [addLoad, setAddLoad] = useState(false);
  const [relay, setRelay] = useState("");
  const adminUpload = async (data) => {
    setAddLoad(true);
    await addDoc(collection(db, "Products"), {
      name: data.name,
      image_url: data.img,
      price: data.price,
      desc: data.desc,
    });
    setAddLoad(false);
    setRelay("success");
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
        setUser("");
      })
      .catch((err) => {
        console.log("You have an error logging out:", err);
      });
  };

  return (
    <ContextApi.Provider
      value={{
        increamentButton,
        logOut,
        user,
        adminUpload,
        setRelay,
        relay,
        addLoad,
        setUser,
        setToken,
        getProduct,
        count,
        loading,
        item,
        onAdd,
        cartItems,
        cartCount,
        onRem,
        delProd,
        filteredProducts,
        filter,
        applyFilter,
        product,
        setProduct,
        signInWithGoogle,
      }}
    >
      {children}
    </ContextApi.Provider>
  );
}
export function Context() {
  return useContext(ContextApi);
}
