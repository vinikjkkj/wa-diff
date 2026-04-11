__d(
  "WASmaxInGroupsParticipantRequestCodeCanBeSentMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsParticipantNotAddressableMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "add_request");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "error",
        "403",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrString(n.value, "code");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").attrIntRange(
        n.value,
        "expiration",
        0,
        void 0,
      );
      if (!i.success) return i;
      var l = o(
        "WASmaxInGroupsParticipantNotAddressableMixin",
      ).parseParticipantNotAddressableMixin(e);
      return o("WAResultOrError").makeResult({
        error: r.value,
        addRequestCode: a.value,
        addRequestExpiration: i.value,
        participantNotAddressableMixin: l.success ? l.value : null,
      });
    }
    l.parseParticipantRequestCodeCanBeSentMixin = e;
  },
  98,
);
