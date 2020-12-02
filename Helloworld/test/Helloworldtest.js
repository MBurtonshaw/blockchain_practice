const Helloworld = artifacts.require("Helloworld");



contract("Helloworld", async function() {
    it("should get the message correctly", async function() {
        let instance = await Helloworld.deployed();

    });
});