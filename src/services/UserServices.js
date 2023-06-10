import instance from "./customizeAxios";

const FetchAllUser = (page) => {
  return instance.get(`/api/users?page=${page}`);
};

export { FetchAllUser };
