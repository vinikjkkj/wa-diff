__d(
  "WASmaxInMessageDeliverBroadcastRegularMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBroadcastParticipantsMixin",
    "WASmaxInMessageDeliverEncTypeIndividualOrSenderKeyMixinGroup",
    "WASmaxInMessageDeliverEncVersion",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "enc");
      if (!n.success) return n;
      var r = o(
          "WASmaxInMessageDeliverBroadcastParticipantsMixin",
        ).parseBroadcastParticipantsMixin(e),
        a = o("WASmaxInMessageDeliverEncVersion").parseEncVersion(n.value);
      if (!a.success) return a;
      var i = o(
        "WASmaxInMessageDeliverEncTypeIndividualOrSenderKeyMixinGroup",
      ).parseEncTypeIndividualOrSenderKeyMixinGroup(n.value);
      return i.success
        ? o("WAResultOrError").makeResult({
            broadcastParticipantsMixin: r.success ? r.value : null,
            encEncVersion: a.value,
            encEncTypeIndividualOrSenderKeyMixinGroup: i.value,
          })
        : i;
    }
    l.parseBroadcastRegularMixin = e;
  },
  98,
);
