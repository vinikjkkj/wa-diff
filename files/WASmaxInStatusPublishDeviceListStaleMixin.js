__d(
  "WASmaxInStatusPublishDeviceListStaleMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ack");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "phash");
      return n.success
        ? o("WAResultOrError").makeResult({ phash: n.value })
        : n;
    }
    l.parseDeviceListStaleMixin = e;
  },
  98,
);
