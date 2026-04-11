__d(
  "WASmaxInGroupsGroupInfoOrTruncatedGroupInfoGroupInfoMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsGroupInfoMixin",
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
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "TruncatedGroupInfo",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["GroupInfo", "TruncatedGroupInfo"],
            [t, n],
          );
    }
    l.parseGroupInfoOrTruncatedGroupInfoGroupInfoMixinGroup = e;
  },
  98,
);
