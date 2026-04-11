__d(
  "WASmaxInGroupsGroupInfoParticipantMixins",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupInfoParticipantAdminMixin",
    "WASmaxInGroupsGroupInfoParticipantNonAdminMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsGroupInfoParticipantAdminMixin",
      ).parseGroupInfoParticipantAdminMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupInfoParticipantAdmin",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsGroupInfoParticipantNonAdminMixin",
      ).parseGroupInfoParticipantNonAdminMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "GroupInfoParticipantNonAdmin",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupInfoParticipantAdmin", "GroupInfoParticipantNonAdmin"],
            [t, n],
          );
    }
    l.parseGroupInfoParticipantMixins = e;
  },
  98,
);
