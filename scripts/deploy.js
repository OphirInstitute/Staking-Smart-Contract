const hre = require("hardhat");

async function main() {
  const StakingBoredom = await hre.ethers.getContractFactory("StakeBoredom");

  const distributorAddress = "0xA113472D21c92A833414BC573b544c5858462CDA";

  const stakingToken = "0xe2a28aAC42Cf71BA802fc6bb715189b0A89B348a";

  const rewardToken = "0x1C2aB209995C1E2b45F67F85611bFeB2C6590538";

  const duration = 30;

  const stakingBoredom = await StakingBoredom.deploy(
    distributorAddress,
    stakingToken,
    rewardToken,
    duration
  );
  await stakingBoredom.deployed();      

  console.log(`StakingBoredom deployed to: ${stakingBoredom.address}`);
  console.log(`StakingBoredom ABI: `, StakingBoredom.interface);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
