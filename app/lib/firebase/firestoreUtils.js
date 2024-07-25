import { db } from './clientApp';
import { collection, addDoc } from "firebase/firestore";

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
