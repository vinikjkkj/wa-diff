__d(
  "WASmaxInGroupsMemberLinkModes",
  [
    "WAResultOrError",
    "WASmaxInGroupsAdminLinkModeMixin",
    "WASmaxInGroupsAllMembersLinkModeMixin",
    "WASmaxInGroupsUnknownLinkModeMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInGroupsAdminLinkModeMixin").parseAdminLinkModeMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "AdminLinkMode",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsAllMembersLinkModeMixin",
      ).parseAllMembersLinkModeMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "AllMembersLinkMode",
          value: n.value,
        });
      var r = o("WASmaxInGroupsUnknownLinkModeMixin").parseUnknownLinkModeMixin(
        e,
      );
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "UnknownLinkMode",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["AdminLinkMode", "AllMembersLinkMode", "UnknownLinkMode"],
            [t, n, r],
          );
    }
    l.parseMemberLinkModes = e;
  },
  98,
);
