'reach 0.1';

const gigApi = {
  projectName: Bytes(64),
  projectDetails: Bytes(64),
  fundraisingGoal: UInt,
  contractDuration: UInt,
  reportDone: Fun([], Null)
};

const sponsorApi = {
  contribution: UInt,
  getWillContribute: Fun([], Bool),
  reportAddress: Fun([Address], Null),
  reportBalance: Fun([UInt], Null),
  reportContribution: Fun([Address, UInt, UInt, UInt], Null),
  reportExit: Fun([], Null),
  reportProjectName: Fun([Bytes(64)], Null),
  reportTimeout: Fun([], Null),
  reportTransfer: Fun([UInt, Address], Null)
};

export const main = Reach.App(() => {
  const Gigs = Participant('Gig', gigApi);
  const Spons = Participant('Sponsor', sponsorApi);
  deploy();

  Gigs.only(() => {
    const p = {
      name: declassify(interact.projectName),
      goal: declassify(interact.fundraisingGoal),
      details: declassify(interact.projectDetails),
      duration: declassify(interact.contractDuration)
    }
  });

  Gigs.publish(p);
  Gigs.interact.reportDone();

  // const [inLoop, sum, timeout] = parallelReduce([true, 0, false])
  //   .invariant(balance() == sum)
  //   .while(inLoop && balance() < p.goal)
  //   .case(Spons, (() => {
  //     if (declassify(interact.getWillContribute())) {
  //       return { when: true, msg: declassify(interact.contribution) }
  //     } else {
  //       return { when: false, msg: 0 }
  //     }
  //   }),
  //     ((contribution) => contribution),
  //     ((contribution) => {
  //       const winner = this;
  //      Spons.only(() => {
  //         interact.reportContribution(winner, contribution, balance(), lastConsensusTime());
  //       });
  //       return [true, sum + contribution, false];
  //     })
  //   )
  //   .timeout(p.duration, () => {
  //     Spons.interact.reportTimeout();
  //     Anybody.publish();
  //     return [false, sum, true];
  //   });

  // const contributions = balance();
  // transfer(balance()).to(F);
  // Spons.interact.reportTransfer(contributions, F);

  commit();
  // Spons.interact.reportBalance(balance());
  // Spons.interact.reportExit();
  exit();
});

