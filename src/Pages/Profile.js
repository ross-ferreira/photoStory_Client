import React, { useEffect, useState, useContext } from 'react';
import { UserContext } from '../App';

const Profile = () => {
    const [dataUserPics, setDataUserPics] = useState([]);
    const { state, dispatch } = useContext(UserContext);
    const [profilePic, setProfilePic] = useState("");
    // const [url, setUrl] = useState("");

    console.log(state)


    useEffect(() => {
        fetch('/mypost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(data => {
                if (!data.error) {
                    // console.log(data);
                    setDataUserPics(data.mypost)
                }
            })
    }, [])

    useEffect(() => {
        if (profilePic) {
            const data = new FormData();
            data.append("file", profilePic);
            data.append("upload_preset", "photostory");
            data.append("cloud_name", "papenwors01");
            fetch("https://api.cloudinary.com/v1_1/papenwors01/image/upload", {
                method: "post",
                body: data
            })
                .then(res => res.json())
                .then(data => {
                    // setUrl(data.url);
                    console.log(data)
                    // localStorage.setItem("user",JSON.stringify({...state,profilePic:data.url}));
                    // dispatch({type:"UPDATEPPIC", payload:data.url})
                    fetch('/updateProfilePic', {
                        method: "put",
                        headers: {
                            "Content-Type": "application/json",
                            "Authorization": "Bearer " + localStorage.getItem("jwt")
                        },
                        body: JSON.stringify({
                            profilePic: data.url
                        })
                    }).then(res => res.json())
                        .then(result => {
                            console.log(result);
                            localStorage.setItem("user", JSON.stringify({ ...state, profilePic: result.profilePic }));
                            dispatch({ type: "UPDATEPPIC", payload: result.profilePic })
                        })
                })
                .catch(err => {
                    console.log(err)
                })
        }
    }, [profilePic])

    const updateProfilePic = (file) => {
        setProfilePic(file)
    }


    return (
        <>
            {state && dataUserPics ? <div className="profile-wrap">
                <div className="upp-profile-wrapper">
                    <div>
                        <img className="profile-pic"
                            src={state.profilePic}
                        />
                    </div>
                    <div>
                        <h4>
                            {state.name}
                        </h4>
                        <div className="profile-stats">
                            <h6>{dataUserPics.length} Posts</h6>
                            <h6>{state ? state.followers.length : "0"} Followers</h6>
                            <h6>{state ? state.following.length : "0"} Following</h6>
                        </div>
                    </div>
                    <div class="file-field input-field">
                        <div class="waves-effect waves-light btn red lighten-1">
                            <span>Upload Image</span>
                            <input type="file"
                                onChange={(e) => { updateProfilePic(e.target.files[0]) }}
                            />
                        </div>
                        <div class="file-path-wrapper">
                            <input class="file-path validate" type="text" />
                        </div>
                    </div>
                </div>
                <div className="gallery">
                    {dataUserPics.map((item, index) => {
                        return <img key={index} className="gallery-img" src={item.photo} />
                    })}
                </div>
            </div>
                : <p>"Loading"</p>}
        </>
    )
}

export default Profile