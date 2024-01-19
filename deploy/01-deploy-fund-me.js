const { network } = require("hardhat");
const { networkConfig, developmentChains } = require("../helper-hardhat-config");


module.exports = async({getNamedAccounts, deployments})=>{
    const {deploy, log} = deployments
    const {deployer} = await getNamedAccounts()
    const chanId = network.config.chainId
   // const ethUsdPriceFeedAddress = networkConfig[chanId]["ethUsdPriceFeed"]
   let ethUsdPriceFeedAddress
   if (developmentChains.includes(network.name)) {
    const ethUsdAggregator = await deployments.get("MockV3Aggrevator")
    ethUsdPriceFeedAddress = ethUsdAggregator.address

   }else{
    ethUsdPriceFeedAddress = networkConfig[chanId]["ethUsdPriceFeed"]
   }
   const args = [ethUsdPriceFeedAddress]
    const FundMe = await deploy("FundMe", {
    from: deployer, args:args, log:true, waitConfirmations: network.config.blockConfirmations || 1}, )
    log("deploy successful to sepolia")

}

module.exports.tags = ["all", "fundMe"]