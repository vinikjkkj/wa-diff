__d(
  "WASmaxInPreKeysFetchMissingPreKeysDeviceErrorMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(t.value, "text");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(t.value, "code", 500, 599);
      return r.success
        ? o("WAResultOrError").makeResult({
            errorText: n.value,
            errorCode: r.value,
          })
        : r;
    }
    l.parseFetchMissingPreKeysDeviceErrorMixin = e;
  },
  98,
);
