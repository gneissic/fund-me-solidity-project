const { assert, expect } = require("chai")
const { getNamedAccounts, deployments, ethers } = require("hardhat")

describe("FundMe", function () {
    let fundMe
    let mockV3Aggregator
    let deployer
    beforeEach(async () => {
        // const accounts = await ethers.getSigners()
        // deployer = accounts[0]
        deployer = (await getNamedAccounts()).deployer
        await deployments.fixture(["all"])
        fundMe = await ethers.getContract("FundMe", deployer)
        mockV3Aggregator = await ethers.getContract(
            "MockV3Aggregator",
            deployer
        )
    })
})

    describe("constructor", function () {
        it("sets the aggregator addresses correctly", async () => {
            const response = await fundMe.getPriceFeed()
            assert.equal(response, mockV3Aggregator.address)
        })

        describe( "fund ", async()=> {

        it("fails if you do not send enough ETH", async()=>{
            await expect(fundMe.fund().to.be.revertedWith("you need to spend more ETH!"))
        })

        })
    })




// describe("FundMe", async()=>{
// let fundMe
// let deployer
// let MockV3Aggregator
// beforeEach(async()=>{
// deployer = (await getNamedAccounts()).deployer
// await deployments.fixture(["all"])
// fundMe = await ethers.getContract("FundMe", deployer)
// MockV3Aggregator = await ethers.getContract("MockV3Aggregator", deployer)
// })


// describe("constructor",async()=>{

//    it("sets the aggregator address correctly", async()=> {
//     const response  = await fundMe.priceFeed()
//     assert.equal(response, MockV3Aggregator.address )
//    })

// })
// })