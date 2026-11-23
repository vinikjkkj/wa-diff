__d(
  "WASmaxInDevicesICDCDirtyMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "icdc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "dirty",
        "true",
      );
      return n.success
        ? o("WAResultOrError").makeResult({ dirty: n.value })
        : n;
    }
    l.parseICDCDirtyMixin = e;
  },
  98,
);
