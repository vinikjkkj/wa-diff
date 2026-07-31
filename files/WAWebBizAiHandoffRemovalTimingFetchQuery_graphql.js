__d(
  "WAWebBizAiHandoffRemovalTimingFetchQuery.graphql",
  ["WAWebBizAiHandoffRemovalTimingFetchQuery_facebookRelayOperation"],
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
          name: "WAWebBizAiHandoffRemovalTimingFetchQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiHandoffRemovalTimingFetchQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizAiHandoffRemovalTimingFetchQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiHandoffRemovalTimingFetchQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
