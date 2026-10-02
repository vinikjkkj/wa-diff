__d(
  "WASmaxInMessageDeliverWebDriverConfigMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "message");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "meta");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrString(n.value, "webdriver_config");
      return r.success
        ? o("WAResultOrError").makeResult({ metaWebdriverConfig: r.value })
        : r;
    }
    l.parseWebDriverConfigMixin = e;
  },
  98,
);
