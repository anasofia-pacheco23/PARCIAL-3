import { firebaseConfig } from "../firebaseConfig";
import {DiscoData} from "../types/discoData"

import { initializeApp } from "firebase/app";
import {
	getFirestore,
	collection,
	addDoc,
	getDocs,
	getDoc,
	doc,
	setDoc,
	updateDoc,
	arrayUnion,
	onSnapshot,
} from 'firebase/firestore';

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const discoDocument = collection(db, 'discos');

export const createDisco = async (data: DiscoData) => {
	await addDoc(discoDocument, data);
};

export const getDiscos = async () => {
	const querySnapshot = await getDocs(collection(db, 'discos'));
	const arrayProducts: any = [];

	querySnapshot.forEach((doc) => {
		const data = doc.data() as any;
		arrayProducts.push({ id: doc.id, ...data });
	});

	return arrayProducts;
};
