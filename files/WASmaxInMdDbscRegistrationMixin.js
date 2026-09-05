__d(
  "WASmaxInMdDbscRegistrationMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "dbsc_registration");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(e, 32, 32);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    l.parseDbscRegistrationMixin = e;
  },
  98,
);
