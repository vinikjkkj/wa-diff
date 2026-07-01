__d(
  "WASmaxInPreKeysPQKeyDataMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").contentBytesRange(e, 1568, 1568);
      return t.success
        ? o("WAResultOrError").makeResult({ elementValue: t.value })
        : t;
    }
    l.parsePQKeyDataMixin = e;
  },
  98,
);
