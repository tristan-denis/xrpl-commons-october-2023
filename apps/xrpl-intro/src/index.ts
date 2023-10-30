import "dotenv/config"
import { getXrplClient } from "./client"
import { WALLET_1 } from "./wallets"
// const pinataClient = getPinataClient()
const xrplClient = getXrplClient()

// const { PINATA_GATEWAY } = process.env

const main = async () => {
  await xrplClient.connect()

  const balance = await xrplClient.getBalances(WALLET_1.address)
  console.log(balance)
  await xrplClient.disconnect()
}

main()
