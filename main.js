const Block = require("./Block");
const Blockchain = require("./Blockchain");

//Init
let bankChain = new Blockchain();

//Add Blocks:
console.log("Mining Block 1...");

bankChain.addNewBlock(
  new Block(1, "20/12/2019", {
    account_id: "IK7YHVBGTYJKI78",
    current_amount: 233234,
    currency: "INR",
    bank_name: "State Bank Of India",
    username: "Mr. Bot1",
    last_transaction: "74820246492",
    has_savings: true,
    account_verified: true,
    active_loan: false
  })
);

console.log("Mining Block 2...");

bankChain.addNewBlock(
  new Block(2, "22/12/2019", {
    account_id: "IK8YHVBGTYJKI78",
    current_amount: 78644,
    currency: "INR",
    bank_name: "HDFC Bank",
    username: "Mr. Bot2",
    last_transaction: "4484546492",
    has_savings: true,
    account_verified: true,
    active_loan: true
  })
);

console.log("Mining Block 3...");

bankChain.addNewBlock(
  new Block(3, "24/12/2019", {
    account_id: "IUH76TVBGTYJKI78",
    current_amount: 4523654,
    currency: "INR",
    bank_name: "Bank of Baroda",
    username: "Mr. Bot3",
    last_transaction: "56214246492",
    has_savings: false,
    account_verified: true,
    active_loan: true
  })
);

//console.log("Chain Valid ? " + bankChain.isChainValid()); //Verify the integrity of the chain.
console.log(JSON.stringify(bankChain, null, 4));
