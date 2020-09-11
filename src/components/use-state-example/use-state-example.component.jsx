import React from 'react';

import Card from '../card/card.component';

export class StateClassComponent extends React.Component {
    constructor() {
        super();

        this.state = {
            name: 'Filipe',
            address: 'KC'
        };
    }

    render() {
        return (
            <Card>
                <h1>{this.state.name} lives in {this.state.address}</h1>
                <button onClick={() => this.setState({ name: 'João' })}>
                    Set Name to João
                </button>
                <button onClick={() => this.setState({ address: 'Fortaleza' })}>
                    Set Address to Fortaleza
                </button>
            </Card>
        );
    }
}