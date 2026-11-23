__d(
  "WASmaxLoginSuccessRPC",
  [
    "WAResultOrError",
    "WASmaxParseJid",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = s(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("Success", { Request: t }),
        );
      return { parsedRequest: t.value };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "success");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrIntRange(e, "t", 0, void 0);
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "props",
        0,
        void 0,
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "abprops",
        0,
        void 0,
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "group_abprops",
        0,
        void 0,
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").attrString(e, "location");
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "shard_count",
        0,
        65535,
      );
      if (!s.success) return s;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "creation",
        0,
        void 0,
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "companion_enc_static",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        e,
        "lid",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "static_pq_key",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "padded_bytes",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "iso",
      );
      if (!f.success) return f;
      var g = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "cc",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "mc_ep_version",
        0,
        void 0,
      );
      if (!h.success) return h;
      var y = u(e);
      return o("WAResultOrError").makeResult({
        t: n.value,
        props: r.value,
        abprops: a.value,
        groupAbprops: i.value,
        location: l.value,
        shardCount: s.value,
        creation: c.value,
        companionEncStatic: d.value,
        lid: m.value,
        staticPqKey: p.value,
        paddedBytes: _.value,
        iso: f.value,
        cc: g.value,
        mcEpVersion: h.value,
        displayNameMixin: y.success ? y.value : null,
      });
    }
    function u(e) {
      var t = o("WASmaxParseUtils").attrString(e, "display_name");
      return t.success
        ? o("WAResultOrError").makeResult({ displayName: t.value })
        : t;
    }
    ((l.receiveSuccessRPC = e), (l.parseSuccessRequest = s));
  },
  98,
);
