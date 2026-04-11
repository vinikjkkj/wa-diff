__d(
  "WASmaxInGroupsGroupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupForbiddenMixin",
    "WASmaxInGroupsGroupInfoMixin",
    "WASmaxInGroupsGroupNotExistMixin",
    "WASmaxInGroupsTruncatedGroupInfoMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInGroupsGroupInfoMixin").parseGroupInfoMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "GroupInfo",
          value: t.value,
        });
      var n = o(
        "WASmaxInGroupsTruncatedGroupInfoMixin",
      ).parseTruncatedGroupInfoMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "TruncatedGroupInfo",
          value: n.value,
        });
      var r = o("WASmaxInGroupsGroupForbiddenMixin").parseGroupForbiddenMixin(
        e,
      );
      if (r.success)
        return o("WAResultOrError").makeResult({
          name: "GroupForbidden",
          value: r.value,
        });
      var a = o("WASmaxInGroupsGroupNotExistMixin").parseGroupNotExistMixin(e);
      return a.success
        ? o("WAResultOrError").makeResult({
            name: "GroupNotExist",
            value: a.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "GroupInfo",
              "TruncatedGroupInfo",
              "GroupForbidden",
              "GroupNotExist",
            ],
            [t, n, r, a],
          );
    }
    l.parseGroupInfoOrTruncatedGroupInfoOrGroupForbiddenOrGroupNotExistMixinGroup =
      e;
  },
  98,
);
