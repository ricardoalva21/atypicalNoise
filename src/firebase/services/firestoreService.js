import { db } from "../../firebaseConfig";
import { collection, addDoc, getDocs, doc, updateDoc, deleteDoc } from "firebase/firestore";

const usersCollection = collection(db, "users");

// Guardar usuario
export const saveUser = async (userData) => {
    try {
        await addDoc(usersCollection, userData);
        console.log("Usuario guardado con éxito");
    } catch (error) {
        console.error("Error guardando usuario:", error);
    }
};

// Obtener usuarios
export const getUsers = async () => {
    const snapshot = await getDocs(usersCollection);
    return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// Editar usuario
export const updateUser = async (id, newData) => {
    const userDoc = doc(db, "users", id);
    await updateDoc(userDoc, newData);
};

// Eliminar usuario
export const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
};
