import React from 'react'
import './Home.css'
import ProfileSide from '../Components/profileSide/ProfileSide';

const Home = () => {
    return (
        <div class = "Home">
            <ProfileSide/>
            <div class="postSide">Posts</div>
            <div class="RightSide">Rightside</div>
        </div>
    )

}

export default Home