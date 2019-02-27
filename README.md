## Trying to figure out how use infura to connect myFirstDapp from a React component. 

To reproduce the bug:

Open ganache and use this mnemonic:

### `resist border lift moon answer require off clay elegant stage party panel`

Actually, you may use any seed in Ganache but just to have same variables across the diferent networks we'll use (local and ropsten).

### `npm install`
### `npm start`

if you hit with some error:

Delete the folder dapp/build

### `git rm -rf ./dapp/build`
and the "linked" folder contracts in ./src
### `git rm -rf ./src/contracts`

and migrate the smartcontracts again:

### `cd dapp`
### `truffle migrate`
to migrate and deploy to ganache and
### `truffle migrate --network ropsten`
to migrate and deploy to ropsten

Create a linked folder of ./dapp/build/contracts into src
### `cd .. && cd src`
(In linux and mac)
### `ln -s ../dapp/build/contracts contracts`

return to test-truffleContract
### `cd ..`
and start react server again
### `npm start`

If everything goes ok using ganache you'll see in the broswer info about the smartcontract and the phrase: `Done! It is working!`

The bug is in the next phase. In the file `app.js` comment the line 18 and uncomment line 19. Save the file and you'll see that this time infura doesn't work as a provider.

How can I fix this?

Thank you for your help!