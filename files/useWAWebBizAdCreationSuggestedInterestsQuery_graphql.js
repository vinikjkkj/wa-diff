__d(
  "useWAWebBizAdCreationSuggestedInterestsQuery.graphql",
  ["useWAWebBizAdCreationSuggestedInterestsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adAccountID",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "count" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "detailedTargetingItems",
        },
        o = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "adAccountID",
          },
        ],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        i = {
          alias: null,
          args: [
            {
              fields: [
                {
                  kind: "Variable",
                  name: "detailed_targeting_items",
                  variableName: "detailedTargetingItems",
                },
              ],
              kind: "ObjectValue",
              name: "ad_detailed_targeting_items",
            },
            { kind: "Variable", name: "first", variableName: "count" },
          ],
          concreteType: "AdDetailedTargetingSuggestionsConnection",
          kind: "LinkedField",
          name: "detailed_targeting_suggestions",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "DetailTargetingUnifiedNode",
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                a,
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
                  name: "target_type",
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r],
          kind: "Fragment",
          metadata: null,
          name: "useWAWebBizAdCreationSuggestedInterestsQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [i],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, t],
          kind: "Operation",
          name: "useWAWebBizAdCreationSuggestedInterestsQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [i, a],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "useWAWebBizAdCreationSuggestedInterestsQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "useWAWebBizAdCreationSuggestedInterestsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
