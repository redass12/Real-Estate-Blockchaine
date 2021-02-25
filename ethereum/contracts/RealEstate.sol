pragma solidity ^0.4.17;

contract RealEstate {

    struct Token {
        uint256 id;
        string name;
        string adress;
        uint price;
        address owner;
    }
    
    address  owner ;
    
    function RealEstate () public {
        owner = msg.sender;
    }
    
    Token[] public tokens;

    mapping (address => Token[]) public ownerToToken;
    
    mapping (uint256 => address) public OwnerToIsTokenOwner;

    mapping (uint256 => bool) public tokenIdToInsell;
    
    
    modifier isOwner{
      require(msg.sender == owner);
        _;
    }
    
    function createToken (uint256 id , string name , string adress , uint price) public {

         Token memory newToken = Token({
            id: id,
            name : name,
            price : price,
            adress : adress,
            owner : msg.sender
        });
        
        tokens.push(newToken);
        ownerToToken[msg.sender].push(newToken);
        OwnerToIsTokenOwner[id] = msg.sender;
    }
    
    function getTokenByAddress (address tokenOwner) public view returns (Token[] memory) {
        return ownerToToken[tokenOwner];
    }
    
    function getAllTokens () public view returns (Token[] memory) {
        return tokens;
    }


    function putTokenInSell (uint256 TokenId) public  {
        require(OwnerToIsTokenOwner[TokenId] == msg.sender);
        tokenIdToInsell[TokenId] = true;
    }
    
    function stopSellToken (uint256 TokenId) public  {
        require(OwnerToIsTokenOwner[TokenId] == msg.sender);
        tokenIdToInsell[TokenId] = false;
    }
    
    function transferEther(address rec,uint _amount) public payable {
        require(msg.value == _amount);
        
        uint commission = _amount * 10 /100;
        uint ammoutAfercommission = _amount - commission;
        //owner.transfer(commission);
        address(rec).transfer(ammoutAfercommission);
    }


    function BuyToken (address _landSeller , uint _TokenID) payable public returns (bool) {
        require(tokenIdToInsell[_TokenID]);
        
        for(uint i=0; i < (ownerToToken[_landSeller].length);i++)    
        {
            if (ownerToToken[_landSeller][i].id == _TokenID)
            {
                transferEther(_landSeller , ownerToToken[_landSeller][i].price );
                 Token memory newToken = Token({
                        id: ownerToToken[_landSeller][i].id,
                        name : ownerToToken[_landSeller][i].name,
                        price : ownerToToken[_landSeller][i].price,
                        adress : ownerToToken[_landSeller][i].adress,
                        owner : msg.sender
            });
            
                ownerToToken[msg.sender].push(newToken); 
                
      
                
                tokens[i] = newToken;
            
                delete ownerToToken[_landSeller][i];
                
                OwnerToIsTokenOwner[_TokenID] = msg.sender;
                
                return true;

            }
    }

    
  return false;
}

   function withdraw() public isOwner {
        msg.sender.transfer(this.balance);
    }
    
    function getTokensCount() public view returns (uint) {
        return tokens.length;
    }
    
  function getLand(address _landHolder, uint _index) public view returns (uint, string, uint,string, address) {
        
        return (ownerToToken[_landHolder][_index].id, 
                ownerToToken[_landHolder][_index].name,
                ownerToToken[_landHolder][_index].price,
                ownerToToken[_landHolder][_index].adress,
                ownerToToken[_landHolder][_index].owner
                );
                
    }
    


}