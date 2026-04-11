__d(
  "WASmaxInMessageDeliverOfflineMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrIntRange(e, "offline", 0, 12);
      return t.success
        ? o("WAResultOrError").makeResult({ offline: t.value })
        : t;
    }
    l.parseOfflineMixin = e;
  },
  98,
);
