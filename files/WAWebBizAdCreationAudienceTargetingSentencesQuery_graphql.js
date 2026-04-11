__d(
  "WAWebBizAdCreationAudienceTargetingSentencesQuery.graphql",
  ["WAWebBizAdCreationAudienceTargetingSentencesQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "ad_account_id" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "audience_option",
          },
          { defaultValue: null, kind: "LocalArgument", name: "location_only" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "targeting_spec_string",
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
                    variableName: "ad_account_id",
                  },
                  {
                    kind: "Variable",
                    name: "audience_option",
                    variableName: "audience_option",
                  },
                  {
                    kind: "Variable",
                    name: "location_only",
                    variableName: "location_only",
                  },
                  {
                    kind: "Variable",
                    name: "targeting_spec_string",
                    variableName: "targeting_spec_string",
                  },
                ],
                concreteType: "AdTargetingSentence",
                kind: "LinkedField",
                name: "targeting_sentences",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "category_string",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "values",
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
          name: "WAWebBizAdCreationAudienceTargetingSentencesQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizAdCreationAudienceTargetingSentencesQuery",
          selections: t,
        },
        params: {
          id: n(
            "WAWebBizAdCreationAudienceTargetingSentencesQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationAudienceTargetingSentencesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
