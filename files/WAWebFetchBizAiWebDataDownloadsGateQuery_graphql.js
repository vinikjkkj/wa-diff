__d(
  "WAWebFetchBizAiWebDataDownloadsGateQuery.graphql",
  ["WAWebFetchBizAiWebDataDownloadsGateQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBizAgentWAQEBoolResult",
          kind: "LinkedField",
          name: "xfb_meta_ai_biz_agent_wa_web_data_downloads_gate",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "success",
              storageKey: null,
            },
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
          name: "WAWebFetchBizAiWebDataDownloadsGateQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebFetchBizAiWebDataDownloadsGateQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebFetchBizAiWebDataDownloadsGateQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebFetchBizAiWebDataDownloadsGateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
