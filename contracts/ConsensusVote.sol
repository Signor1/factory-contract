// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract ConsensusVote {
    struct Proposal {
        string name;
        string description;
        uint256 voteCount;
    }

    //array of proposals
    Proposal[] private proposals;

    //key - value pair of voters address to boolean
    mapping(address => bool) voters;

    function addProposal(string memory _name, string memory _desc) external {
        //adding a proposal
        proposals.push(
            Proposal({name: _name, description: _desc, voteCount: 0})
        );
    }

    function vote(uint256 _proposalIndex) external {
        //checking if msg.sender has voted before
        require(!voters[msg.sender], "You've voted already");

        //checking for wrong proposal index
        require(_proposalIndex < proposals.length, "Invalid proposal index");

        proposals[_proposalIndex].voteCount++;

        voters[msg.sender] = true;
    }

    function getProposalCount() external view returns (uint) {
        return proposals.length;
    }

    function getProposal(
        uint _proposalIndex
    ) external view returns (string memory, string memory, uint) {
        //checking for wrong proposal index
        require(_proposalIndex < proposals.length, "Invalid proposal index");

        Proposal memory proposal = proposals[_proposalIndex];

        return (proposal.name, proposal.description, proposal.voteCount);
    }
}
