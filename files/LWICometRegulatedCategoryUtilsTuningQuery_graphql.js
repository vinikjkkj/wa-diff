__d(
  "LWICometRegulatedCategoryUtilsTuningQuery.graphql",
  ["LWICometRegulatedCategoryUtilsTuningQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "legacyAccount",
        },
        t = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "regulatedCategory",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "targetSpec" },
        o = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "tuningOptions",
        },
        a = [
          {
            alias: null,
            args: null,
            concreteType: "SAFR",
            kind: "LinkedField",
            name: "hec",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "legacy_ad_account_id",
                    variableName: "legacyAccount",
                  },
                  {
                    kind: "Variable",
                    name: "regulated_category",
                    variableName: "regulatedCategory",
                  },
                  {
                    kind: "Variable",
                    name: "target_spec_string",
                    variableName: "targetSpec",
                  },
                  {
                    kind: "Variable",
                    name: "tuning_options",
                    variableName: "tuningOptions",
                  },
                ],
                concreteType: "SAFRTargetingShape",
                kind: "LinkedField",
                name: "tune_target_spec_for_category",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "target_spec_string",
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
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "LWICometRegulatedCategoryUtilsTuningQuery",
          selections: a,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, t, o],
          kind: "Operation",
          name: "LWICometRegulatedCategoryUtilsTuningQuery",
          selections: a,
        },
        params: {
          id: n(
            "LWICometRegulatedCategoryUtilsTuningQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "LWICometRegulatedCategoryUtilsTuningQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
