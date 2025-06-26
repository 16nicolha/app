import React from 'react'
import Cover from '../../img/cover.jpg'
import Profile from '../../img/profileImg.jpg'
const ProfileCard = () => {
    return (
        <div class = "ProfileCard">
            <div class ="ProfileImages">
                <img src={Cover} alt = ""></img>
                <img src={Profile} alt = ""></img>
            </div>

            <div class ="ProfileName">
                <span>Zendeya</span>
                <span>Senior UI/UX Designer</span>
            </div>

            <div class = "followStatus">
                <hr />
                <div>
                    <div class = "follow">
                        <span>6,890</span>
                        <span>Followings</span>
                    </div>
                    <div class ="vl"></div>
                    <div class ="follow">
                        <span>1</span>
                        <span>Followers</span>
                    </div>
                </div>
                <hr/>
            </div>
        </div>
    )

}

export default ProfileCard