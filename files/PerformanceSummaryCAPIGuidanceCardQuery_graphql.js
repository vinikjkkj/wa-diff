__d(
  "PerformanceSummaryCAPIGuidanceCardQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "adAccountID" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = [n],
        o = {
          alias: null,
          args: null,
          concreteType: "AdsPixel",
          kind: "LinkedField",
          name: "best_pixel",
          plural: !1,
          selections: r,
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          concreteType: "AdBusiness",
          kind: "LinkedField",
          name: "business",
          plural: !1,
          selections: r,
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "partner_recommendation",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "PerformanceSummaryCAPIGuidanceCardQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBAdAccountBestPixelWithBusinessID",
              kind: "LinkedField",
              name: "fetch__XFBAdAccountBestPixelWithBusinessID",
              plural: !1,
              selections: [o, a, i],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "PerformanceSummaryCAPIGuidanceCardQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBAdAccountBestPixelWithBusinessID",
              kind: "LinkedField",
              name: "fetch__XFBAdAccountBestPixelWithBusinessID",
              plural: !1,
              selections: [o, a, i, n],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "9560134327356582",
          metadata: {},
          name: "PerformanceSummaryCAPIGuidanceCardQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
