import React, {Component} from 'react';

class AddPhoto extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    
    handleSubmit(event) {
        event.preventDefault();

        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }

        if(description && imageLink) {
            this.props.onAddPhoto(post)
        }
    }


    render() {
        console.log(this.props.baby)
        return(
            <div>
                 <h1>Travelgram</h1>
                 
                 <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link"/>
                        <input type="text" placeholder="Description" name="description"/>
                        <button className="post-button">Post</button>
                    </form>
                 </div>     
            </div>
        ) 
    }

}

export default AddPhoto;