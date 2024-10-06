import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const COHORT_CODE = "foobarbaz";
const API_URL = `https://fsa-crud-2aa9294fe819.herokuapp.com/api/${COHORT_CODE}`;

const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  endpoints: () => ({}),
});

export default api;
