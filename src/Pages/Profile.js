import React,{ useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';

const Profile = () => {
    const [dataUserPics, setDataUserPics] = useState([]);
    const {state,dispatch} = useContext(UserContext);

    console.log(state)


    useEffect(()=>{
        fetch('/mypost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(data => {
                if(!data.error){
                // console.log(data);
                setDataUserPics(data.mypost)
                }
            })
      },[])
    return(

        <>
        { state && dataUserPics ? <div className="profile-wrap">
            <div className="upp-profile-wrapper">
                <div>
                    <img className="profile-pic"
                    src="https://media.istockphoto.com/photos/portrait-of-worried-bearded-young-man-looking-up-with-hand-on-chin-picture-id930030808?k=6&m=930030808&s=612x612&w=0&h=i3TtugNX8VihRRAdrdoaHM8L_gWLtRSwk4vRJnIFQiw="
                    />
                </div>
                <div>
                    <h4>
                       {state.name}
                    </h4>
                    <div className="profile-stats">
                        <h6>40 posts</h6>
                        <h6>40 followers</h6>
                        <h6>40 following</h6>
                    </div>
                </div>
            </div>
            <div className="gallery">
                {dataUserPics.map((item,index)=>{
                  return <img key={index} className="gallery-img" src={item.photo}/>
                })}
            </div>
        </div>
        : <p>"Loading"</p> }
        </>
    )
}

export default Profile