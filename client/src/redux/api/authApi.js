import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../constants/url";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (build) => ({
    login: build.mutation({
      query: ({ name, password }) => ({
        url: "user/login",
        method: "POST",
        body: { name, password },
      }),
    }),
    createUser: build.mutation({
      query: ({ name, password, email }) => ({
        url: "user/add-user",
        method: "POST",
        body: { name, password, email },
      }),
    }),
    verifyUser: build.mutation({
      query: ({ otp, id }) => ({
        url: "user/verifyUser",
        method: "POST",
        body: { otp, _id: id },
      }),
    }),
    getUserDetail: build.mutation({
      query: ({ id }) => ({
        url: `user/user/${id}`,
        method: "GET",
     
      
        
      }),
    }),
  }),
});

export const {
  useLoginMutation,
  useCreateUserMutation,
  useVerifyUserMutation,
  useGetUserDetailMutation
} = authApi;
