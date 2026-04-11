__d(
  "WASmaxInGroupsParticipantWithJidAndIdentityMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsIdentityMixin",
    "WASmaxInGroupsParticipantWithJidMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsParticipantWithJidMixin",
      ).parseParticipantWithJidMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInGroupsIdentityMixin").parseIdentityMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parseParticipantWithJidAndIdentityMixin = e;
  },
  98,
);
