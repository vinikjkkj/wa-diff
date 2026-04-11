__d(
  "WASmaxInGroupsParticipantWithJidLidAndDisplayNameMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsDisplayNameMixin",
    "WASmaxInGroupsParticipantWithJidAndLidMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsParticipantWithJidAndLidMixin",
      ).parseParticipantWithJidAndLidMixin(e);
      if (!n.success) return n;
      var r = o("WASmaxInGroupsDisplayNameMixin").parseDisplayNameMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends({}, n.value, r.value),
          )
        : r;
    }
    l.parseParticipantWithJidLidAndDisplayNameMixin = e;
  },
  98,
);
