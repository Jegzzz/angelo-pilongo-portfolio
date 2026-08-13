import { initializeApp, getApps, getApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore, doc, getDocFromServer } from 'firebase/firestore';
import { getStorage, FirebaseStorage, ref, getDownloadURL } from 'firebase/storage';

let app: FirebaseApp | null = null;
let auth: Auth | null = null;
let db: Firestore | null = null;
let storage: FirebaseStorage | null = null;

try {
  // Check if env variables or config are available
  const apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
  if (apiKey) {
    const firebaseConfig = {
      apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
      authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
      projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
      storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
      messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
      appId: import.meta.env.VITE_FIREBASE_APP_ID,
    };
    app = getApps().length === 0 ? initializeApp(firebaseConfig) : getApp();
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  } else if (getApps().length > 0) {
    app = getApp();
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
  }
} catch (err) {
  console.warn('Firebase initialization note:', err);
}

export { app, auth, db, storage };

/**
 * Retrieves the public download URL for a file in Firebase Storage.
 * @param path Storage file path (defaults to 'profile/angelo-pilongo.jpg')
 */
export async function getProfilePhotoUrl(path: string = 'profile/angelo-pilongo.jpg'): Promise<string | null> {
  let targetStorage = storage;
  if (!targetStorage && getApps().length > 0) {
    try {
      targetStorage = getStorage(getApp());
    } catch (e) {
      console.warn('Storage init fallback note:', e);
    }
  }

  if (!targetStorage) {
    return null;
  }

  try {
    const imageRef = ref(targetStorage, path);
    return await getDownloadURL(imageRef);
  } catch (error) {
    console.warn('Firebase Storage fetch note:', error);
    return null;
  }
}

export async function testFirebaseConnection(): Promise<boolean> {
  if (!db) return false;
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
    return true;
  } catch (error) {
    if (error instanceof Error && error.message.includes('the client is offline')) {
      console.warn('Firebase client is offline or unconfigured.');
    }
    return false;
  }
}
