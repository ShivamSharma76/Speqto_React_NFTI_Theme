import React, { useState } from 'react'
import { ethers } from "ethers";
import ABI from '../smartContract_ABI/Abi.json'

async function getAccount(data) {

    if (data) {

        const accounts = await window.ethereum.request({
            method: "eth_requestAccounts",
        });
        const account = accounts[0];
        return account;
    }
    else {
        const account = null;
        return account;
    }
}

export default function useWallet_connect() {
    // debugger
    const [accountAddress, setAccountAddress] = useState("")

    if (typeof window !== "undefined") {
        getAccount('true').then((response) => {
            setAccountAddress(response);
        });
    }

    return accountAddress
}
