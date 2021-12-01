import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
import { ask, yesno, done } from "@reach-sh/stdlib/ask.mjs";
const stdlib = loadStdlib(process.env);

(async () => {
  const startingBalance = stdlib.parseCurrency(100);

  const [accA, accB, accC, accD, accE, accF] = await stdlib.newTestAccounts(
    6,
    startingBalance
  );

  const fmx = x => stdlib.formatCurrency(x, 4);
  const getBalance = async acc => fmx(await stdlib.balanceOf(acc));

  const initialBalA = await getBalance(accA);
  const initialBalB = await getBalance(accB);
  const initialBalC = await getBalance(accC);
  const initialBalD = await getBalance(accD);

  console.log("Hello and welcome");

  const chooseRole = await ask(`Choose role: Fundraiser or Sponsor?`, x => x);
  const projectName = await ask(`What is project name?`, x => x);
  const projectDescription = await ask(`Details: `, x => x);
  const amount = await ask(`Amount: `, x => x);
  const equity = await ask(`Equity `, x => x);
  const address = await ask(`Wallet Address: `, x => x);

  const fundsObj = {
    name: projectName,
    description: projectDescription,
    amount: amount,
    equity: equity,
    address: address,
  };

  console.log("Launching...");
  const ctcA = accA.contract(backend);
  const ctcB = accB.contract(backend, ctcA.getInfo());
  const ctcC = accC.contract(backend, ctcA.getInfo());
  const ctcD = accC.contract(backend, ctcA.getInfo());

  console.log("Starting backends...");
  await Promise.all([
    backend.A(ctcA, {
      ...stdlib.hasRandom,
      ...fundsObj,
      // implement Alice's interact object here
    }),
    backend.B(ctcB, {
      ...stdlib.hasRandom,
      ...fundsObj,
      // implement Bob's interact object here
    }),
    backend.C(ctcC, {
      ...stdlib.hasRandom,
      ...fundsObj,
      // implement Bob's interact object here
    }),
    backend.D(ctcD, {
      ...stdlib.hasRandom,
      ...fundsObj,
      // implement Bob's interact object here
    }),
  ]);

  console.log("Goodbye, Contract ends!!");
})();
