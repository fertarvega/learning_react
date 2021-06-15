import React from 'react'
import Hero from "../../components/Hero"
import Badge from "../../components/Badge"
import BadgeForm from "../../components/BadgeForm"
import "../NewBadge/NewBadge.css"
import Footer from "../../components/Footer"
import PageError from "../../components/PageError"
import Loader from "../../components/Loader"
import api from '../../libs/fetch'

class EditBadge extends React.Component{

    state = {
        loading : false,
        error: null,
        form:{
            header_img_url:"",
            profile_picture_url:"",
            name:"",
            age:"",
            city:"",
            followers:"",
            likes:"",
            posts:"",
            post:"",
        }
    }

    componentDidMount(){
        this.fetchData();
    }

    fetchData = async () => {
        this.setState({ loading: true, error: null })
        try {
            const data = await api.badges.read(this.props.match.params.badgeId)
            this.setState({ loading: false, form: data })
        } catch (error) {
            this.setState({ loading: false, error: error })
        }
    }
    
    handleChange = event => {
        this.setState({
            form:{
                ... this.state.form,
                [event.target.name]: event.target.value
            }
        })
    }

    handleSubmit = async (event) => {
        event.preventDefault();
        this.setState({loading:true, error:null})

        try{
            await api.badges.update(this.props.match.params.badgeId, this.state.form)
            this.setState({loading:false, error:null})
            this.props.history.push("/badges")
        } catch (error){
            this.setState({loading: false, error: error})
        }
    }

    render(){

        if(this.state.loading){
            return <Loader></Loader>
        }


        if (this.state.error) {
            return <PageError error={this.state.error.message}></PageError>
        }

        return(
            <React.Fragment>
                <Hero h={"15vh"}></Hero>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <Badge
                                header_img_url = {this.state.form.header_img_url || "https://ak.picdn.net/shutterstock/videos/1033914530/thumb/1.jpg"}
                                profile_picture_url = {this.state.form.profile_picture_url || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5_3GiNztyjNORByzyMdz3UhuL_1HzJ6VUyQ&usqp=CAU"}
                                name = {this.state.form.name || "Albert Einstein"}
                                age = {this.state.form.age || "60"}
                                city = {this.state.form.city || "Colonia"}
                                followers = {this.state.form.followers || "100M"}
                                likes = {this.state.form.likes || "739M"}
                                posts = {this.state.form.posts || "49"}
                                ></Badge>
                        </div>
                        <div className="col">
                        <BadgeForm
                          onChange={this.handleChange}
                          onSubmit={this.handleSubmit}
                          formValues={this.state.form}
                        ></BadgeForm>
                        </div>
                    </div>
                </div>
                <Footer s={{bottom: 0}}></Footer>
            </React.Fragment>
        );
    }
}

export default EditBadge;