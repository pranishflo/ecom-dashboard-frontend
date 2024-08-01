import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import { ReducerType } from "@reduxjs/toolkit";

export const api= createApi({
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    reducerPath: "adminApi",
    tagTypes:["User"],
    endpoints:(build) => ({
            getUser: build.query({
            query:(id)=> `general/user/${id}`,
            providesTags: ["User"],
        }),
    }),
});

export const{
    useGetUserQuery,
} = api;    