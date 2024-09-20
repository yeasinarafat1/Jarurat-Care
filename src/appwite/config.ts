/**
 * Configuration for Appwrite client
 *
 * @see https://appwrite.io/docs/client-sdk
 */
import { Client, Databases } from "appwrite";

/**
 * Initialize Appwrite client
 *
 * @see https://appwrite.io/docs/client-sdk
 */
export const client = new Client()
  .setEndpoint(import.meta.env.VITE_APPWRITE_ENDPOINT) // Your Appwrite Endpoint
  .setProject(import.meta.env.VITE_PROJECT_ID);

/**
 * Initialize Appwrite databases
 *
 * @see https://appwrite.io/docs/client-sdk
 */
export const databases = new Databases(client);
