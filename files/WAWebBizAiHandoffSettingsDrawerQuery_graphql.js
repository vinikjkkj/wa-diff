__d(
  "WAWebBizAiHandoffSettingsDrawerQuery.graphql",
  ["WAWebBizAiHandoffSettingsDrawerQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBizAgentWAHandoffRemovalTiming",
          kind: "LinkedField",
          name: "xfb_meta_ai_biz_agent_wa_handoff_removal_timing",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "timing",
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
          name: "WAWebBizAiHandoffSettingsDrawerQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiHandoffSettingsDrawerQuery",
          selections: e,
        },
        params: {
          id: n("WAWebBizAiHandoffSettingsDrawerQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiHandoffSettingsDrawerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
