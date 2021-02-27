pragma solidity ^0.4.17;

contract RealEstate {
    
     address  owner ;
    uint256 public indexx ;

    struct Token {
        uint256 id;
        string name;
        string adress;
        uint price;
        address owner;
        string image;
        bool inSell;
        uint256 index;
    }
    
   
    
    function RealEstate () public {
        owner = msg.sender;
        indexx = 0;
    }
    
    // Token[] public tokens;

    mapping (address => Token[]) public ownerToToken;
    
    mapping (uint256 => address) public OwnerToIsTokenOwner;
    
    mapping (uint256 => Token) public indexToToken;
    
    modifier isOwner{
      require(msg.sender == owner);
        _;
    }
    
    function createToken (uint256 id , string name , string adress , uint price , string image , bool inSell) public {

         Token memory newToken = Token({
            id: id,
            name : name,
            price : price,
            adress : adress,
            owner : msg.sender,
            image : image,
            inSell : inSell,
            index : indexx
        });
        
        
        ownerToToken[msg.sender].push(newToken);
        OwnerToIsTokenOwner[id] = msg.sender;
        indexToToken[indexx] = newToken;
         indexx++;
        
    }
    

    function putTokenInSell (uint256 myTokenIndex, uint256 homeIndex , uint256 TokenId) public  {
        require(OwnerToIsTokenOwner[TokenId] == msg.sender);
        ownerToToken[msg.sender][myTokenIndex].inSell = true;
        indexToToken[homeIndex].inSell = true;
    }
    
    function stopSellToken (uint256 myTokenIndex , uint256 homeIndex  , uint256 TokenId ) public  {
        require(OwnerToIsTokenOwner[TokenId] == msg.sender);
        ownerToToken[msg.sender][myTokenIndex].inSell = false;
        indexToToken[homeIndex].inSell = false;
    }
    
    function transferEther(address rec,uint _amount) public payable {
        require(msg.value == _amount);
        
        uint commission = _amount * 10 /100;
        uint ammoutAfercommission = _amount - commission;
        //owner.transfer(commission);
        address(rec).transfer(ammoutAfercommission);
    }


    function BuyToken (address _landSeller , uint _TokenID , uint256 index) payable public returns (bool) {
        
        for(uint i=0; i < (ownerToToken[_landSeller].length);i++)    
        {
            if (ownerToToken[_landSeller][i].id == _TokenID)
            {
                require(ownerToToken[_landSeller][i].inSell);
                transferEther(_landSeller , ownerToToken[_landSeller][i].price );
                 Token memory newToken = Token({
                        id: ownerToToken[_landSeller][i].id,
                        name : ownerToToken[_landSeller][i].name,
                        price : ownerToToken[_landSeller][i].price,
                        adress : ownerToToken[_landSeller][i].adress,
                        owner : msg.sender,
                        image : ownerToToken[_landSeller][i].image,
                        inSell : false,
                        index : ownerToToken[_landSeller][i].index
            });
            
                ownerToToken[msg.sender].push(newToken); 
                
                indexToToken[index] = newToken;
                
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
    
    
  function getTokenByOwner(address _landHolder, uint _index ) public view returns (uint, string, uint , string  , bool , uint256) {
        
        return (ownerToToken[_landHolder][_index].id, 
                ownerToToken[_landHolder][_index].name,
                ownerToToken[_landHolder][_index].price,
                ownerToToken[_landHolder][_index].image,
                ownerToToken[_landHolder][_index].inSell,
                ownerToToken[_landHolder][_index].index
                );
                
    }
    
    function getNoOfTokenByOwner(address _tokenHolder) public view returns (uint) {
        return ownerToToken[_tokenHolder].length;
    }


}

   
    


