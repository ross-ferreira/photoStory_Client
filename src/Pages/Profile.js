import React from 'react';

const Profile = () => {

    return(
        <div className="profile-wrap">
            <div className="upp-profile-wrapper">
                <div>
                    <img className="profile-pic"
                    src="https://media.istockphoto.com/photos/portrait-of-worried-bearded-young-man-looking-up-with-hand-on-chin-picture-id930030808?k=6&m=930030808&s=612x612&w=0&h=i3TtugNX8VihRRAdrdoaHM8L_gWLtRSwk4vRJnIFQiw="
                    />
                </div>
                <div>
                    <h4>
                        -My Name-
                    </h4>
                    <div className="profile-stats">
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                <img className="gallery-img" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                <img className="gallery-img" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                <img className="gallery-img" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                <img className="gallery-img" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                <img className="gallery-img" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
                <img className="gallery-img" src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80"/>
            </div>
        </div>
    )
}

export default Profile