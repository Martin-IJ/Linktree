import { db } from './clientApp';
import { collection, addDoc, query, where, getDocs } from "firebase/firestore";

export const addLink = async (userId, link) => {
  try {
    const docRef = await addDoc(collection(db, "links"), {
      userId,
      link,
      createdAt: new Date(),
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
};

export const getLinks = async (userId) => {
  const links = [];
  const q = query(collection(db, "links"), where("userId", "==", userId));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach((doc) => {
    links.push({ id: doc.id, ...doc.data() });
  });
  return links;
};
