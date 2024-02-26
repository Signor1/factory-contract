import { ethers } from "hardhat";

async function main() {
  //contract address of the deployed factory contract
  const factoryContract = "0x8FFe9D46cd72F93DEf174FbE693D7a50eC918EA1";

  const FACTORY = await ethers.getContractAt(
    "IConsensusVoteFactory",
    factoryContract
  );

  const createVoteTx = await FACTORY.createAConsensusVotePoll();
  await createVoteTx.wait();

  const clones = await FACTORY.getVotingPollClones();

  //list all clones
  console.log(clones);
  // Result(2) ["0xa044b60735ADb8A806813289BB5e48B2544D5a28","0x2f06d9602E3b75aEd68999D4885D84012b1B3cd3";

  //getting the first clone
  const voteContract = clones[0];

  //interacting with the clone
  const vote = await ethers.getContractAt("IConsensusVote", voteContract);

  const getProsposalCountBeforeTx = await vote.getProposalCount();

  console.log({ "Prosposal Count Before Tx": getProsposalCountBeforeTx });

  //add proposal
  const name = "Lets Read A Book";
  const description = "We need to read and study together";

  //add proposal
  const name2 = "Lets stroll in the park";
  const description2 = "We need to walk together";

  const voteTx = await vote.addProposal(name, description);
  await voteTx.wait();

  const voteTx2 = await vote.addProposal(name2, description2);
  await voteTx2.wait();

  //vote
  const userVote = await vote.vote(0);
  await userVote.wait();

  const getProsposalCountAfterTx = await vote.getProposalCount();

  console.log({ "Prosposal Count After Tx": getProsposalCountAfterTx });

  //Transaction hashes
  //0x88e392edf74289290b348035928652fb6d1231fb1eb845909f7d265bccf060f9
  //0xad59a28ec1a78977b2fcf0af0f188b31ac232f005b4c0435b1c74b69365eb94b
  //0xec0f9602d54269b92f88de9fd47b7bb266a339e7be6b871e82b6c1b2343b01f1
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
