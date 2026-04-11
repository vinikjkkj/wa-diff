__d(
  "LWICometRegulatedCategoryUtilsTuningRegulatedCategoriesQuery.graphql",
  [
    "LWICometRegulatedCategoryUtilsTuningRegulatedCategoriesQuery_facebookRelayOperation",
  ],
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
          name: "regulatedCategories",
        },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "specialAdCategoryCountries",
        },
        o = { defaultValue: null, kind: "LocalArgument", name: "targetSpec" },
        a = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "tuningOptions",
        },
        i = [
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
                    name: "regulated_categories",
                    variableName: "regulatedCategories",
                  },
                  {
                    kind: "Variable",
                    name: "regulated_category_countries",
                    variableName: "specialAdCategoryCountries",
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
                name: "tune_target_spec_for_categories",
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
          argumentDefinitions: [e, t, r, o, a],
          kind: "Fragment",
          metadata: null,
          name: "LWICometRegulatedCategoryUtilsTuningRegulatedCategoriesQuery",
          selections: i,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, o, t, r, a],
          kind: "Operation",
          name: "LWICometRegulatedCategoryUtilsTuningRegulatedCategoriesQuery",
          selections: i,
        },
        params: {
          id: n(
            "LWICometRegulatedCategoryUtilsTuningRegulatedCategoriesQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "LWICometRegulatedCategoryUtilsTuningRegulatedCategoriesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
