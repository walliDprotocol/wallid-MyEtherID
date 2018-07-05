
/* STEPS TO RUN GETH AND CONNECT */


1. Download gETH

2. Run gETH with command 
    TREAD :
    https://ethereum.stackexchange.com/questions/25451/infura-web3-provider-for-events-get-watch
    COMMAND : 
    geth --rinkeby --ws --wsport=8546 --wsorigins="*" --datadir=$HOME/.rinkeby --cache=512 --rpc --rpcapi="personal,eth,network" --rpcport=8545 --fast --bootnodes=enode://a24ac7c5484ef4ed0c5eb2d36620ba4e4aa13b8c84684e1b4aab0cebea2ae45cb4d375b77eab56516d34bfbd3c1a833fc51296ff084b770b94fb9028c4d25ccf@52.169.42.101:30303

3. Import account https://github.com/ethereum/go-ethereum/wiki/Managing-your-accounts
    geth import account ./<FILE_WITH_PRIVATE_KEY.txt>
    DEFINE A PASSWORD

IN OTHER TAB 

4.  geth attach (attach to geth )

5.  personal.importRawKey("<PRIVATE_KEY>", "<DEFINE_PASSWORD_1>")

6.  personal.unlockAccount(eth.accounts[0], "<DEFINE_PASSWORD_1>")
    em codigo :
    web3.eth.personal.unlockAccount('0x6ff539fde26ec962cc22b2e74c66c774fd38b1d2', "<DEFINE_PASSWORD_1>")
    .then(result => {
    console.log('its ok ', result)
    })







/* OTHER STUFF */


geth --rinkeby

https://ethereum.stackexchange.com/questions/6903/unlocking-accounts-and-making-transactions-in-web3-js/12188?noredirect=1#comment13537_12188
