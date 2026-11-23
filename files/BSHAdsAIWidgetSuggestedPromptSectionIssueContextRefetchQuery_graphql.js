__d(
  "BSHAdsAIWidgetSuggestedPromptSectionIssueContextRefetchQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "issueContextEnsureRecheck",
        },
        {
          defaultValue: null,
          kind: "LocalArgument",
          name: "shouldQueryDetectedSupportIssues",
        },
      ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "BSHAdsAIWidgetSuggestedPromptSectionIssueContextRefetchQuery",
          selections: [
            {
              args: [
                {
                  kind: "Variable",
                  name: "issueContextEnsureRecheck",
                  variableName: "issueContextEnsureRecheck",
                },
                {
                  kind: "Variable",
                  name: "shouldQueryDetectedSupportIssues",
                  variableName: "shouldQueryDetectedSupportIssues",
                },
              ],
              kind: "FragmentSpread",
              name: "BSHAdsAIWidgetSuggestedPromptSection_issueContext",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "BSHAdsAIWidgetSuggestedPromptSectionIssueContextRefetchQuery",
          selections: [
            {
              condition: "shouldQueryDetectedSupportIssues",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: null,
                  args: [
                    {
                      kind: "Variable",
                      name: "issue_context_ensure_recheck",
                      variableName: "issueContextEnsureRecheck",
                    },
                    { kind: "Literal", name: "surface", value: "BSH" },
                  ],
                  concreteType: "XFBDetectedSupportIssues",
                  kind: "LinkedField",
                  name: "xfb_detected_support_issues",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "schema_version",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "a2ui_entrypoint_spec",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "fetch_status",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "fetched_at_ms",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "generation_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "refresh_recommended",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "refresh_reason",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "XFBDetectedSupportIssue",
                      kind: "LinkedField",
                      name: "issues",
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
                          name: "asset_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "asset_type",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "canonical_asset_id_source",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "entrypoint_diagnosis_hint_prompt_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "routine",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "priority",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "source_issue_type",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "source_occurrence_time_ms",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "source_provider",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "user_label_key",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "user_label_vars_json",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "topic_id",
                          storageKey: null,
                        },
                      ],
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
          id: "28222384064087725",
          metadata: {},
          name: "BSHAdsAIWidgetSuggestedPromptSectionIssueContextRefetchQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
