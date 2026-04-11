__d(
  "WASmaxInPreKeysFetchMissingPreKeysUserErrorFallbackMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "user");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "text");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").attrIntRange(n.value, "code", 500, 599);
      return a.success
        ? o("WAResultOrError").makeResult({
            errorText: r.value,
            errorCode: a.value,
          })
        : a;
    }
    l.parseFetchMissingPreKeysUserErrorFallbackMixin = e;
  },
  98,
);
