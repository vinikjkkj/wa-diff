__d(
  "WASmaxInMessageDeliverBroadcastDualEncMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBroadcastDualEncBroadcastDualEncMediaOrBroadcastDualEncNonMediaMediaMixinGroup",
    "WASmaxInMessageDeliverBroadcastParticipantsMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o(
          "WASmaxInMessageDeliverBroadcastParticipantsMixin",
        ).parseBroadcastParticipantsMixin(e),
        r = o(
          "WASmaxInMessageDeliverBroadcastDualEncBroadcastDualEncMediaOrBroadcastDualEncNonMediaMediaMixinGroup",
        ).parseBroadcastDualEncBroadcastDualEncMediaOrBroadcastDualEncNonMediaMediaMixinGroup(
          e,
        );
      return r.success
        ? o("WAResultOrError").makeResult({
            broadcastParticipantsMixin: n.success ? n.value : null,
            broadcastDualEncBroadcastDualEncMediaOrBroadcastDualEncNonMediaMediaMixinGroup:
              r.value,
          })
        : r;
    }
    l.parseBroadcastDualEncMixin = e;
  },
  98,
);
