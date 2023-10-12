export const checkActiveIndexForStyle=(activeIndex: number, index:number,dark: boolean)=>{
    if (activeIndex === index && !dark) {
        return "text-blue-500 font-bold";
      } else if (activeIndex === index && dark) {
        return "text-blue-500 font-bold";
      } else if (activeIndex !== index && !dark) {
        return "text-gray-400 hover:text-gray-800 ";
      } else {
        return "text-gray-400 hover:text-slate-50 ";
      }
}