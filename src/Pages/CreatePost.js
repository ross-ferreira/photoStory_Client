import React from 'react';

const CreatePost = () => {

    return(
        <div className="card input-filled">
            <input type="text" placeholder="title"/>
            <input type="text" placeholder="body"/>
            <div class="file-field input-field">
                <div class="waves-effect waves-light btn red lighten-1">
                    <span>Upload Image</span>
                    <input type="file"/>
                </div>
                <div class="file-path-wrapper">
                    <input class="file-path validate" type="text"/>
                </div>
            </div>
            <button className="waves-effect waves-light btn red lighten-1">Submit Post</button>
        </div>
    )
}

export default CreatePost