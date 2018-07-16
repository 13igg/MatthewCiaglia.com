import React, {Component} from 'react';
import Layout from '../components/Layout';

class Blockchain extends Component{
    render(){
        return(
            <Layout>
                <p>
                   I have been working on a Microsoft stack creating custom apps for the last few years and I am looking for a change. A change not only to my work, but to how I think about and solve problems. Blockchain technology has so many opportunities to evolve and enhance how we solution the problems of today, that it would be foolish not to embrace it; whether it is designing software in the healthcare industry to track drugs through the supply chain, or collecting digital cats, I want to be a part of this movement. 
                </p>
                <br/>
                <p>Plan on making my Ethereum DAPPS playable here on the test Ethereum Network</p>
                <p>It would be a good way to show off Solidity + React</p>
                <br/>
                <div>
                    <h3>DAPP #1</h3>
                    <p>
                        Play Rock Paper Scissors against me! -- Win and get a 13igg Token!
                        My pick has already been played, think you can outsmart me?
                        Pick your play (Rock/Paper/Scissors) and press send
                        It will be sent to the Ropsten network (paying only the gas fee)
                        Once your play has been made, I will be notified to confirm my pick.
                        I will have 30 seconds to confirm my pick. If I fail to confirm, or I attempt change my pick, you will automagically win 10 13igg Tokens!
                    </p>
                </div>
            </Layout>
        );
    };
}

export default Blockchain;