import { useEffect } from "react";

const useTitleCount = (count) =>{
    useEffect(()=>{
        if(count >= 1){
            document.title = `Message (${count})`;
        }else{
            document.title = "Nawaz Danish"
        }
    },[count])
};

export default useTitleCount;