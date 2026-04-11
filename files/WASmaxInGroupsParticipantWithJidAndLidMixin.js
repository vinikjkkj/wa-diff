__d(
  "WASmaxInGroupsParticipantWithJidAndLidMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsParticipantWithJidMixin",
    "WASmaxInGroupsParticipantWithLidMixin",
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
      var r = o(
        "WASmaxInGroupsParticipantWithLidMixin",
      ).parseParticipantWithLidMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parseParticipantWithJidAndLidMixin = e;
  },
  98,
);
