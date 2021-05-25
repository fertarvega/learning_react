import React from "react"
import "./style/BadgeForm.css"

class BadgeForm extends React.Component {
    render() {
        return (
            <React.Fragment>
                <div className="BadgeForm m-5">
                    <form onSubmit={this.props.onSubmit}>
                        <div className="form-group mb-2">
                            <label className="mb-1">Name:</label>
                            <input type="text" className="form-control" name="name" onChange={this.props.onChange}
                                value={this.props.formValues.name} />

                            <label className="mb-1">Profile Picture URL:</label>
                            <input type="text" className="form-control" name="profile_picture" onChange={this.props.onChange}
                                value={this.props.formValues.name} />

                            <label className="mb-1">Badge Hero URL:</label>
                            <input type="text" className="form-control" name="badge_hero_url" onChange={this.props.onChange}
                                value={this.props.formValues.name} />

                            <label className="mb-1">Age:</label>
                            <input type="text" className="form-control" name="age" onChange={this.props.onChange}
                                value={this.props.formValues.name} />

                            <label className="mb-1">City:</label>
                            <input type="text" className="form-control" name="city" onChange={this.props.onChange}
                                value={this.props.formValues.name} />

                        </div>
                    </form>
                </div>
            </React.Fragment>
        );
    }
}

export default BadgeForm;