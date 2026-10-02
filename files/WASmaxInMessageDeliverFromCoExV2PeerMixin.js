__d(
  "WASmaxInMessageDeliverFromCoExV2PeerMixin",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "meta");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "type",
        "CoexStateSync",
      );
      return n.success ? o("WAResultOrError").makeResult({ type: n.value }) : n;
    }
    function s(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "message");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "bot");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optionalChildWithTag(t, "meta", e);
      if (!a.success) return a;
      var i = o("WASmaxParseJid").attrUserJid(t, "from");
      return i.success
        ? o("WAResultOrError").makeResult({ from: i.value, meta: a.value })
        : i;
    }
    ((l.parseFromCoExV2PeerMeta = e), (l.parseFromCoExV2PeerMixin = s));
  },
  98,
);
