pragma solidity >=0.4.22 <0.6.0;
contract Lottery{
    //variable to store managers address
    address public manager;
    // we are storing the address of the participants
    address payable[] public participants;
    constructor () public {
        manager = msg.sender;
    }

    //Function to enter the lottery, we are going to make each users pay a small amount to enter lottery
    function enterLottery() public payable{
        require(msg.value > 0.01 ether);
        participants.push(msg.sender);
    }
    function pickWinner() public{

        // Check only that the manager can call the pick winner function
        require(msg.sender == manager);

        // select a random participants
        uint index = random() % participants.length;

        // transfer the contract balance to the participants
        participants[index].transfer(address(this).balance);

        // empty the address array
        //participants = new address[](0);
        delete participants;

    }
    function random() private view returns(uint256){
        return uint(keccak256(abi.encodePacked(block.difficulty, now, participants)));
    }
}
