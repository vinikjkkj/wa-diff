__d(
  "WASmaxInGroupsMemberShareGroupHistoryModes",
  [
    "WAResultOrError",
    "WASmaxInGroupsAdminShareModeMixin",
    "WASmaxInGroupsAllMembersShareModeMixin",
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
        "WASmaxInGroupsUnknownShareModeMixin",
      ).parseUnknownShareModeMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "UnknownShareMode",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["AdminShareMode", "AllMembersShareMode", "UnknownShareMode"],
            [t, n, r],
          );
    }
    l.parseMemberShareGroupHistoryModes = e;
  },
  98,
);
