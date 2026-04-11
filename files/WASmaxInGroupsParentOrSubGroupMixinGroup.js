__d(
  "WASmaxInGroupsParentOrSubGroupMixinGroup",
  [
    "WAResultOrError",
    "WASmaxInGroupsParentGroupMixin",
    "WASmaxInGroupsSubGroupMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInGroupsParentGroupMixin").parseParentGroupMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "ParentGroup",
          value: t.value,
        });
      var n = o("WASmaxInGroupsSubGroupMixin").parseSubGroupMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "SubGroup", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["ParentGroup", "SubGroup"],
            [t, n],
          );
    }
    l.parseParentOrSubGroupMixinGroup = e;
  },
  98,
);
