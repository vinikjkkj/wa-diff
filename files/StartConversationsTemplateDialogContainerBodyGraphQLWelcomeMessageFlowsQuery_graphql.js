__d(
  "StartConversationsTemplateDialogContainerBodyGraphQLWelcomeMessageFlowsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "enableRTCRelay",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "input" },
        n = { defaultValue: null, kind: "LocalArgument", name: "rtcPageIDs" },
        r = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "tooltipPageIDs",
        },
        o = {
          alias: null,
          args: [{ kind: "Variable", name: "data", variableName: "input" }],
          concreteType: "HasWelcomeMessageFlowsResponse",
          kind: "LinkedField",
          name: "welcome_message_flows",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "has_welcome_message_flows",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        a = [{ kind: "Variable", name: "ids", variableName: "tooltipPageIDs" }],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "StartConversationsTemplateDialogContainerBodyGraphQLWelcomeMessageFlowsQuery",
          selections: [
            { kind: "CatchField", field: o, to: "NULL" },
            {
              kind: "CatchField",
              field: {
                alias: "tooltipPages",
                args: a,
                concreteType: null,
                kind: "LinkedField",
                name: "nodes",
                plural: !0,
                selections: [
                  {
                    kind: "InlineFragment",
                    selections: [
                      {
                        fragment: {
                          kind: "InlineFragment",
                          selections: [
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "useAdsDefaultIceBreakersPageData_page",
                            },
                          ],
                          type: "Page",
                          abstractKey: null,
                        },
                        kind: "AliasedInlineFragmentSpread",
                        name: "tooltipPage",
                      },
                    ],
                    type: "Page",
                    abstractKey: null,
                  },
                ],
                storageKey: null,
              },
              to: "NULL",
            },
            {
              condition: "enableRTCRelay",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  fragment: {
                    kind: "InlineFragment",
                    selections: [
                      {
                        kind: "Defer",
                        selections: [
                          {
                            args: null,
                            kind: "FragmentSpread",
                            name: "StartConversationsCallingSectionWithRelay_query",
                          },
                        ],
                      },
                    ],
                    type: "Query",
                    abstractKey: null,
                  },
                  kind: "AliasedInlineFragmentSpread",
                  name: "rtcQuery",
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, r, n, e],
          kind: "Operation",
          name: "StartConversationsTemplateDialogContainerBodyGraphQLWelcomeMessageFlowsQuery",
          selections: [
            o,
            {
              alias: "tooltipPages",
              args: a,
              concreteType: null,
              kind: "LinkedField",
              name: "nodes",
              plural: !0,
              selections: [
                i,
                l,
                {
                  kind: "InlineFragment",
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "messenger_ads_default_icebreakers",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "InboxFAQAutomation",
                      kind: "LinkedField",
                      name: "inbox_faq_automation",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "automation_id",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: "CustomQuestionAndResponse",
                          kind: "LinkedField",
                          name: "eligible_faq_response_pairs",
                          plural: !0,
                          selections: [i],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "skipped_faq_with_media_or_button",
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  type: "Page",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
            {
              condition: "enableRTCRelay",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  if: null,
                  kind: "Defer",
                  label:
                    "StartConversationsTemplateDialogContainerBodyGraphQLWelcomeMessageFlowsQuery$defer$StartConversationsCallingSectionWithRelay_query",
                  selections: [
                    {
                      alias: "rtcPages",
                      args: [
                        {
                          kind: "Variable",
                          name: "ids",
                          variableName: "rtcPageIDs",
                        },
                      ],
                      concreteType: null,
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [
                        i,
                        l,
                        {
                          kind: "InlineFragment",
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
                              name: "is_biz_rtc_enabled",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "is_eligible_for_warm_call_prompt",
                              storageKey: null,
                            },
                          ],
                          type: "Page",
                          abstractKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                },
              ],
            },
          ],
        },
        params: {
          id: "40219639840982900",
          metadata: {},
          name: "StartConversationsTemplateDialogContainerBodyGraphQLWelcomeMessageFlowsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
