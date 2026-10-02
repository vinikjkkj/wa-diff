__d(
  "WASmaxInEdgeEdgeRoutingRequest",
  ["WAResultOrError", "WASmaxParseJid", "WASmaxParseUtils"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "ib");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "edge_routing");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "routing_info",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").contentBytesRange(r.value, 1, 1024);
      return i.success
        ? o("WAResultOrError").makeResult({
            from: a.value,
            edgeRoutingRoutingInfoElementValue: i.value,
          })
        : i;
    }
    l.parseEdgeRoutingRequest = e;
  },
  98,
);
