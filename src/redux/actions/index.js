import { auth, db, provider, storage } from "../../firebase";
import { signInWithPopup } from "firebase/auth";
import * as actions from "../actions/actions";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import {
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";

const signInAPI = () => {
  return (dispatch) => {
    signInWithPopup(auth, provider)
      .then((payload) => {
        dispatch(actions.setUser(payload.user));
      })
      .catch((error) => alert(error.message));
  };
};

export const getUserAuth = () => {
  // to change user account which stored in redux
  return (dispatch) => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(actions.setUser(user));
      }
    });
  };
};

export const signOutAPI = () => {
  return (dispatch) => {
    auth
      .signOut()
      .then(() => {
        dispatch(actions.setUser(null));
      })
      .catch((error) => alert(error.message));
  };
};

export const postArticleAPI = (payload) => {
  return (dispatch) => {
    dispatch(actions.setLoading(true));

    if (payload.image) {
      const storageRef = ref(storage, `images/${payload.image.name}`);
      const uploadRef = uploadBytesResumable(storageRef, payload.image);

      uploadRef.on(
        "state_changed",
        (snapshot) => {
          const porgress =
            Math.round(snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          console.log(`Upload is ${porgress}% done`);
        },
        (error) => {
          alert(error);
        },
        () => {
          getDownloadURL(uploadRef.snapshot.ref).then((downloadURL) => {
            const collRef = collection(db, "articles");
            addDoc(collRef, {
              actor: {
                description: payload.user.email,
                title: payload.user.displayName,
                date: payload.timeStamp,
                image: payload.user.photoURL,
              },
              comments: 0,
              video: payload.video,
              description: payload.description,
              shareImage: downloadURL,
            });
          });
          dispatch(actions.setLoading(false));
        }
      );
    } else {
      const collRef = collection(db, "articles");
      addDoc(collRef, {
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timeStamp,
          image: payload.user.photoURL,
        },
        comments: 0,
        video: payload.video,
        description: payload.description,
        shareImage: payload.image,
      });
      dispatch(actions.setLoading(false));
    }
  };
};

export const getArticlesAPI = () => {
  return (dispatch) => {
    let payload;
    const collRef = collection(db, "articles");
    const orderedRef = query(collRef, orderBy("actor.date", "desc"));
    onSnapshot(orderedRef, (snapshot) => {
      payload = snapshot.docs.map((doc) => doc.data());
      dispatch(actions.getArticles(payload));
    });
  };
};

export default signInAPI;
