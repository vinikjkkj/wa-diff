__d(
  "WAWebBizGetPriceTiersQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "request" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "request" },
            ],
            concreteType: "XWAWhatsAppGetPricingTiersResponseSuccess",
            kind: "LinkedField",
            name: "xwa_whatsapp_get_pricing_tiers",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XWAWhatsAppPriceTier",
                kind: "LinkedField",
                name: "price_tiers",
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
                    name: "description",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "symbol",
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
          name: "WAWebBizGetPriceTiersQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizGetPriceTiersQuery",
          selections: t,
        },
        params: {
          id: "25362864436721857",
          metadata: {},
          name: "WAWebBizGetPriceTiersQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
