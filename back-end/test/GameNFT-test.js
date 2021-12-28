const { expect } = require("chai");
const { ethers } = require("hardhat");
require("@nomiclabs/hardhat-waffle");

describe("GameNFT", function () {
  it("Should return the new greeting once it's changed", async function () {
    const GameNFT = await ethers.getContractFactory("GameNFT");
    const gamenft = await GameNFT.deploy(1234);
    await gamenft.deployed();

    expect(await gamenft.n()).to.equal(1234);

    const tx = await gamenft.n();

    // wait until the transaction is mined
    await setGreetingTx.wait();

   
  });
});
