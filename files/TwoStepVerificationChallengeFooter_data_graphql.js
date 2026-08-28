__d(
  "TwoStepVerificationChallengeFooter_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "doesRequireTwoFacData" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "TwoStepVerificationChallengeFooter_data",
      selections: [
        {
          condition: "doesRequireTwoFacData",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "TwoFactorLoginMethodFooter_data",
            },
          ],
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
