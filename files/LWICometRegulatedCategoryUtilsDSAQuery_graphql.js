__d(
  "LWICometRegulatedCategoryUtilsDSAQuery.graphql",
  ["LWICometRegulatedCategoryUtilsDSAQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "targetSpecString",
          },
        ],
        t = [
          {
            alias: null,
            args: null,
            concreteType: "LWIAPI",
            kind: "LinkedField",
            name: "lwi",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "ad_account_id",
                    variableName: "adAccountID",
                  },
                  {
                    kind: "Variable",
                    name: "target_spec_string",
                    variableName: "targetSpecString",
                  },
                ],
                kind: "ScalarField",
                name: "target_spec_subject_to_dsa",
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
          name: "LWICometRegulatedCategoryUtilsDSAQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "LWICometRegulatedCategoryUtilsDSAQuery",
          selections: t,
        },
        params: {
          id: n(
            "LWICometRegulatedCategoryUtilsDSAQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "LWICometRegulatedCategoryUtilsDSAQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
