const ethers = require('ethers');

class EpiToken {
  constructor(url) {
    this.provider = ethers.getDefaultProvider('ropsten');
    this.abi = 1; // changer
    this.contractAddress = "0xcf048da6a2a704ddfc8dce6c0c3e7e48971b7fca"; // à mettre dans la config
    this.contract = new ethers.Contract(contractAddress, abi, provider);
  }

  /// @notice send `_value` token to `_to` from `sender`
  /// @param _to The address of the recipient
  /// @param _value The amount of token to be transferred
  /// @return Whether the transfer was successful or not
  transfer(to, value) {/* TODO: Auth */
    return new Promise((resolve, reject) => {
      this.contract.transfer(to, value)
      .then((res) => {
        resolve(res)
      })
    }
  }

  /// @notice send `_value` token to `_to` from `_from` on the condition it is approved by `_from`
  /// @param _from The address of the sender
  /// @param _to The address of the recipient
  /// @param _value The amount of token to be transferred
  /// @return Whether the transfer was successful or not
  transferFrom(from, to, value) {
    return new Promise((resolve, reject) => {
      this.contract.transferFrom(from, to, value)
      .then((res) => {
        resolve(res)
      })
    }
  }


  /// @param _owner The address from which the balance will be retrieved
  /// @return The balance
  balanceOf(owner) {/* TODO: Auth */
    return new Promise((resolve, reject) => {
      this.contract.balanceOf(owner)
      .then((res) => {
        resolve(res)
      })
    }
  }

  /// @notice `msg.sender` approves `_addr` to spend `_value` tokens
  /// @param _spender The address of the account able to transfer the tokens
  /// @param _value The amount of wei to be approved for transfer
  /// @return Whether the approval was successful or not
  approve(spender, value) {/* TODO: Auth */
    return new Promise((resolve, reject) => {
      this.contract.approve(spender, value)
      .then((res) => {
        resolve(res)
      })
    }
  }


  /// @param _owner The address of the account owning tokens
  /// @param _spender The address of the account able to transfer the tokens
  /// @return Amount of remaining tokens allowed to spent
  allowance(owner, spender) {
    return new Promise((resolve, reject) => {
      this.contract.allowance(owner, spender)
      .then((res) => {
        resolve(res)
      })
    }
  }

  // Rajouter les events

}
