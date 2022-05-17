import { Component } from "react";
import Spinner from "./Spinner";

class ErrorBoundary extends Component {
    state = {
        error: false
    }

    componentDidCatch(error, errorInfo) {
       // console.log(error, errorInfo);
        this.setState({
            error: true
        })
    }

    render() {
        if (this.state.error) {
            return <Spinner/>
        }

        return this.props.children;
    }
}

export default ErrorBoundary;