__d(
  "adsInformedCampaignCreationFetchPublishedPredictionsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: "XFBInformedCampaignCreationResult",
            kind: "LinkedField",
            name: "xfb_informed_campaign_creation_prediction",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "adsInformedCampaignCreationFetchPublishedPredictionsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "adsInformedCampaignCreationFetchPublishedPredictionsQuery",
          selections: t,
        },
        params: {
          id: "28045931305040258",
          metadata: {},
          name: "adsInformedCampaignCreationFetchPublishedPredictionsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
