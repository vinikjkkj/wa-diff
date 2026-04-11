__d(
  "useWAWebBizAdCreationMaybeOpenEmailVerification_query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "useWAWebBizAdCreationMaybeOpenEmailVerification_query",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "WAAdAccountOnboardingAPI",
          kind: "LinkedField",
          name: "wa_ad_account_onboarding_data",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "email",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
