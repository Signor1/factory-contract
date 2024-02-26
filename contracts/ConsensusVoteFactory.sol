// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "./ConsensusVote.sol";

contract ConsensusVoteFactory {
    ConsensusVote[] voteClones;

    function createAConsensusVotePoll()
        external
        returns (ConsensusVote newVote_, uint256 length_)
    {
        newVote_ = new ConsensusVote();

        voteClones.push(newVote_);

        length_ = voteClones.length;
    }

    function getVotingPollClones()
        external
        view
        returns (ConsensusVote[] memory)
    {
        return voteClones;
    }
}
