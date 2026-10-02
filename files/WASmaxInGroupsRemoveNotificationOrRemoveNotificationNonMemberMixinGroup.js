__d(
  "WASmaxInGroupsRemoveNotificationOrRemoveNotificationNonMemberMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsRemoveNotificationMemberMixin",
    "WASmaxInGroupsRemoveNotificationNonMemberMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInGroupsRemoveNotificationMemberMixin",
      ).parseRemoveNotificationMemberMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "RemoveNotificationMember",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsRemoveNotificationNonMemberMixin",
      ).parseRemoveNotificationNonMemberMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "RemoveNotificationNonMember",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Member", "NonMember"],
            [t, n],
          );
    }
    l.parseRemoveNotificationOrRemoveNotificationNonMemberMixinGroup = e;
  },
  98,
);
