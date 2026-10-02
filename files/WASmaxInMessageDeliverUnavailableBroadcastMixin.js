__d(
  "WASmaxInMessageDeliverUnavailableBroadcastMixin",
  [
    "WAResultOrError",
    "WASmaxInMessageDeliverBroadcastParticipantsMixin",
    "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
    "WASmaxInMessageDeliverUnavailableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxInMessageDeliverUnavailableMixin").parseUnavailableMixin(
        e,
      );
      if (!n.success) return n;
      var r = o(
          "WASmaxInMessageDeliverBroadcastParticipantsMixin",
        ).parseBroadcastParticipantsMixin(e),
        a = o(
          "WASmaxInMessageDeliverContentTypeTextOrMediaMixinGroup",
        ).parseContentTypeTextOrMediaMixinGroup(e);
      return a.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, {
              broadcastParticipantsMixin: r.success ? r.value : null,
              contentTypeTextOrMediaMixinGroup: a.value,
            }),
          )
        : a;
    }
    l.parseUnavailableBroadcastMixin = e;
  },
  98,
);
