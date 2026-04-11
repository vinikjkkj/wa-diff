__d(
  "WASmaxInPreKeysRegistrationIDMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "registration");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytesRange(t.value, 4, 4);
      return n.success
        ? o("WAResultOrError").makeResult({ registrationElementValue: n.value })
        : n;
    }
    l.parseRegistrationIDMixin = e;
  },
  98,
);
