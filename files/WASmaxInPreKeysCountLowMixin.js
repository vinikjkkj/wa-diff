__d(
  "WASmaxInPreKeysCountLowMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "count_low",
        "true",
      );
      return t.success
        ? o("WAResultOrError").makeResult({ countLow: t.value })
        : t;
    }
    l.parseCountLowMixin = e;
  },
  98,
);
