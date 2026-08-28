__d(
  "BillingAssignAdCreditsView_account.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "BillingAssignAdCreditsView_account",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "AdCampaignGroup",
          kind: "LinkedField",
          name: "nodes",
          plural: !0,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "AdAccountAdCampaignGroupsConnection",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
