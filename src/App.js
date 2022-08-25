import { useState, useEffect } from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Details from "./Components/Details";
import Profile from "./Components/Profile";
import Connectwallet from "./Components/Connectwallet";
import { Footer } from "./Components/Footer";
import Item from "./Components/Item/Item";
import Error from "./Components/404-Layout/Error";
import Faq from "./Components/Faq/Faq";
import Coreasset from "./Components/Coreasset";
import Form from "./Components/Form";

import { Search } from "./Components/Search/Search";
import Amend from "./Components/Amend/Amend";

function App() {
  const [accountAvailable, setAccountAvailable] = useState(false);
  const [walletAddress, setWalletAddress] = useState("");
  const [nftBalance, setNftBalance] = useState("");
  const [amendmentNFT, setAmendmentNFT] = useState({});
  const [nft, setNft] = useState({});

  const changeAcount = (e) => {
    setAccountAvailable(e);
  };

  const setAmendData = (e) => {
    setAmendmentNFT(e)
  }

  const changeWalletAddress = (e) => {
    setWalletAddress(e);
  }

  async function getAccount(data) {
    if (data) {
      // debugger

      const accounts = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const account = accounts[0];
      localStorage.setItem('walletAccountAddress', account);
      // let TotalAmount = await getBalance(account)

      // if(TotalAmount){
      return account;

      // }
    } else {
      const account = null;
      return account;
    }
  }

  useEffect(() => {
    console.log(accountAvailable, walletAddress, amendmentNFT);
    if (localStorage.getItem('walletAccountAddress')) {
      getAccount(true).then((response) => {
        console.log(response);
        if (response) {
          changeWalletAddress(response);
          changeAcount(true);
          // console.log()
        } else {
          changeAcount(false);
        }
      })
      console.log("in first");
    }
  }, [])

  const disconnectWallet = () => {
    changeAcount(false);
    changeWalletAddress("");
    localStorage.removeItem('walletAccountAddress')
  }

  return (
    <div className="App">
      <Header
        isLogin={accountAvailable}
        walletAdd={walletAddress}
        updateBalance={nftBalance}
        disconnectWallet={disconnectWallet}
      />
      <Routes>
        <Route path="/" element={<Profile accountAvailable={accountAvailable} setAmendData={setAmendData} />} />
        <Route path="/details" element={<Details />} />
        <Route path="/form" element={<Form setCreateNFT={setNft} />} />
        <Route
          path="/wallet"
          element={
            <Connectwallet
              getAccount={getAccount}
              changeAcount={changeAcount}
              changeWalletAddress={changeWalletAddress}
            />
          }
        />
        <Route exact path="/item" element={<Item />} />
        <Route
          exact
          path="/amend"
          element={<Amend sendAmendNFTData={amendmentNFT} />}
        />
        <Route
          exact
          path="/core_asset"
          element={<Coreasset Account={accountAvailable} addNft={nft} />}
        />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/faq" element={<Faq />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
