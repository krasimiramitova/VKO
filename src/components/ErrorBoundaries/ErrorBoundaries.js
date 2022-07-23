import React from "react";
import { Component } from "react";
import NotFoundPage from "../../pages/NotFound/NotFound";

class ErrorBoundaries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError : false
        }
    }
    
    componentDidCatch(){
        this.setState(
            {
                hasError : true
            }
        );
    }

    render() {
        if (this.state.hasError) {
            return <NotFoundPage></NotFoundPage>;
        }

        return this.props.children;
    }
}

export default ErrorBoundaries;