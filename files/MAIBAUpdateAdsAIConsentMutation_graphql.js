__d(
  "MAIBAUpdateAdsAIConsentMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "MAIBAConsentStatusResponse",
          kind: "LinkedField",
          name: "update_maiba_consent_status",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "is_ads_ai_consented",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "MAIBAUpdateAdsAIConsentMutation",
          selections: e,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "MAIBAUpdateAdsAIConsentMutation",
          selections: e,
        },
        params: {
          id: "27972782485654901",
          metadata: {},
          name: "MAIBAUpdateAdsAIConsentMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
