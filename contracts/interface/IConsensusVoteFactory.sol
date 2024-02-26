// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "../ConsensusVote.sol";

interface IConsensusVoteFactory {
    function createAConsensusVotePoll()
        external
        returns (ConsensusVote newVote_, uint256 length_);

    function getVotingPollClones()
        external
        view
        returns (ConsensusVote[] memory);
}
