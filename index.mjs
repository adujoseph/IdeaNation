import { loadStdlib } from "@reach-sh/stdlib";
import * as backend from "./build/index.main.mjs";
import { ask, yesno, done } from "@reach-sh/stdlib/ask.mjs";
const stdlib = loadStdlib(process.env);

(async () => {
  const startingBalance = stdlib.parseCurrency(100);

  const gig = await stdlib.newTestAccounts(startingBalance);
  const sponsor = await stdlib.newTestAccounts(startingBalance);

  const ctcGig = gig.deploy(backend);
  const ctcSponsor = sponsor.attachment(backend, ctcGig.getInfo());

  console.log("Starting backends...");
  const isGig = await ask(`Are you a sponsor?`, yesno);
  const identify = isGig ? "Sponsor" : "Gigs";
  await Promise.all([
    backend.Gigs(ctcGig, {
      ...stdlib.hasRandom,
      // implement Gigs' interact object here
    }),
    backend.Spons(ctcSponsor, {
      ...stdlib.hasRandom,
      // implement Spons' interact object here
    }),
  ]);

  // const [ accAlice, accBob ] =
  //   await stdlib.newTestAccounts(2, startingBalance);
  // console.log('Hello, Alice and Bob!');

  // console.log('Launching...');
  // const ctcAlice = accAlice.contract(backend);
  // const ctcBob = accBob.contract(backend, ctcAlice.getInfo());

  // console.log('Starting backends...');
  // await Promise.all([
  //   backend.Alice(ctcAlice, {
  //     ...stdlib.hasRandom,
  //     // implement Alice's interact object here
  //   }),
  //   backend.Bob(ctcBob, {
  //     ...stdlib.hasRandom,
  //     // implement Bob's interact object here
  //   }),
  // ]);

  console.log("Goodbye");
})();
