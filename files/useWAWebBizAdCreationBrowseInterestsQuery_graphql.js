__d(
  "useWAWebBizAdCreationBrowseInterestsQuery.graphql",
  ["useWAWebBizAdCreationBrowseInterestsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          { defaultValue: null, kind: "LocalArgument", name: "audiencePath" },
        ],
        t = [
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
                name: "audience_path",
                variableName: "audiencePath",
              },
              {
                kind: "Literal",
                name: "include_all_descendents_of_path",
                value: !0,
              },
              { kind: "Literal", name: "limit", value: 300 },
            ],
            concreteType: "DetailTargetingUnifiedNode",
            kind: "LinkedField",
            name: "detailed_targeting_browse",
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
                name: "name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "path",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "raw_name",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "target_type",
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
          name: "useWAWebBizAdCreationBrowseInterestsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "useWAWebBizAdCreationBrowseInterestsQuery",
          selections: t,
        },
        params: {
          id: n(
            "useWAWebBizAdCreationBrowseInterestsQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizAdCreationBrowseInterestsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
