__d(
  "WAWebBizAIAbilityStatusQuery.graphql",
  ["WAWebBizAIAbilityStatusQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBizAgentWAAIHome",
          kind: "LinkedField",
          name: "xfb_meta_ai_biz_agent_wa_ai_home",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBMetaAIBizAgentWAAbility",
              kind: "LinkedField",
              name: "abilities",
              plural: !0,
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
                  name: "status",
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
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAIAbilityStatusQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAIAbilityStatusQuery",
          selections: e,
        },
        params: {
          id: n("WAWebBizAIAbilityStatusQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAIAbilityStatusQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
