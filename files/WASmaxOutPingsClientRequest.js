__d(
  "WASmaxOutPingsClientRequest",
  ["WASmaxJsx", "WASmaxOutPingsClientWellFormedToMixin", "WAWap"],
  function (t, n, r, o, a, i, l) {
    function e() {
      var e = o(
        "WASmaxOutPingsClientWellFormedToMixin",
      ).mergeClientWellFormedToMixin(
        o("WASmaxJsx").smax("iq", {
          id: o("WAWap").generateId(),
          type: "get",
          xmlns: "w:p",
        }),
      );
      return e;
    }
    l.makeClientRequest = e;
  },
  98,
);
