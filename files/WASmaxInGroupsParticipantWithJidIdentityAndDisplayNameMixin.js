__d(
  "WASmaxInGroupsParticipantWithJidIdentityAndDisplayNameMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsDisplayNameMixin",
    "WASmaxInGroupsParticipantWithJidAndIdentityMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsParticipantWithJidAndIdentityMixin",
      ).parseParticipantWithJidAndIdentityMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInGroupsDisplayNameMixin").parseDisplayNameMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parseParticipantWithJidIdentityAndDisplayNameMixin = e;
  },
  98,
);
