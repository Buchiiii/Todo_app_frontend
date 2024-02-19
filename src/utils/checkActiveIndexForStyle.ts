export const checkActiveIndexForStyle=(activeIndex: number, index:number,dark: boolean)=>{
    if (activeIndex === index && !dark) {
        return "text-blue-500 font-bold w-full";
      } else if (activeIndex === index && dark) {
        return "text-blue-500 font-bold w-full";
      } else if (activeIndex !== index && !dark) {
        return "text-gray-400 hover:text-gray-800 w-full";
      } else {
        return "text-gray-400 hover:text-slate-50 w-full ";
      }
}