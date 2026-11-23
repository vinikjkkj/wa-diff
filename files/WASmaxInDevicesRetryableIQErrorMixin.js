__d(
  "WASmaxInDevicesRetryableIQErrorMixin",
  ["WAResultOrError", "WASmaxInDevicesRetryableErrors", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "error");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "backoff",
        0,
        86400,
      );
      if (!n.success) return n;
      var r = o("WASmaxInDevicesRetryableErrors").parseRetryableErrors(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            backoff: n.value,
            retryableErrors: r.value,
          })
        : r;
    }
    l.parseRetryableIQErrorMixin = e;
  },
  98,
);
