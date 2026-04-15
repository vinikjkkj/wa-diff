__d(
  "WAWebBizAiReplySettingsQuery.graphql",
  ["WAWebBizAiReplySettingsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "XFBMetaAIBizAgentWAReplyChatTrigger",
          kind: "LinkedField",
          name: "xfb_meta_ai_biz_agent_wa_reply_chat_trigger",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "trigger_chat_type",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              concreteType: "XFBMetaAIBizAgentWAReplyBotEnabledTime",
              kind: "LinkedField",
              name: "bot_enabled_time",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "enabled_time",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "from_sec_in_day",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "to_sec_in_day",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "time_zone",
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
          name: "WAWebBizAiReplySettingsQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiReplySettingsQuery",
          selections: e,
        },
        params: {
          id: n("WAWebBizAiReplySettingsQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiReplySettingsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
