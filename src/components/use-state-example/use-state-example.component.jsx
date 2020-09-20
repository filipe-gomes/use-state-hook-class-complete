import React, { useState } from 'react';

import Card from '../card/card.component';

// export class StateClassComponent extends React.Component {
//     constructor() {
//         super();

//         this.state = {
//             name: 'Filipe',
//             address: 'KC'
//         };
//     }

//     render() {
//         return (
//             <Card>
//                 <h1>{this.state.name} lives in {this.state.address}</h1>
//                 <button onClick={() => this.setState({ name: 'João' })}>
//                     Set Name to João
//                 </button>
//                 <button onClick={() => this.setState({ address: 'Fortaleza' })}>
//                     Set Address to Fortaleza
//                 </button>
//             </Card>
//         );
//     }
// }

export const UseStateComp = () => {
    const [name, setName] = useState('Filipe');
    const [address, setAddress] = useState('KC');

    return (
        <Card>
            <h1>{name} lives in {address}</h1>
            <button onClick={() => setName('João')}>
                Set Name to João
            </button>
            <button onClick={() => setAddress('Fortaleza' )}>
                Set Address to Fortaleza
            </button>
        </Card>
    );
}