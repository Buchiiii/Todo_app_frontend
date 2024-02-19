export const checkActiveIndexForStyleForTabDiv = (
  activeIndex: number,
  id: number
) => {
  if (activeIndex === id) {
    return "overflow-y-auto h-[350px] block ";
  } else {
    return "hidden";
  }
};
