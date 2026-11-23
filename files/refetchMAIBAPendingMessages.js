__d(
  "refetchMAIBAPendingMessages",
  [
    "Base64",
    "MAIBAAsyncMessageObservers",
    "MAIBAChatMessageDebuggingUtils",
    "MAIBAChatStreamingStateUtils",
    "MAIBASendMessageLogger",
    "XFBAbraStreamingState.facebook",
    "getMAIBAPendingMessages",
    "refetchMAIBAPendingMessagesQuery.graphql",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 6e5,
      u =
        e !== void 0 ? e : (e = n("refetchMAIBAPendingMessagesQuery.graphql"));
    function c(e) {
      var t = e.externalConversationId,
        n = e.offlineThreadingId;
      return r("Base64").encode(JSON.stringify({ ecid: t, otid: n }));
    }
    function d(e, t) {
      o("relay-runtime").commitLocalUpdate(e, function (e) {
        var n = e.get(t),
          a = n == null ? void 0 : n.getValue("created_timestamp"),
          i = n == null ? void 0 : n.getValue("streaming_state");
        n == null ||
          typeof a != "number" ||
          typeof i != "string" ||
          !o("MAIBAChatStreamingStateUtils").isStreamingStateLoading(
            r("XFBAbraStreamingState.facebook").cast(i),
          ) ||
          Date.now() - a < s ||
          n.setValue("ERROR", "streaming_state");
      });
    }
    function m(e) {
      if (
        !(
          e.role !== "ASSISTANT" ||
          e.user_type === "HUMAN_ASSISTANT" ||
          e.snippet == null ||
          e.snippet === ""
        )
      ) {
        var t = e.external_conversation_id,
          n = o("MAIBASendMessageLogger").getMAIBASendInteractionID(
            e.bot_invocation_message_otid,
            t,
          );
        e.streaming_state === "LLM_DONE"
          ? o(
              "MAIBASendMessageLogger",
            ).sendMessageLogger.logCompleteResponseReceived(n, t)
          : e.streaming_state === "OVERALL_DONE" &&
            o(
              "MAIBASendMessageLogger",
            ).sendMessageLogger.logTerminalResponseReceived(n, t);
      }
    }
    function p(e, t, n, a, i) {
      var l = i != null ? [i] : r("getMAIBAPendingMessages")(e);
      return (
        l.forEach(function (r) {
          var i = r.externalConversationId,
            l = r.offlineThreadingId,
            s = c({ externalConversationId: i, offlineThreadingId: l });
          o("relay-runtime")
            .fetchQuery(e, u, {
              messageFetchId: s,
              shouldFetchMessageDebugInfo: o(
                "MAIBAChatMessageDebuggingUtils",
              ).isMAIBAMessageDebuggingAllowed(),
            })
            .subscribe({
              error: (function (e) {
                function t(t) {
                  return e.apply(this, arguments);
                }
                return (
                  (t.toString = function () {
                    return e.toString();
                  }),
                  t
                );
              })(function (e) {
                return t == null ? void 0 : t(e, r);
              }),
              next: function (i) {
                var t = i.fetch__XFBMAIBAMessage;
                t != null
                  ? (m(t),
                    o(
                      "MAIBAAsyncMessageObservers",
                    ).notifyMAIBAAsyncMessageObserversOfReply(
                      t.external_conversation_id,
                      t.streaming_state,
                      t.conversation,
                    ),
                    n == null || n(r))
                  : (d(e, r.relayRecordId), a == null || a(r));
              },
            });
        }),
        l
      );
    }
    l.default = p;
  },
  98,
);
