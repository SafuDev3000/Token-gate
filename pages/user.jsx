import { getSession, signOut } from 'next-auth/react';
import { useRouter } from 'next/router';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/Home.module.css';
import Header from "../components/Header";
import Layout from "../components/Layout";
import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
} from "reactstrap";



// gets a prop from getServerSideProps
function User({ user }) {
    const { push } = useRouter();



    return (


        <div
            style={{
                backgroundImage: `url(https://i.imgur.com/DVVNorR.png)`,
                display: 'block',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100vh',
            }}
        >
<Layout pageTitle="Token Gated VIP Landing Page">
                <Header />
</Layout>

    <img src="https://i.imgur.com/S6f6bl6.png" height="500px" alt="Logo" />
<br></br>
            <br></br><h1>THANKS FOR AUTHENTICATING!</h1>
            


            <Card>
            <h4>USER SESSION DETAILS:</h4>
            <pre>{JSON.stringify(user, null, 2)}</pre>
                <Button type="button" color="primary"
                    
                 onClick={() => signOut({ redirect: '/signin' })}>Sign out</Button><br></br><br></br>
                <Button color="primary" onClick={() => push('/protected')}>Go to Members Only Content</Button>
            </Card>
        </div>
    );
}

export async function getServerSideProps(context) {
    const session = await getSession(context);

    // redirect if not authenticated
    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }

    return {
        props: { user: session.user },
    };
}

export default User;