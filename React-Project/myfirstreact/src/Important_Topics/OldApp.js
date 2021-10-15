import React from "react";

class App extends React.Component {

    constructor() {
        super()
        this.state = {
            loading : false,
            data: {}
        }
    }

    async componentDidMount() {
        this.setState({loading: true})

        try {

            const response = await fetch("https://sv443.net/jokeapi/v2/joke/Any");
            let responseJson = await response.json();

            this.setState({
                loading : false,
                data : responseJson
            } )
            
        } catch (error) {
            console.log(error)
        }
        
    }


    render() {
        const text = this.state.loading ? "loading..." : this.state.data.category

        return (
            <div>
                <p style={{fontSize : 100}}>{text}</p>
            </div>
        )
    }
}

// export default App;