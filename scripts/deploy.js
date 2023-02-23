const main = async () => {
   const lending = await ethers.getContractFactory("LendingApp");
   const lendingContract = await lending.deploy();

   await lendingContract.deployed();

   console.log("Lending contract address : ", lendingContract.address);
}

const runMain = async () => {
   try {
       await main();
       process.exit(0);
   } catch (error){
       console.error(error);
       process.exit(1);
   }
}

runMain();