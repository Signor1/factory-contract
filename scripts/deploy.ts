import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.deployContract("ConsensusVoteFactory");

  await factory.waitForDeployment();

  console.log(`Factory deployed to ${factory.target}`);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
