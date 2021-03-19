import React, { Component } from 'react';
import { db } from '../../citt/src';

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            frase: "Nada",
        }
    }

    componentDidMount() {

        db.collection("cittbdd").doc("85m2ZZfAAqsyUTBfd3l4").get()
            .then(
                (doc => {
                    const data = doc.data();
                    this.setState({
                        frase: data.nacho
                    });
                })
            )
    }

    render() {
        
        return (
            <div>
                {this.state.frase}
            </div>

        );
    }
}
export default Home;