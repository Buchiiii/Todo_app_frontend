import { Tasks } from "./Task";

export const checkActiveIndexForItems = (data: Tasks | undefined ) => {
  if (data) {
    if (data?.length === 1) {
      return `${data?.length} item left`;
    } else {
      return `${data?.length} items left`;
    }
  } else {
    return `- items left`;
  }
};
