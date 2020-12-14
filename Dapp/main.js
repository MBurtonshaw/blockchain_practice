var web3 = new Web3(Web3.givenProvider);
var contractInstance;

$(document).ready(function() {
    window.ethereum.enable().then(function(accounts) {
        contractInstance = new web3.eth.Contract(
            abi,
            "0x5Fc9523a2889A816e10E911f31c3F9b853DAAF7B",
            { from: accounts[2] }
        );
        console.log(contractInstance);

        $("#add_data_button").click();
        function inputData() {
            var name = $("#name_input").val();
            var age = $("#age_input").val();
            var height = $("#height_input").val();

            var config = {
                value: web3.utils.toWei("1", "ether")
            };
            contractInstance.methods
                .createPerson(name, age, height)
                .send(config);
        }
    });
});
