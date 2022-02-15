import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  height:100vh;
  display:flex;
  justify-content:center;
  align-items:center;
  background:linear-gradient(-45deg, #c9d6ff,#e2e2e2)
`

const MiniContainer = styled.div`
  text-align:center;
`

const Form = styled.form`
  width:60vw;
  height:40vh;
  justify-content:center;
  display:flex;
  align-items:center;
  flex-direction:column;
`

const Button = styled.button`
  box-shadow: 4px 6px 14px 0px #bbbecd;
  border-radius: 19px;
  background-color: #fff;
  font-size:16px;
  color:#000;
  outline:none;
  border:none;
  padding: 1rem 3rem;
  transition: all 0.2s ease-in-out;
  &:active{
    transform:translateY(4px);
  }
`

const Heading5 = styled.h5`
  margin-bottom:2rem;
  font-size:20px;
  font-weight:300;
`

const Heading4 = styled.h4`
  margin-bottom:2rem;
  font-size:30px;
`

const WalletAddress = styled.div`
  margin-top:3rem;
  width:100%;
  border: 1px solid #000;
  border-radius:13px;
  padding:3rem;
  display:flex;
  justify-content:space-around;
  align-items:center;
  flex-direction:column;
`

const Label = styled.label`
  padding: 8px 12px;
  margin:1rem 0;
`;

const Input = styled.input`
  text-align:center;
  padding:.5rem .2rem;
`

const Home = () => {
  return (
    <>
      <Container>
        <MiniContainer>
          <Form >
            <Heading4>-: Mint Portal :-</Heading4>
            <Heading5>Please Connect your wallet</Heading5>
            <Button>Connect Wallet</Button>
            <WalletAddress>
              <Label htmlFor='floatingInput'>Wallet Address</Label>
              <Input type={"number"} name={"amount"} defaultValue={"1"} min={"1"} max={"5"} />
              <Label>Please select the amount of NFTs to mint.</Label>
              <Button style={{ backgroundColor: "	#42C0FB", color: "#fff", width: "60%", borderRadius: "8px" }} >Mint/Buy</Button>
              <Label>Price :- 0.06 ETH/mint</Label>
            </WalletAddress>
          </Form>
        </MiniContainer>
      </Container>
    </>
  )
}

export default Home