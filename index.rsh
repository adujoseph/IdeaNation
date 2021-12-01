"reach 0.1";

const fundraiser = {
  name: Bytes(64),
  description: Bytes(64),
  amount: UInt,
  equity: UInt,
  address: UInt,
};
const sponsor = {
  projectName: Bytes(64),
  fundraisingGoal: UInt,
  contractDuration: UInt,
  reportDone: Fun([], Null),
};
export const main = Reach.App(() => {
  const A = Participant("A", {
    ...fundraiser,
  });
  const B = Participant("B", {
    ...fundraiser,
  });
  const C = Participant("C", {
    ...fundraiser,
  });
  const D = Participant("D", {
    ...fundraiser,
  });
  const E = Participant("E", {
    ...sponsor,
  });
  const F = Participant("F", {
    ...sponsor,
  });
  deploy();
  // The first one to publish deploys the contract
  A.only(() => {
    const p = {
      name: declassify(interact.name),
      describe: declassify(interact.description),
      goal: declassify(interact.amount),
      equity: declassify(interact.equity),
    };
  });
  A.publish(p);
  commit();
  // The second one to publish always attaches
  B.publish();
  commit();
  // write your program here
  exit();
});
