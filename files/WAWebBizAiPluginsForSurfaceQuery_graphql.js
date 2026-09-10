__d(
  "WAWebBizAiPluginsForSurfaceQuery.graphql",
  ["WAWebBizAiPluginsForSurfaceQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "product_category",
          },
        ],
        t = [
          {
            kind: "Variable",
            name: "product_category",
            variableName: "product_category",
          },
          { kind: "Literal", name: "surface", value: "WHATSAPP" },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_connected",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "apixfn_plugin",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "display_name",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "logo",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiPluginsForSurfaceQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MetaAIBizAgentWAPluginsForSurfaceResponse",
              kind: "LinkedField",
              name: "meta_ai_biz_agent_wa_plugins_for_surface",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "MetaAIBizAgentWAPluginConnectionStatus",
                  kind: "LinkedField",
                  name: "plugins",
                  plural: !0,
                  selections: [
                    r,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "plugin",
                      plural: !1,
                      selections: [o, a, i, l],
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
          name: "WAWebBizAiPluginsForSurfaceQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MetaAIBizAgentWAPluginsForSurfaceResponse",
              kind: "LinkedField",
              name: "meta_ai_biz_agent_wa_plugins_for_surface",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "MetaAIBizAgentWAPluginConnectionStatus",
                  kind: "LinkedField",
                  name: "plugins",
                  plural: !0,
                  selections: [
                    r,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "plugin",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__typename",
                          storageKey: null,
                        },
                        o,
                        a,
                        i,
                        l,
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
        },
        params: {
          id: n("WAWebBizAiPluginsForSurfaceQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiPluginsForSurfaceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
