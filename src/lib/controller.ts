import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
  setDoc,
} from "firebase/firestore";
import { app } from "./firebase";
import { AddHotelType } from "../types/hotel";
import { NavigateFunction } from "react-router-dom";

export const firestore = getFirestore(app);

// Hotel Collection
export const hotelsCollection = collection(firestore, "hotels");

// add a new doucment to your document
export const addHotel = async (hotelData: AddHotelType) => {
  const newHotel = await addDoc(hotelsCollection, { ...hotelData });
  console.log(`created ${newHotel.path}`);
};

// delete a document in our collection

export const deleteHotel = async (
  id: string | undefined,
  navigate: NavigateFunction
) => {
  const document = doc(firestore, `hotels/${id}`);
  await deleteDoc(document);
  navigate("/");
};

// edit a documment

export const updateHotel = async (id: String | undefined, docData: any) => {
  const getHotel = doc(firestore, `hotels/${id}`);
  await setDoc(getHotel, docData, { merge: true });
};
