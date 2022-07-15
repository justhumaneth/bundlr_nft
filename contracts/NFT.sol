// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";


contract NFT is ERC721 {

    using Counters for Counters.Counter;
    Counters.Counter private _tokenSupply;
    
    constructor() ERC721("Bundlr", "BN") {}
  
    function totalSupply() public view returns (uint256) { 
        return _tokenSupply.current();
    }


    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        require(_exists(tokenId), "ERC721Metadata: Nonexistent token"); 

        // all successfully minted tokens have the same metadata
        return "https://arweave.net/tODSVPNoBR5rqjwhzXzqy2q6rXYZG_L-rzVmmYo_Ld4";
    }
    
    event Mint(uint256 tokenId);


    function mint(address account)
    external returns (uint256)
    {
        uint256 tokenId = uint256(uint160(account));

        _tokenSupply.increment();
        _safeMint(account, tokenId);

        emit Mint(tokenId);

        return tokenId;
    }

}