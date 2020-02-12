import React, {Component} from 'react';
import Title from './Title';
import Travelgram from './Travelgram';
import AddPhoto from './AddPhoto';
import {Route} from 'react-router-dom';


class Main extends Component {
    constructor() {
        super()
            this.state = {
                posts: [{
                    id: 0,
                    description: "As beautiful as the sunset",
                    imageLink: "https://images.pexels.com/photos/35599/sunset-field-poppy-sun-priroda.jpg?cs=srgb&dl=bloom-blossom-clouds-35599.jpg&fm=jpg"
                    }, {
                    id: 1,
                    description: "How can this place exist? It's magical!",
                    imageLink: "https://images.pexels.com/photos/414102/pexels-photo-414102.jpeg?cs=srgb&dl=beautiful-bright-clouds-414102.jpg&fm=jpg"
                    }, {
                    id: 2,
                    description: "Heaven on earth indeed!",
                    imageLink: "https://images.pexels.com/photos/36478/amazing-beautiful-beauty-blue.jpg?cs=srgb&dl=breathtaking-calm-color-36478.jpg&fm=jpg"
                    }, {
                    id: 3,
                    description: "Amazing northern lights",
                    imageLink: "https://www.tripsavvy.com/thmb/vwBB4EPR1xvRnGxPTeSZvLpveXc=/2120x1414/filters:fill(auto,1)/Iceland-village-northern-lights-5c1f0c8446e0fb0001fdc938.jpg"
                    }, {
                    id: 4,
                    description: "Frozen heart",
                    imageLink: "https://s27135.pcdn.co/wp-content/uploads/2019/02/4-days-in-Iceland-the-best-self-drive-road-trip-itinerary-878x585.jpg.optimal.jpg"      
                    }, {
                    id: 5,
                    description: "Let's take this journey together",
                    imageLink: "https://media.holidayme.com/wp-content/uploads/2018/10/17172526/Holidayme_Iceland-Natural-Phenomena_Route-1_Banner_shutterstock_611794541.jpg"    
                    }, {
                    id: 6,
                    description:"Once in a lifetime experience!",
                    imageLink:"https://www.adventurewomen.com/wp-content/uploads/2019/05/HERO-Iceland-Winter.jpg" 
                    }, {
                    id: 7,
                    description: "Captivating sight!",
                    imageLink: "https://s.marketwatch.com/public/resources/images/MW-HQ781_Japan__ZH_20190905153401.jpg"    
                    }, {
                    id: 8,
                    description: "El Nido is a treasure",
                    imageLink: "https://i0.wp.com/outoftownblog.com/wp-content/uploads/2017/01/Amazing-Beaches-in-El-Nido-Palawan.jpg?fit=900%2C686&ssl=1"
                    }],

                    screen: 'photos' 
                }
            this.removePhoto = this.removePhoto.bind(this)        
    }

    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
            
        }))
    }

    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }

    render() {
        console.log(this.state.posts)
        return(
            <div>
                <Route exact path="/" render={() =>(
                    <div>
                        <Title title={'Travelgram'} method={this.method}/>
                        <Travelgram posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate}/>  
                    </div>
                )}/>
                
                    
                <Route path="/AddPhoto" render = {({history}) => (
                            <AddPhoto onAddPhoto={(addedPost) => {
                                // console.log(addedPost)
                                this.addPhoto(addedPost)
                                history.push('./')
                            }}/>
                       
                )}/>

                {/* alternate-if only 1 component to render inside a div */}
                {/* <Route path="/AddPhoto" component={AddPhoto}/> */}
            
                
            </div>

        ) 
    }

}


export default Main;