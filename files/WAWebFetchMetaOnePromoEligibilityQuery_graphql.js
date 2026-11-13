__d(
  "WAWebFetchMetaOnePromoEligibilityQuery.graphql",
  ["WAWebFetchMetaOnePromoEligibilityQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "request" }],
        t = [
          {
            alias: "eligibility",
            args: [
              { kind: "Variable", name: "request", variableName: "request" },
            ],
            concreteType: "GetEligibilityResponse",
            kind: "LinkedField",
            name: "get_eligibility",
            plural: !1,
            selections: [
              {
                alias: "subscriptionPromos",
                args: null,
                concreteType: "PromoEligibilityResult",
                kind: "LinkedField",
                name: "subscription_promos",
                plural: !0,
                selections: [
                  {
                    alias: "isEligible",
                    args: null,
                    kind: "ScalarField",
                    name: "is_eligible",
                    storageKey: null,
                  },
                  {
                    alias: "promoType",
                    args: null,
                    kind: "ScalarField",
                    name: "promo_type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "platform",
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
          name: "WAWebFetchMetaOnePromoEligibilityQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebFetchMetaOnePromoEligibilityQuery",
          selections: t,
        },
        params: {
          id: n(
            "WAWebFetchMetaOnePromoEligibilityQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebFetchMetaOnePromoEligibilityQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
