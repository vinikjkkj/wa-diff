__d(
  "MAIBAA2UIv09AdPublishSelfDisclosureQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adgroupId" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "adgroupId" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "campaign_group_id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_authorization_category",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "creative_self_disclosure_opted_in",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "control_type",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "default_value",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "display_group_id",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_enabled",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "MAIBAA2UIv09AdPublishSelfDisclosureQuery",
          selections: [
            {
              alias: "adgroup",
              args: t,
              concreteType: "AdAdgroupWithDraftData",
              kind: "LinkedField",
              name: "fetch__AdAdgroupWithDraftData",
              plural: !1,
              selections: [
                n,
                r,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "GenAITransparencyAdvertiserControlConfigResponse",
                  kind: "LinkedField",
                  name: "genai_transparency_advertiser_control_config",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "GenAITransparencyAdvertiserControlDefinition",
                      kind: "LinkedField",
                      name: "controls",
                      plural: !0,
                      selections: [
                        a,
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "GenAITransparencyAdvertiserControlDisplayConfig",
                          kind: "LinkedField",
                          name: "display",
                          plural: !1,
                          selections: [
                            i,
                            {
                              args: null,
                              kind: "FragmentSpread",
                              name: "GenAITransparencyAdvertiserControl_display",
                            },
                          ],
                          storageKey: null,
                        },
                        l,
                        s,
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
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAA2UIv09AdPublishSelfDisclosureQuery",
          selections: [
            {
              alias: "adgroup",
              args: t,
              concreteType: "AdAdgroupWithDraftData",
              kind: "LinkedField",
              name: "fetch__AdAdgroupWithDraftData",
              plural: !1,
              selections: [
                n,
                r,
                o,
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "GenAITransparencyAdvertiserControlConfigResponse",
                  kind: "LinkedField",
                  name: "genai_transparency_advertiser_control_config",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "GenAITransparencyAdvertiserControlDefinition",
                      kind: "LinkedField",
                      name: "controls",
                      plural: !0,
                      selections: [
                        a,
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "GenAITransparencyAdvertiserControlDisplayConfig",
                          kind: "LinkedField",
                          name: "display",
                          plural: !1,
                          selections: [
                            i,
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "primary_text",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "secondary_text",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "learn_more_text",
                              storageKey: null,
                            },
                            {
                              alias: null,
                              args: null,
                              kind: "ScalarField",
                              name: "learn_more_url",
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                        l,
                        s,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
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
        params: {
          id: "28659092890369434",
          metadata: {},
          name: "MAIBAA2UIv09AdPublishSelfDisclosureQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
