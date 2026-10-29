__d(
  "WASmaxInGroupsMemberShareGroupHistoryModes",
  [
    "WAResultOrError",
    "WASmaxInGroupsAdminShareModeMixin",
    "WASmaxInGroupsAllMembersShareModeMixin",
    "WASmaxInGroupsAllMembersShareToggleOnModeMixin",
    "WASmaxInGroupsUnknownShareModeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInGroupsAdminShareModeMixin").parseAdminShareModeMixin(
        e,
      );
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "AdminShareMode",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsAllMembersShareModeMixin",
      ).parseAllMembersShareModeMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "AllMembersShareMode",
          value: n.value,
        });
      var r = o(
        "WASmaxInGroupsAllMembersShareToggleOnModeMixin",
      ).parseAllMembersShareToggleOnModeMixin(e);
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "AllMembersShareToggleOnMode",
          value: r.value,
        });
      var a = o(
        "WASmaxInGroupsUnknownShareModeMixin",
      ).parseUnknownShareModeMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "UnknownShareMode",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "AdminShareMode",
              "AllMembersShareMode",
              "AllMembersShareToggleOnMode",
              "UnknownShareMode",
            ],
            [t, n, r, a],
          );
    }
    l.parseMemberShareGroupHistoryModes = e;
  },
  98,
);
