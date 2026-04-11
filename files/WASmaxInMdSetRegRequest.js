__d(
  "WASmaxInMdSetRegRequest",
  [
    "WAResultOrError",
    "WASmaxInMdAESEncryptionMetadataMixin",
    "WASmaxInMdBaseIQSetRequestMixin",
    "WASmaxInMdEnums",
    "WASmaxParseJid",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "biz");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      return n.success ? o("WAResultOrError").makeResult({ name: n.value }) : n;
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "client-props");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "encryption-metadata");
      if (!t.success) return t;
      var n = o(
        "WASmaxInMdAESEncryptionMetadataMixin",
      ).parseAESEncryptionMetadataMixin(e);
      return (n.success, n);
    }
    function c(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "pair-success");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "device-identity",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "device");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "platform");
      if (!l.success) return l;
      var c = o("WASmaxParseUtils").optionalChildWithTag(r.value, "biz", e);
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "client-props",
        s,
      );
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "encryption-metadata",
        u,
      );
      if (!m.success) return m;
      var p = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        t,
        "from",
        "s.whatsapp.net",
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "xmlns",
        "md",
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").contentBytesRange(a.value, 1, 500);
      if (!f.success) return f;
      var g = o("WASmaxParseJid").attrDeviceJid(i.value, "jid");
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        i.value,
        "lid",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        i.value,
        "beta",
        o("WASmaxInMdEnums").ENUM_FALSE_TRUE,
      );
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").attrString(l.value, "name");
      if (!C.success) return C;
      var b = o("WASmaxInMdBaseIQSetRequestMixin").parseBaseIQSetRequestMixin(
        t,
      );
      return b.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: p.value,
                xmlns: _.value,
                pairSuccessDeviceIdentityElementValue: f.value,
                pairSuccessDeviceJid: g.value,
                pairSuccessDeviceLid: h.value,
                pairSuccessDeviceBeta: y.value,
                pairSuccessPlatformName: C.value,
              },
              b.value,
              {
                pairSuccessBiz: c.value,
                pairSuccessClientProps: d.value,
                pairSuccessEncryptionMetadata: m.value,
              },
            ),
          )
        : b;
    }
    ((l.parseSetRegRequestPairSuccessBiz = e),
      (l.parseSetRegRequestPairSuccessClientProps = s),
      (l.parseSetRegRequestPairSuccessEncryptionMetadata = u),
      (l.parseSetRegRequest = c));
  },
  98,
);
