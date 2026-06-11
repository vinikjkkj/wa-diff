__d(
  "WAWebBizAILeadGenResponseDetailDrawer_response.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizAILeadGenResponseDetailDrawer_response",
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
          name: "has_seen",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "customer_info",
          storageKey: null,
        },
        {
          alias: null,
          args: null,
          concreteType: "XFBMaibaAiBizAgentWAConsumerUIDOutput",
          kind: "LinkedField",
          name: "consumer_uid",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "pn",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "lid",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "XFBMetaAIBusinessAgentWhatsAppLeadGenData",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
