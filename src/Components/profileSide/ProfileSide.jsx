import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import '../ProfileCard/ProfileCard.css'
import'./ProfileSide.css'
const ProfileSide = () => {
    return (
        <div class = "ProfileSide">
            <LogoSearch/>
            <ProfileCard/>
        </div>
    )
}

export default ProfileSide