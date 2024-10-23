import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { base_url } from "../constants/url";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: base_url }),
  endpoints: (build) => ({
    createPost: build.mutation({
      query: ({ title, descrption, post_image, created_user }) => ({
        url: "post/add-post",
        method: "POST",
        body: { title, descrption, post_image, created_user },
      }),
    }),
    // createUser: build.mutation({
    //   query: ({ name, password, email }) => ({
    //     url: "user/add-user",
    //     method: "POST",
    //     body: { name, password, email },
    //   }),
    // }),
    // verifyUser: build.mutation({
    //   query: ({ otp, id }) => ({
    //     url: "user/verifyUser",
    //     method: "POST",
    //     body: { otp, _id: id },
    //   }),
    // }),
    // getUserDetail: build.mutation({
    //   query: ({ id }) => ({
    //     url: `user/user/${id}`,
    //     method: "GET",
    //   }),
    // }),
  }),
});

export const {
  useCreatePostMutation
} = postsApi;
