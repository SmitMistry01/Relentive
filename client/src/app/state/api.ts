import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BASE_API_URL }),
  reducerPath:"api",
  tagTypes:[],
  endpoints: () => ({}),
}); 

export const {}  = api;