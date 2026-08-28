__d(
  "MAIBAMessageSignalsCTARendererMutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "data", variableName: "input" }],
            concreteType: "SetAutomaticAdvancedMatchingAdsPixelResponsePayload",
            kind: "LinkedField",
            name: "set_automatic_advanced_matching_ads_pixel",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AdsPixel",
                kind: "LinkedField",
                name: "ads_pixel",
                plural: !1,
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
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "enable_automatic_matching",
                    storageKey: null,
                  },
                ],
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
          name: "MAIBAMessageSignalsCTARendererMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAMessageSignalsCTARendererMutation",
          selections: t,
        },
        params: {
          id: "24996386686710720",
          metadata: {},
          name: "MAIBAMessageSignalsCTARendererMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
