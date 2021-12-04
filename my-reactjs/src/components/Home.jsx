import store from '../store/store'
import setUserLocal from '../store/actions'
import {useSelector} from "react-redux";

function Home() {
    const password = useSelector((state) => state.password)

   return(
       <div>Home: {password}</div>
   )
}

export default Home