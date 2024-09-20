import { ID } from "appwrite";
import { databases } from "./config";

export const createService = async ({
  name,
  description,
  price,
}: {
  name: string;
  description: string;
  price: number;
}) => {
  const promise = databases.createDocument(
    import.meta.env.VITE_DATABASE_ID,
    import.meta.env.VITE_COLLECTION_ID,
    ID.unique(),
    { name, description, price }
  );
  promise.then(
    function (response) {
      if (response.$collectionId) {
        return true;
      } else {
        return false;
      }
    },
    function (error) {
      console.log(error);
      return { error };
    }
  );
};
export const getAllService = async () => {
  try {
    const response = await databases.listDocuments(
      import.meta.env.VITE_DATABASE_ID,
      import.meta.env.VITE_COLLECTION_ID
    );
    if (response.documents) {
      return response.documents;
    } else {
      return [];
    }
  } catch (error) {
    console.log(error);
    return { error };
  }
};
