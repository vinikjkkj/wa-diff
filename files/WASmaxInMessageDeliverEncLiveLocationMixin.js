__d(
  "WASmaxInMessageDeliverEncLiveLocationMixin",
  ["WAResultOrError", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "enc");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "mediatype",
        "livelocation",
      );
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").attrIntRange(e, "duration", 0, void 0);
      return r.success
        ? o("WAResultOrError").makeResult({
            mediatype: n.value,
            duration: r.value,
          })
        : r;
    }
    l.parseEncLiveLocationMixin = e;
  },
  98,
);
