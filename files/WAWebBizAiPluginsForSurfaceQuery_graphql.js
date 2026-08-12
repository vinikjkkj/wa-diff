__d(
  "WAWebBizAiPluginsForSurfaceQuery.graphql",
  ["WAWebBizAiPluginsForSurfaceQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ kind: "Literal", name: "surface", value: "WHATSAPP" }],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "is_connected",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "apixfn_plugin",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "display_name",
          storageKey: null,
        },
        i = {
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
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiPluginsForSurfaceQuery",
          selections: [
            {
              alias: null,
              args: e,
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
                    t,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "plugin",
                      plural: !1,
                      selections: [r, o, a, i],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey:
                'meta_ai_biz_agent_wa_plugins_for_surface(surface:"WHATSAPP")',
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiPluginsForSurfaceQuery",
          selections: [
            {
              alias: null,
              args: e,
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
                    t,
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
                        r,
                        o,
                        a,
                        i,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey:
                'meta_ai_biz_agent_wa_plugins_for_surface(surface:"WHATSAPP")',
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
