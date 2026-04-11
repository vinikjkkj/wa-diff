__d(
  "WASmaxInChatstateStateSource",
  [
    "WAResultOrError",
    "WASmaxInChatstateFromGroupMixin",
    "WASmaxInChatstateFromUserMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxInChatstateFromUserMixin").parseFromUserMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "FromUser",
          value: t.value,
        });
      var n = o("WASmaxInChatstateFromGroupMixin").parseFromGroupMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({ name: "FromGroup", value: n.value })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["FromUser", "FromGroup"],
            [t, n],
          );
    }
    l.parseStateSource = e;
  },
  98,
);
