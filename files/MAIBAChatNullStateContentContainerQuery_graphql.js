__d(
  "MAIBAChatNullStateContentContainerQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountId" },
          { defaultValue: null, kind: "LocalArgument", name: "requestId" },
          { defaultValue: null, kind: "LocalArgument", name: "visualContext" },
        ],
        t = [
          {
            alias: null,
            args: [
              {
                fields: [
                  {
                    kind: "Variable",
                    name: "ad_account_id",
                    variableName: "adAccountId",
                  },
                  {
                    kind: "Variable",
                    name: "request_id",
                    variableName: "requestId",
                  },
                  {
                    kind: "Variable",
                    name: "visual_context",
                    variableName: "visualContext",
                  },
                ],
                kind: "ObjectValue",
                name: "input",
              },
            ],
            concreteType: "MAIBANullStateSummaryResponse",
            kind: "LinkedField",
            name: "maiba_fetch_null_state_summary",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "MAIBANullStateSummaryItem",
                kind: "LinkedField",
                name: "items",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "insight_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "slot",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "title",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "description",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "prompt",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "display_type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "action_type",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "MAIBANullStateSummaryAdObject",
                    kind: "LinkedField",
                    name: "ad_objects",
                    plural: !0,
                    selections: [
                      {
                        alias: "ad_object_id",
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
                        name: "level",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "MAIBANullStateSummaryItemMetadata",
                    kind: "LinkedField",
                    name: "metadata",
                    plural: !1,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "type",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "async_task_execution_id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "external_conversation_id",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "recommendation_id",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "MAIBANullStateSummaryDebugInfo",
                kind: "LinkedField",
                name: "debug_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "ranked_signals",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "system_prompt",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "user_prompt",
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
          metadata: { throwOnFieldError: !0 },
          name: "MAIBAChatNullStateContentContainerQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAChatNullStateContentContainerQuery",
          selections: t,
        },
        params: {
          id: "28729964673369515",
          metadata: {},
          name: "MAIBAChatNullStateContentContainerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
