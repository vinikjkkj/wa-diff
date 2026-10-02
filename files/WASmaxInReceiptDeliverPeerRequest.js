__d(
  "WASmaxInReceiptDeliverPeerRequest",
  [
    "WAResultOrError",
    "WASmaxInReceiptDeliverPeerReceiptType",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "receipt");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrStanzaId(e, "id");
      if (!n.success) return n;
      var r = o("WASmaxParseJid").attrDeviceJid(e, "from");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "t",
        0,
        void 0,
      );
      if (!a.success) return a;
      var i = o(
        "WASmaxInReceiptDeliverPeerReceiptType",
      ).parseDeliverPeerReceiptType(e);
      return i.success
        ? o("WAResultOrError").makeResult({
            id: n.value,
            from: r.value,
            t: a.value,
            deliverPeerReceiptType: i.value,
          })
        : i;
    }
    l.parseDeliverPeerRequest = e;
  },
  98,
);
