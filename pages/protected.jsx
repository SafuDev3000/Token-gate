import { getSession } from 'next-auth/react';
import Moralis from 'moralis';
import { EvmChain } from '@moralisweb3/evm-utils';
import styles from '../styles/Home.module.css'
import Layout from "../components/Layout";
import Header from "../components/Header";


import {
    Button,
    Card,
    CardBody,
    CardImg,
    CardTitle,
    CardText,
} from "reactstrap";
import { useRouter } from 'next/router';

const cardStyle = { width: "18rem" };









function Protected({ message, nftList, nativeBalance, tokens }) {
    const { push } = useRouter();
    console.log(nftList)
    console.log(tokens)
    console.log(nativeBalance)



    return (

        <div
            style={{
                backgroundImage: `url(https://i.imgur.com/DVVNorR.png)`,

            }}
        >

            {/*COMMENTS*/}
            <Button color="danger" onClick={() => push('/user')}>Profile</Button>
            <Layout pageTitle="Gated Content Page">
                <Header />
            </Layout>
            <h3><div>{message}</div></h3>
            <Button color="primary" onclick="">
                Claim All Royalties  
            </Button>
            <Button color="success" onclick="">
                  Claim All Staking Rewards
            </Button>
            <br></br><br></br>



            {/*COMMENTS*/}
            <Card style={{ width: '18rem' }}>
                <div>TOTAL STAKED BALANCE = </div>
            </Card>

            <Card style={{ width: '18rem' }}>
                <div>TOTAL CROOK NFTS = </div>
            </Card>
            <Card style={{ width: '18rem' }}>
                <div>TOTAL Royalty Rewards = </div>
            </Card>

            <Card style={{ width: '18rem' }}>
                <div>CRO BALANCE = {nativeBalance}</div>
            </Card>

            <Card style={{ width: '18rem' }}>
            </Card>


            {nftList.map((e) => {


            })}

            <pre>{JSON.stringify(nftList.metadata, null, 2)}</pre>

            {/*COMMENTS*/}
            
                
                    
                        <Card style={cardStyle}>
                            <CardImg
                                alt="..."
                                src="https://i.imgur.com/69sF9qC.png"
                                top
                            ></CardImg>
                            <CardBody>
                                <CardTitle><b>Cro Crooks Merch Redeem</b></CardTitle>
                                <CardText>
                                    Redeem your Merch as a Cro Crooks nFT Holder. Must pay cGOLD to start order processing. Shipments will be started in Q4 (October) (Initial Limit: 1 Redeem Per Wallet), All $cGOLD used for Redemption are burned to ensure for healthy Tokenomics.
                                </CardText>

                                <Button color="success" onclick="">
                                    REDEEM T-SHIRT - 1,500 $cGOLD
                                </Button>
                            </CardBody>
                        </Card>


                    

                    <Card style={cardStyle}>
                        <CardImg
                            alt="..."
                            src="https://i.imgur.com/FpyuHCC.png"
                            top
                        ></CardImg>
                        <CardBody>
                            <CardTitle><b>Cro Crooks Hoodie Redeem</b></CardTitle>
                            <CardText>
                                Redeem your Hoodie as a Cro Crooks nFT Holder. Must pay cGOLD to start order processing. Shipments will be started in Q4 (October) (Initial Limit: 1 Redeem Per Wallet), All $cGOLD used for Redemption are burned to ensure for healthy Tokenomics.
                            </CardText>

                            <Button color="success" onclick="">
                                REDEEM HOODIE - 2,500 $cGOLD
                            </Button>
                        </CardBody>
                    </Card>



                    {/*CARD 3 ROW 1*/}
                    <Card style={cardStyle}>
                        <CardImg
                            alt="..."
                            src="https://i.imgur.com/C2jmfQ0.jpg"
                            top
                        ></CardImg>
                        <CardBody>
                            <CardTitle><b>REDEEM A COMIC NFT :)</b></CardTitle>
                            <CardText>
                                Our Weekly Comic's featuring the Crooks Story are BACK and being offered as EXCLUSIVE CONTENT to our CROOK NFT Holders. Phygital NFT Items are also available for a limited TIME for those who decide to MINT.
                            </CardText>

                            <Button color="success" href="https://www.crosea.io/collection/0x230Bb7ce185CD0042973202f5F38B7072440e2C9">
                                REDEEM COMIC NFT - 500 $cGOLD
                            </Button>

                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <CardImg
                            alt="..."
                            src="https://i.imgur.com/YnYPFBv.png"
                            top
                        ></CardImg>
                        <CardBody>
                            <CardTitle><b>REDEEM A COMIC LOGO WALLPAPER :)</b></CardTitle>
                            <CardText>
                                Our Weekly Comic's featuring the Crooks Story are BACK and being offered as EXCLUSIVE CONTENT to our CROOK NFT Holders. Phygital NFT Items are also available for a limited TIME for those who decide to MINT.
                            </CardText>

                            <Button color="success" href="https://www.crosea.io/collection/0x230Bb7ce185CD0042973202f5F38B7072440e2C9">
                                REDEEM COMIC NFT - 50 $cGOLD
                            </Button>

                        </CardBody>
                    </Card>
                

                {/*COMMENTS*/}
                
                    
                        <Card style={cardStyle}>
                            <CardImg
                                alt="..."
                                src="https://i.imgur.com/iSmxFcv.png"
                                top
                            ></CardImg>
                            <CardBody>
                                <CardTitle><b>BURN $CGOLD</b></CardTitle>
                                <CardText>
                                    Purchase More Crooks to accrue More $cGOLD. Buy a CroBadge to be eligible for More Giveaways!
                                </CardText>
                                <Button color="danger" href="javascript:;">
                                    BURN $cGOLD!
                                </Button>


                            </CardBody>
                        </Card>
                    

                    <Card style={cardStyle}>
                        <CardImg
                            alt="..."
                            src="https://i.imgur.com/otgoGXM.png"
                            top
                        ></CardImg>
                        <CardBody>
                            <CardTitle><b>BUY $CGOLD</b></CardTitle>
                            <CardText>
                                Purchase More Crooks to accrue More $cGOLD. Buy a CroBadge to be eligible for More Giveaways!
                            </CardText>
                            <Button color="success" href="javascript:;">
                                BUY $cGOLD!
                            </Button>


                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <CardImg
                            alt="..."
                            src="https://i.imgur.com/nT0cIaC.png"
                            top
                        ></CardImg>
                        <CardBody>
                            <CardTitle><b>DONATE $CGOLD</b></CardTitle>
                            <CardText>
                                Purchase More Crooks to accrue More $cGOLD. Buy a CroBadge to be eligible for More Giveaways!
                            </CardText>
                            <Button color="primary" href="javascript:;">
                                DONATE $cGOLD!
                            </Button>


                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <CardImg
                            alt="..."
                            src="https://i.imgur.com/2OgHKjG.png"
                            top
                        ></CardImg>
                        <CardBody>
                            <CardTitle><b>BECOME A LIQUIDITY PROVIDER</b></CardTitle>
                            <CardText>
                                Learn more about the benefits of providing liquidity and impernant loss before starting this process. Best for longer term supporters of the project.
                            </CardText>
                            <Button color="primary" href="javascript:;">
                                ADD LP
                            </Button>


                        </CardBody>
                    </Card>


                


                
                    
                        <Card style={cardStyle}>
                            <CardImg
                                alt="..."
                                src="https://i.imgur.com/Jd982an.png"
                                top
                            ></CardImg>
                            <CardBody>
                                <CardTitle><b>INCREASE REWARDS</b></CardTitle>
                                <CardText>
                                    Purchase More Crooks to accrue More $cGOLD. Buy a CroBadge to be eligible for More Giveaways!
                                </CardText>
                                <Button color="success" href="javascript:;">
                                    BUY CROOK NFTs
                                </Button>


                            </CardBody>
                        </Card>

                    
                    <Card style={cardStyle}>
                        <CardImg
                            alt="..."
                            src="https://i.imgur.com/Au09h4F.png"
                            top
                        ></CardImg>
                        <CardBody>
                            <CardTitle><b>Redeem CUSTOM NFT</b></CardTitle>
                            <CardText>
                                Request a CUSTOM NFT From any Collection! :)
                                Provide details so we can make it personal just for you! :)
                            </CardText>
                            <Button color="success" href="javascript:;">
                               Redeem 500 $cGOLD
                            </Button>


                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <CardImg
                            alt="..."
                            src="https://i.imgur.com/w4cOdip.jpg"
                            top
                        ></CardImg>
                        <CardBody>
                            <CardTitle><b>MINT A FREE NFT - Wanted Posters</b></CardTitle>
                            <CardText>
                                Purchase More Crooks to accrue More $cGOLD. Buy a CroBadge to be eligible for More Giveaways!
                            </CardText>
                            <Button color="primary" href="javascript:;">
                                MINT A POSTER NFT!
                            </Button>


                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <CardImg
                            alt="..."
                            src="https://i.imgur.com/kYL6q8p.png"
                            top
                        ></CardImg>
                        <CardBody>
                            <CardTitle><b>MINT A FREE NFT - CCPD: PUGS</b></CardTitle>
                            <CardText>
                                Our First Crook Holders EXCLUSIVE Drop! :) Must hold a Crook to Mint one of these. Each Mint Cost CroGold, CroGold is burned with every transaction with promote's healthy Tokenomics for our Ecosystem.
                            </CardText>
                            <Button color="primary" href="javascript:;">
                                MINT A PUG NFT!
                            </Button>


                        </CardBody>
                    </Card>
                
                
                    
                        <Card style={cardStyle}>
                            <CardImg
                                alt="..."
                                src="https://i.imgur.com/LsGsY3O.png"
                                top
                            ></CardImg>
                            <CardBody>
                                <CardTitle><b>JOIN DAO (5-10)</b></CardTitle>
                                <CardText>
                                    Purchase More Crooks to accrue More $cGOLD. Buy a CroBadge to be eligible for More Giveaways!
                                </CardText>
                                <Button color="info" href="javascript:;">
                                    ACCESS DAO CHAT
                                </Button>


                            </CardBody>
                        </Card>

                    
                    <Card style={cardStyle}>
                        <CardImg
                            alt="..."
                            src="https://i.imgur.com/thR1DpQ.png"
                            top
                        ></CardImg>
                        <CardBody>
                            <CardTitle><b>JOIN CRYPTO TRADING ALPHA CHAT</b></CardTitle>
                            <CardText>
                                Purchase More Crooks to accrue More $cGOLD. Buy a CroBadge to be eligible for More Giveaways!
                            </CardText>
                            <Button color="info" href="javascript:;">
                                JOIN CRYPTO CHAT!
                            </Button>


                        </CardBody>
                    </Card>
                    <Card style={cardStyle}>
                        <CardImg
                            alt="..."
                            src="https://i.imgur.com/iVakIFF.png"
                            top
                        ></CardImg>
                        <CardBody>
                            <CardTitle><b>JOIN NFT ALPHA CHAT</b></CardTitle>
                            <CardText>
                                Our First Crook Holders EXCLUSIVE Drop! :) Must hold a Crook to Mint one of these. Each Mint Cost CroGold, CroGold is burned with every transaction with promote's healthy Tokenomics for our Ecosystem.
                            </CardText>
                            <Button color="info" href="javascript:;">
                                JOIN NFT ALPHA CHAT!
                            </Button>


                        </CardBody>
                    </Card>
                


            

        </div>


    );
}





