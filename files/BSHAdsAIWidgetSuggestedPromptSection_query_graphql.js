__d(
  "BSHAdsAIWidgetSuggestedPromptSection_query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        argumentDefinitions: [
          { defaultValue: null, kind: "LocalArgument", name: "callerID" },
          { defaultValue: null, kind: "LocalArgument", name: "maxIssuesShown" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "shouldQueryDetectedSupportIssues",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "supportEntryPoint",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "supportedAssets",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "supportedTopics",
          },
        ],
        kind: "Fragment",
        metadata: null,
        name: "BSHAdsAIWidgetSuggestedPromptSection_query",
        selections: [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "caller_id", variableName: "callerID" },
              {
                kind: "Variable",
                name: "support_entry_point",
                variableName: "supportEntryPoint",
              },
            ],
            concreteType: "XFBLBDV2",
            kind: "LinkedField",
            name: "xfb_lbd_v2",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "limit",
                    variableName: "maxIssuesShown",
                  },
                  {
                    kind: "Variable",
                    name: "supported_assets",
                    variableName: "supportedAssets",
                  },
                  {
                    kind: "Variable",
                    name: "supported_topics",
                    variableName: "supportedTopics",
                  },
                ],
                concreteType: "XFBMVLBDDetectedPlanResponse",
                kind: "LinkedField",
                name: "plans_detected_v2",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBMVLBDPlanDetectedPayload",
                    kind: "LinkedField",
                    name: "plans",
                    plural: !0,
                    selections: [
                      {
                        kind: "CatchField",
                        field: {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "entrypoint_prompt_id",
                          storageKey: null,
                        },
                        to: "NULL",
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "asset",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "asset_id_normalized",
                            storageKey: null,
                          },
                          {
                            kind: "CatchField",
                            field: {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "name",
                              storageKey: null,
                            },
                            to: "NULL",
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "supported_asset",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        concreteType: null,
                        kind: "LinkedField",
                        name: "plan_v2",
                        plural: !1,
                        selections: [
                          e,
                          {
                            alias: "name",
                            args: null,
                            kind: "ScalarField",
                            name: "translated_name",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            concreteType: "XFBCCViewForLBDTopic",
                            kind: "LinkedField",
                            name: "topic",
                            plural: !1,
                            selections: [e],
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          {
            args: [
              { kind: "Literal", name: "issueContextEnsureRecheck", value: !1 },
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
      };
    })();
    a.exports = e;
  },
  null,
);
