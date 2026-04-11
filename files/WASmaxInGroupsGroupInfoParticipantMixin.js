__d(
  "WASmaxInGroupsGroupInfoParticipantMixin",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupInfoParticipantMixins",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "participant");
      if (!t.success) return t;
      var n = o(
        "WASmaxInGroupsGroupInfoParticipantMixins",
      ).parseGroupInfoParticipantMixins(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            groupInfoParticipantMixins: n.value,
          })
        : n;
    }
    l.parseGroupInfoParticipantMixin = e;
  },
  98,
);