export async function getServerSideProps(context) {

    const session = await getSession(context);

    if (!session) {
        return {
            redirect: {
                destination: '/signin',
                permanent: false,
            },
        };
    }


    // INITIALIZE MORALIS
    await Moralis.start({ apiKey: process.env.MORALIS_API_KEY });

    // GET NFTS
    const nftList = await Moralis.EvmApi.account.getNFTsForContract({
        address: session.user.address,
        tokenAddress: '0x230Bb7ce185CD0042973202f5F38B7072440e2C9',
        chain: 25, // defualt 1 (ETH)


    });

    const nfts = nftList.result.map((nft) => ({
        name: nft.result.name,
        amount: nft.result.amount,
        metadata: nft.result.metadata,
    }));


    // Get token balances
    const tokenBalances = await Moralis.EvmApi.account.getTokenBalances({
        address: session.user.address,
        chain: 25, // defualt 1 (ETH)
    });

    const tokens = tokenBalances.result.map((token) => token.display());



    // CRO BALANCES
    const nativeBalance = await Moralis.EvmApi.account.getNativeBalance({
        address: session.user.address,

        chain: 25
    });







    // DISPLAY EVERYTHING BACK
    return {
        props: {
            message:
                nftList.raw.total > 0 ? 'THANK YOU FOR BEING A SUPPORTER!' : "Sorry, you don't have our NFT",
            nftList: nftList.raw.result,
            nativeBalance: nativeBalance.result.balance.ether,
            nfts: JSON.parse(JSON.stringify(nfts))
            // Return the native balance formatted in ether via the .ether getter

        },
    };

}

export default Protected;
