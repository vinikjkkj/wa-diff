__d(
  "WAWebFetchBizAiLargeScreensGateQuery.graphql",
  ["WAWebFetchBizAiLargeScreensGateQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBizAgentWAQEBoolResult",
          kind: "LinkedField",
          name: "xfb_meta_ai_biz_agent_wa_large_screens_gate",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "value",
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
          name: "WAWebFetchBizAiLargeScreensGateQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebFetchBizAiLargeScreensGateQuery",
          selections: e,
        },
        params: {
          id: n("WAWebFetchBizAiLargeScreensGateQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebFetchBizAiLargeScreensGateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
