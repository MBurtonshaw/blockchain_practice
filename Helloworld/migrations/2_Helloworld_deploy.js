const Helloworld = artifacts.require("Helloworld");

module.exports = function(deployer, network, accounts) {
  deployer.deploy(Helloworld);
  };