import react from 'react'
import Logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'
import './Logosearch.css'
const LogoSearch = () => {
    return (
        <div class = "LogoSearch">
                <img src ={Logo}alt=""/>
                    <div class ="Search">
                        <input type = "text" placeholder= '#Explore'></input>
                        <div class="s-icon">
                            <UilSearch/>
                        </div>
                    </div>
                        
        </div>
    )
}

export default LogoSearch