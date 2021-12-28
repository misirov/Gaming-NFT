const hre = require("hardhat");

async function main() {

  const GameNFT = await hre.ethers.getContractFactory("GameNFT");
  const gamenft = await GameNFT.deploy(
    ['Goku', 'Naruto', 'Luffy'],
    ['https://i.imgur.com/3Z8ONK4.png', 'https://i.imgur.com/cb3Ufq6.png', 'https://i.imgur.com/NYrm3Mj.png'],
    [1000, 200, 100], // hp
    [9000, 250, 195], // attack
    ['GOD', 'Chakra master', 'Akuma No Mi'], // special
    "Dormamu", //Boss name
    "https://i.imgur.com/RdAGC2H.jpeg", // Boss image
    10000, // HP
    50 // attack

  );

  await gamenft.deployed();

  console.log("Greeter deployed to:", gamenft.address);

  let a;
  a = await gamenft.mintCharacter(2);
  await a.wait();

  a = await gamenft.attackBoss();
  await a.wait();

  console.log("Done!")


}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
