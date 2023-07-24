import { useEffect } from "react"

const useTitle = (title) =>{

    useEffect(()=>{

        document.title = `${title} | Educate YourSelf`;

    } ,[title])
}

export default useTitle;