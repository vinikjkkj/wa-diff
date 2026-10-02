__d(
  "WASmaxInMessageDeliverBroadcastParticipantsMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBroadcastEphemeralMixin",
    "WASmaxInMessageDeliverPeerRecipientLIDOrPNMixinGroup",
    "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
    "WASmaxInMessageDeliverRecipientLatestLIDMixin",
    "WASmaxInMessageDeliverToUserMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "to");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverToUserMixin").parseToUserMixin(e);
      if (!n.success) return n;
      var r = o(
          "WASmaxInMessageDeliverBroadcastEphemeralMixin",
        ).parseBroadcastEphemeralMixin(e),
        a = o(
          "WASmaxInMessageDeliverRecipientLatestLIDMixin",
        ).parseRecipientLatestLIDMixin(e),
        i = o(
          "WASmaxInMessageDeliverPeerRecipientUsernameMixin",
        ).parsePeerRecipientUsernameMixin(e),
        l = o(
          "WASmaxInMessageDeliverPeerRecipientLIDOrPNMixinGroup",
        ).parsePeerRecipientLIDOrPNMixinGroup(e);
      return o("WAResultOrError").makeResult(
        babelHelpers.extends({}, n.value, {
          broadcastEphemeralMixin: r.success ? r.value : null,
          recipientLatestLIDMixin: a.success ? a.value : null,
          peerRecipientUsernameMixin: i.success ? i.value : null,
          peerRecipientLIDOrPNMixinGroup: l.success ? l.value : null,
        }),
      );
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "participants");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").mapChildrenWithTag(
        r.value,
        "to",
        0,
        2e3,
        e,
      );
      return a.success
        ? o("WAResultOrError").makeResult({ participantsTo: a.value })
        : a;
    }
    ((l.parseBroadcastParticipantsParticipantsTo = e),
      (l.parseBroadcastParticipantsMixin = s));
  },
  98,
);
