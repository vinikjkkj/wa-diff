__d(
  "WAWebGetNumbersForBrandIdsJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "input" },
            ],
            concreteType: "XWAGetPhoneNumbersForBrandIdsResponse",
            kind: "LinkedField",
            name: "xwa_get_numbers_for_brand_ids",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XWAWhatsAppBrandIdData",
                kind: "LinkedField",
                name: "brand_ids_data",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "brand_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "error",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "phone_numbers",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "lids",
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
          name: "WAWebGetNumbersForBrandIdsJobQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebGetNumbersForBrandIdsJobQuery",
          selections: t,
        },
        params: {
          id: "33391034967211217",
          metadata: {},
          name: "WAWebGetNumbersForBrandIdsJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
