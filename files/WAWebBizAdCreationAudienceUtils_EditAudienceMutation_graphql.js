__d(
  "WAWebBizAdCreationAudienceUtils_EditAudienceMutation.graphql",
  [
    "WAWebBizAdCreationAudienceUtils_EditAudienceMutation_facebookRelayOperation",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "name" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "savedAudienceID",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "targetingSpecString",
          },
        ],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "name", variableName: "name" },
              {
                kind: "Variable",
                name: "saved_audience_id",
                variableName: "savedAudienceID",
              },
              { kind: "Literal", name: "skip_normalization", value: !0 },
              {
                kind: "Variable",
                name: "targeting_spec_string",
                variableName: "targetingSpecString",
              },
            ],
            concreteType: "AdAudience",
            kind: "LinkedField",
            name: "saved_audience_edit",
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
                name: "target_spec_string_without_placements",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "subject_to_dsa",
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
          name: "WAWebBizAdCreationAudienceUtils_EditAudienceMutation",
          selections: t,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAdCreationAudienceUtils_EditAudienceMutation",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAdCreationAudienceUtils_EditAudienceMutation_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationAudienceUtils_EditAudienceMutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
