__d(
  "WAWebBizAdCreationAudienceUtils_SavedAudienceCreateMutation.graphql",
  [
    "WAWebBizAdCreationAudienceUtils_SavedAudienceCreateMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "legacyAdAccountID",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "name" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "targetingSpecString",
        },
        o = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "legacy_ad_account_id",
                variableName: "legacyAdAccountID",
              },
              { kind: "Variable", name: "name", variableName: "name" },
              { kind: "Literal", name: "skip_normalization", value: !0 },
              {
                kind: "Variable",
                name: "targeting_spec_string",
                variableName: "targetingSpecString",
              },
            ],
            concreteType: "AdAudience",
            kind: "LinkedField",
            name: "saved_audience_create",
            plural: !1,
            selections: [
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
                name: "id",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subject_to_dsa",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "target_spec_string_without_placements",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationAudienceUtils_SavedAudienceCreateMutation",
          selections: o,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, t],
          kind: "Operation",
          name: "WAWebBizAdCreationAudienceUtils_SavedAudienceCreateMutation",
          selections: o,
        },
        params: {
          id: n(
            "WAWebBizAdCreationAudienceUtils_SavedAudienceCreateMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationAudienceUtils_SavedAudienceCreateMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
