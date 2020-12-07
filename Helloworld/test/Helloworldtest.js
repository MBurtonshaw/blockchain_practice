const truffleAssert = require('truffle-assertions');


contract("Helloworld", async function() {
    it("should get the message correctly", async function() {
        let instance = await Helloworld.new();
        await instance.setMessage("Howdy");
        
    });
});