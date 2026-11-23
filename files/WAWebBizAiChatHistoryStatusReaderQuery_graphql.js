__d(
  "WAWebBizAiChatHistoryStatusReaderQuery.graphql",
  ["WAWebBizAiChatHistoryStatusReaderQuery_facebookRelayOperation"],
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
              kind: "ScalarField",
              name: "chat_history_export_status",
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
          name: "WAWebBizAiChatHistoryStatusReaderQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiChatHistoryStatusReaderQuery",
          selections: e,
        },
        params: {
          id: n(
            "WAWebBizAiChatHistoryStatusReaderQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAiChatHistoryStatusReaderQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
