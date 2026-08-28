__d(
  "TwoStepVerificationChallengePage_data.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [
        { kind: "RootArgument", name: "doesRequireTwoFacData" },
        { kind: "RootArgument", name: "isLoginChallenges" },
        { kind: "RootArgument", name: "isPreAuthentication" },
      ],
      kind: "Fragment",
      metadata: null,
      name: "TwoStepVerificationChallengePage_data",
      selections: [
        {
          condition: "doesRequireTwoFacData",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "TwoFactorLoginMethodPage_data",
            },
          ],
        },
        {
          condition: "isLoginChallenges",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "LoginChallengesChallengePage_data",
            },
          ],
        },
        {
          condition: "isPreAuthentication",
          kind: "Condition",
          passingValue: !0,
          selections: [
            {
              args: null,
              kind: "FragmentSpread",
              name: "PreAuthenticationChallengePage_data",
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
