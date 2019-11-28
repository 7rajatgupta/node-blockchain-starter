const Block = require("./Block");

class Blockchain {
  constructor() {
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    return new Block(0, "24/11/2019", "Genesis Block", "0");
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addNewBlock(newBlock) {
    newBlock.previousHash = this.getLatestBlock().hash;
    newBlock.hash = newBlock.calculateHash();
    this.chain.push(newBlock);
  }

  //! Verify the integrity of the blockchain:
  isChainValid() {
    for (let chainIndex = 1; chainIndex < this.chain.length; chainIndex++) {
      const currentBlock = this.chain[chainIndex];
      const previousBlock = this.chain[chainIndex - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;
