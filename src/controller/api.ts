import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Task, Tasks } from "../utils/Task";

export const API = createApi({
  reducerPath: "API",
  tagTypes: ["Todos"],
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_URL,
  }),
  endpoints: (builder) => ({
    getData: builder.query<Tasks, void>({
      query: () => `getTasks`,
      providesTags: (result) =>
        result
          ? [
              ...result.result.map(({ id }) => ({
                type: "Todos" as const,
                id,
              })),
              {
                type: "Todos",
                id: "DATA",
              },
            ]
          : [{ type: "Todos", id: "DATA" }],
      transformResponse: (rawResult: Tasks) => {
        return rawResult;
      },
    }),
    getActiveData: builder.query<Tasks, void>({
      query: () => `getActiveTasks`,
      providesTags: (result) =>
        result
          ? [
              ...result.result.map(({ id }) => ({
                type: "Todos" as const,
                id,
              })),
              {
                type: "Todos",
                id: "ACTIVE",
              },
            ]
          : [{ type: "Todos", id: "ACTIVE" }],
      transformResponse: (rawResult: Tasks) => {
        return rawResult;
      },
    }),
    getCompletedData: builder.query<Tasks, void>({
      query: () => `getCompletedTasks`,
      providesTags: (result) =>
        result
          ? [
              ...result.result.map(({ id }) => ({
                type: "Todos" as const,
                id,
              })),
              {
                type: "Todos",
                id: "COMPLETED",
              },
            ]
          : [{ type: "Todos", id: "COMPLETED" }],
      transformResponse: (rawResult: Tasks) => {
        return rawResult;
      },
    }),
    deleteTask: builder.mutation<Task, string>({
      query: (id) => ({
        url: `deleteTask/${id}`,
        method: `DELETE`,
      }),
      invalidatesTags: (result, error, arg) => [{ type: "Todos", id: arg }],
    }),
    postData: builder.mutation<Task, Partial<Task>>({
      query: (body) => ({
        url: "createTask",
        method: "POST",
        body,
      }),
      invalidatesTags: [
        { type: "Todos", id: "DATA" },
        { type: "Todos", id: "COMPLETED" },
        { type: "Todos", id: "ACTIVE" },
      ],
    }),
    clearCompleted: builder.mutation<Task, void>({
      query: () => ({
        url: "deleteAll",
        method: "DELETE",
      }),
      invalidatesTags: [
        { type: "Todos", id: "COMPLETED" },
        { type: "Todos", id: "DATA" },
      ],
    }),
    updateCheck: builder.mutation<Task, Partial<Task> & Pick<Task, "id">>({
      query: ({ id, ...rest }) => ({
        url: `updateCheck/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: (result, error, args) => [
        { type: "Todos", id: "DATA" },
        { type: "Todos", id: "ACTIVE" },
        { type: "Todos", id: "COMPLETED" },
      ],
    }),
  }),
});

export const {
  useGetDataQuery,
  useGetActiveDataQuery,
  useGetCompletedDataQuery,
  useDeleteTaskMutation,
  usePostDataMutation,
  useClearCompletedMutation,
  useUpdateCheckMutation,
} = API;
