__d(
  "WASmaxInPresenceServerUpdateRequest",
  ["WAResultOrError", "WASmaxInPresencePresenceUpdates", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "presence");
      if (!t.success) return t;
      var n = o("WASmaxInPresencePresenceUpdates").parsePresenceUpdates(e);
      return n.success
        ? o("WAResultOrError").makeResult({ presenceUpdates: n.value })
        : n;
    }
    l.parseServerUpdateRequest = e;
  },
  98,
);
