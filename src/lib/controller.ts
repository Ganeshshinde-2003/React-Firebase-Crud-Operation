import { addDoc, collection, getFirestore } from "firebase/firestore";
import { app } from "./firebase";
import { AddHotelType } from "../types/hotel";

export const firestore = getFirestore(app);

// Hotel Collection
export const hotelsCollection = collection(firestore, "hotels");

// add a new doucment to your document
export const addHotel = async (hotelData: AddHotelType) => {
  const newHotel = await addDoc(hotelsCollection, { ...hotelData });
  console.log(`created ${newHotel.path}`);
};
