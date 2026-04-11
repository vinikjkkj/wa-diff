__d(
  "WASmaxInPreKeysKeyDataMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
      return t.success
        ? o("WAResultOrError").makeResult({ elementValue: t.value })
        : t;
    }
    l.parseKeyDataMixin = e;
  },
  98,
);
