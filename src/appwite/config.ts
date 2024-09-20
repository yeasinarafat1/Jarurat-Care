import { Client, Databases } from "appwrite";

export const client = new Client()
  .setEndpoint("https://cloud.appwrite.io/v1") // Your Appwrite Endpoint
  .setProject(import.meta.env.VITE_PROJECT_ID);
export const databases = new Databases(client);
