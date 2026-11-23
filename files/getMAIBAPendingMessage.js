__d(
  "getMAIBAPendingMessage",
  [
    "MAIBAChatStreamingStateUtils",
    "XFBAbraStreamingState.facebook",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = e.getStore().getSource().get(t);
      if (
        n == null ||
        o("relay-runtime").Record.getType(n) !== "XFBMAIBAMessage"
      )
        return null;
      var a = o("relay-runtime").Record.getValue(n, "streaming_state");
      if (
        typeof a != "string" ||
        !o("MAIBAChatStreamingStateUtils").isStreamingStateLoading(
          r("XFBAbraStreamingState.facebook").cast(a),
        )
      )
        return null;
      var i = o("relay-runtime").Record.getValue(n, "external_conversation_id"),
        l = o("relay-runtime").Record.getValue(n, "offline_threading_id"),
        s = o("relay-runtime").Record.getValue(n, "created_timestamp");
      return typeof i != "string" ||
        typeof l != "string" ||
        typeof s != "number"
        ? null
        : {
            externalConversationId: i,
            offlineThreadingId: l,
            relayRecordId: t,
          };
    }
    l.default = e;
  },
  98,
);
