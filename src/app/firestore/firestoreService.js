import { db } from '../config/firebase';

export const dataFromSnapshot = snapshot => {
  if (!snapshot.exists) return undefined;

  const data = snapshot.data();

  return {
    ...data,
    id: snapshot.id,
  };
};

export const getEventsFromFirestore = observer => {
  return db.collection('events').onSnapshot(observer);
};
