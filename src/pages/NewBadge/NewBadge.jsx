import React from 'react'
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import "./NewBadge.css"

class NewBadge extends React.Component{

    state = {
        loading : false,
        error: null,
        form:{
            header_picture:"",
            profile_picture:"",
            name:"",
            age:"",
            city:"",
            followers:"",
            likes:"",
            posts:"",
        }
    }

    render(){
        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="col">
                        <Badge
                            header_picture = {this.state.form.header_picture || "https://ak.picdn.net/shutterstock/videos/1033914530/thumb/1.jpg"}
                            profile_picture = {this.state.form.profile_picture || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_3GiNztyjNORByzyMdz3UhuL_1HzJ6VUyQ&usqp=CAU"}
                            name = {this.state.form.name || "Albert Einstein"}
                            age = {this.state.form.age || "60"}
                            city = {this.state.form.city || "Colonia"}
                            followers = {this.state.form.followers || "100M"}
                            likes = {this.state.form.likes || "739M"}
                            posts = {this.state.form.posts || "49"}
                        ></Badge>
                    </div>
                    <div className="col">

                    </div>
                </div>

            </React.Fragment>
        );
    }
}

export default NewBadge;