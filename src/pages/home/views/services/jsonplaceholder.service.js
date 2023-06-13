import {
  jsonPlaceHolderAPI,
  jsonplaceholder_paths,
} from "../../../../core/apis/jsonplaceholder.api";

export const getUserById = async (id) => {
  const { data } = await jsonPlaceHolderAPI.get(
    `${jsonplaceholder_paths.users}/${id}`
  );

  return data;
};
