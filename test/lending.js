const { expect } = require('chai');

const { loadFixture } = require('@nomicfoundation/hardhat-network-helpers');

describe('Lending Contract', () => { 
    async function deployLendingFixture(){
        const lending = await ethers.getContractFactory('LendingApp');
        const lendingContract = await lending.deploy();

        await lendingContract.deployed();

        return lendingContract;
    }

    describe('', () => {   })
 })