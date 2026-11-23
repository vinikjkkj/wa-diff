__d(
  "WASmaxInDevicesICDCSeqMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrIntRange(e, "seq", 0, 2147483647);
      return t.success ? o("WAResultOrError").makeResult({ seq: t.value }) : t;
    }
    l.parseICDCSeqMixin = e;
  },
  98,
);
