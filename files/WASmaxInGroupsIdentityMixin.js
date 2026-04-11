__d(
  "WASmaxInGroupsIdentityMixin",
  ["WAResultOrError", "WASmaxInGroupsIdentityTypes"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInGroupsIdentityTypes").parseIdentityTypes(e);
      return t.success
        ? o("WAResultOrError").makeResult({ identityTypes: t.value })
        : t;
    }
    l.parseIdentityMixin = e;
  },
  98,
);
