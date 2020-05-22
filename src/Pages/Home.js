import React, { useEffect,useState,useContext } from 'react';
import {UserContext} from '../App';

const Home = () => {
    const {state,dispath} = useContext(UserContext);
    const [dataImages, setDataImages] = useState([]);
    //Dont need to check if user has TOKEN- ALREADY Logged IN
    useEffect(() => {
        fetch('/allpost', {
            headers: {
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(data => {
                if(!data.error){
                console.log(data);
                setDataImages(data.posts)
                }
            })
    }, [])

    const likePost = (id) =>{
        fetch("/like",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result =>{
            //updated the LIKED Picture only
            const newData = dataImages.map(item =>{
                if(item._id == result._id){
                    return result;
                } else {
                    return item;
                }
            })
            setDataImages(newData);
        }).catch(err =>{
            console.log(err);
        })
    }

    const unLikePost = (id) =>{
        fetch("/unlike",{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization": "Bearer " + localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
        .then(result =>{
            const newData = dataImages.map(item =>{
                if(item._id == result._id){
                    return result;
                } else {
                    return item;
                }
            })
            setDataImages(newData);
        }).catch(err => {
            console.log(err);
        })
    }

    return (
        <div className="home">
            {dataImages.map((item, index) => {
                return(
                    <div key={index} className="card home-card">
                        <h5>{item.postedBy.name}</h5>
                        <div className="card-image">
                            <img src={item.photo} />
                        </div>
                        <div className="card-content">
                            <i className="material-icons">favorite_border</i>
                            <i className="material-icons"
                                onClick={()=>{likePost(item._id)}}
                            >thumb_up</i>
                            <i className="material-icons"
                                onClick={()=>{unLikePost(item._id)}}
                            >thumb_down</i>
                                <h6>{item.likes.length} Likes</h6>
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                <input type="text" placeholder="add a comment" />
                        </div>
                    </div>
                )
            })}

        </div>
    )
}

export default Home