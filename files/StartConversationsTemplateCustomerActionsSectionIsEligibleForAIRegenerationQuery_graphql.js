__d(
  "StartConversationsTemplateCustomerActionsSectionIsEligibleForAIRegenerationQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "ad_account_id",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "ad_caption" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "destination_type",
        },
        r = { defaultValue: null, kind: "LocalArgument", name: "page_id" },
        o = { defaultValue: null, kind: "LocalArgument", name: "post_id" },
        a = { defaultValue: null, kind: "LocalArgument", name: "skip" },
        i = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "ad_account_id",
          },
        ],
        l = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "ad_caption",
              variableName: "ad_caption",
            },
            {
              kind: "Variable",
              name: "destination_type",
              variableName: "destination_type",
            },
            { kind: "Variable", name: "page_id", variableName: "page_id" },
            { kind: "Variable", name: "post_id", variableName: "post_id" },
          ],
          kind: "ScalarField",
          name: "is_eligible_for_ai_regeneration",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r, o, a],
          kind: "Fragment",
          metadata: null,
          name: "StartConversationsTemplateCustomerActionsSectionIsEligibleForAIRegenerationQuery",
          selections: [
            {
              condition: "skip",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: i,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "ad_account",
                  plural: !1,
                  selections: [l],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, r, o, n, t, a],
          kind: "Operation",
          name: "StartConversationsTemplateCustomerActionsSectionIsEligibleForAIRegenerationQuery",
          selections: [
            {
              condition: "skip",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: i,
                  concreteType: "AdAccount",
                  kind: "LinkedField",
                  name: "ad_account",
                  plural: !1,
                  selections: [
                    l,
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "id",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "24901233246147977",
          metadata: {},
          name: "StartConversationsTemplateCustomerActionsSectionIsEligibleForAIRegenerationQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
