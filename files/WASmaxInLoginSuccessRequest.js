__d(
  "WASmaxInLoginSuccessRequest",
  [
    "WAResultOrError",
    "WASmaxInLoginDisplayNameMixin",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
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
      var u = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrIntRange,
        e,
        "creation",
        0,
        void 0,
      );
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "companion_enc_static",
      );
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        e,
        "lid",
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "static_pq_key",
      );
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "padded_bytes",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrString,
        e,
        "country_code",
      );
      if (!_.success) return _;
      var f = o("WASmaxInLoginDisplayNameMixin").parseDisplayNameMixin(e);
      return o("WAResultOrError").makeResult({
        t: n.value,
        props: r.value,
        abprops: a.value,
        groupAbprops: i.value,
        location: l.value,
        shardCount: s.value,
        creation: u.value,
        companionEncStatic: c.value,
        lid: d.value,
        staticPqKey: m.value,
        paddedBytes: p.value,
        countryCode: _.value,
        displayNameMixin: f.success ? f.value : null,
      });
    }
    l.parseSuccessRequest = e;
  },
  98,
);
