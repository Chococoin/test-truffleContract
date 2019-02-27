pragma solidity ^0.5.0;

contract Test {
    address public owner;
    string public message;

    constructor() public {
        owner = msg.sender;
        message = "Hola mundo";
    }
    
    function setMessage(string memory _message) public returns(bool){
        owner = msg.sender;
        message = _message;
        return true;
    } 
}