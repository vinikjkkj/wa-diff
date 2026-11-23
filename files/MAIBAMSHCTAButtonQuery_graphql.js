__d(
  "MAIBAMSHCTAButtonQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "business_id" },
          { defaultValue: null, kind: "LocalArgument", name: "entry_point" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "business_id",
                variableName: "business_id",
              },
              {
                kind: "Variable",
                name: "entry_point",
                variableName: "entry_point",
              },
            ],
            concreteType: "XFBPartnerIntegrationTypeDetails",
            kind: "LinkedField",
            name: "xfb_recommended_partner_integration_details",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "partner_type_as_enum",
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
          name: "MAIBAMSHCTAButtonQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAMSHCTAButtonQuery",
          selections: t,
        },
        params: {
          id: "27784651741136438",
          metadata: {},
          name: "MAIBAMSHCTAButtonQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
