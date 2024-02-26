// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

interface IConsensusVote {
    function addProposal(string memory _name, string memory _desc) external;

    function vote(uint256 _proposalIndex) external;

    function getProposalCount() external view returns (uint);

    function getProposal(
        uint _proposalIndex
    ) external view returns (string memory, string memory, uint);
}
