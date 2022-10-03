import { InjectedConnector } from 'wagmi/connectors/injected';
import { signIn } from 'next-auth/react';
import { useAccount, useConnect, useSignMessage, useDisconnect } from 'wagmi';
import { useRouter } from 'next/router';
import React, { Component } from 'react';
import styles from '../styles/Home.module.css'
import {
    Container,
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Card,
    Button,
    NavLink
} from 'reactstrap';
import axios from 'axios';

function SignIn() {
    const { connectAsync } = useConnect();
    const { disconnectAsync } = useDisconnect();
    const { isConnected } = useAccount();
    const { signMessageAsync } = useSignMessage();
    const { push } = useRouter();

    const handleAuth = async () => {
        if (isConnected) {
            await disconnectAsync();
        }

        const { account, chain } = await connectAsync({ connector: new InjectedConnector() });

        const userData = { address: account, chain: chain.id, network: 'evm' };

        const { data } = await axios.post('/api/auth/request-message', userData, {
            headers: {
                'content-type': 'application/json',
            },
        });

        const message = data.message;

        const signature = await signMessageAsync({ message });

        // redirect user after success authentication to '/user' page
        const { url } = await signIn('credentials', { message, signature, redirect: true, callbackUrl: '/user' });
        /**
         * instead of using signIn(..., redirect: "/user")
         * we get the url from callback and push it to the router to avoid page refreshing
         */
        push(url);
    };



    return (


        <div
            style={{
                backgroundImage: `url(https://i.imgur.com/DVVNorR.png)`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >

            <Card style={{ width: '20rem' }}>
                <img src="https://i.imgur.com/aPIZnjv.png" height="100px" alt="" className="img-fluid mx-auto d-block" />
                <h3> Sign Into Your CDC Wallet (Coming Soon)</h3>
                <Button variant="primary" className="btn-primary"



                    onClick="#">Authenticate via Crypto.com Defi Wallet</Button>
            </Card>

            <Card style={{ width: '20rem' }}>
                <img src="https://i.imgur.com/u4bEfVF.png" alt="" className="img-fluid mx-auto d-block" />
                <h3> Sign Into Your Metamask Wallet</h3>
                <Button color="primary"



                    onClick={() => handleAuth()}>Authenticate via Metamask</Button>
            </Card>






        </div>
    );
}

export default SignIn;
