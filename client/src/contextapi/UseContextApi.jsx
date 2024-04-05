import { useContext } from "react"
import { AppContext } from "../contextapi/CreateContexAoi"


const useAppContext=()=>{
    return useContext(AppContext)
}
export default useAppContext