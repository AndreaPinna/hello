// Documentation
// https://github.com/ethereum/wiki/wiki/JavaScript-API

//1. Caricare web3 e lanciare la funzione startApp (che lavora come una main)
window.addEventListener('load', function () {

    // Checking if Web3 has been injected by the browser (Mist/MetaMask)
    if (typeof web3 !== 'undefined') {
        // Use Mist/MetaMask's provider
        web3 = new Web3(web3.currentProvider);
    } else {
        console.log('No web3? You should consider trying MetaMask!')
        // fallback - use your fallback strategy (local node / hosted node + in-dapp id mgmt / fail)
        web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
    main();
});

myaddress="0x96a4c70ee155af51c262f348b30888f3a0222ea1";

var main=function(){


    readFromContract(myaddress,show)


}

var readFromContract = function (address, callback) {
    $.getJSON("solidity/abi.json",
        function (ABI) {
            mycontract = web3.eth.contract(ABI).at(address);
            mycontract.greetings.call(
                (err, res) => {
                    callback(res)
                }
            );
        }
    );
}




var show= function(string){

    $("#screturn").find(".returns").text(string);

}
