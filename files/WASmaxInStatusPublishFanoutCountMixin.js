__d(
  "WASmaxInStatusPublishFanoutCountMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").attrInt(e, "count");
      return t.success
        ? o("WAResultOrError").makeResult({ count: t.value })
        : t;
    }
    l.parseFanoutCountMixin = e;
  },
  98,
);
