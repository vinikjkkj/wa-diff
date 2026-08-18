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
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(
        e,
        "companion_recovery_server_token",
      );
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentString(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function d(t) {
      var n = o("WASmaxParseUtils").assertTag(t, "iq");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(t, "pair-success");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "jurisdiction",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(
        r.value,
        "device-identity",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "device");
      if (!l.success) return l;
      var d = o("WASmaxParseUtils").flattenedChildWithTag(r.value, "platform");
      if (!d.success) return d;
      var m = o("WASmaxParseUtils").optionalChildWithTag(r.value, "biz", e);
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "client-props",
        s,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "encryption-metadata",
        u,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optionalChildWithTag(
        r.value,
        "companion_recovery_server_token",
        c,
      );
      if (!f.success) return f;
      var g = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        t,
        "from",
        "s.whatsapp.net",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        t,
        "xmlns",
        "md",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").attrString(a.value, "iso");
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").attrString(a.value, "cc");
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").contentBytesRange(i.value, 1, 500);
      if (!b.success) return b;
      var v = o("WASmaxParseJid").attrDeviceJid(l.value, "jid");
      if (!v.success) return v;
      var S = o("WASmaxParseJid").attrDeviceJid(l.value, "lid");
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        l.value,
        "beta",
        o("WASmaxInMdEnums").ENUM_FALSE_TRUE,
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").attrString(d.value, "name");
      if (!L.success) return L;
      var E = o("WASmaxInMdBaseIQSetRequestMixin").parseBaseIQSetRequestMixin(
        t,
      );
      return E.success
        ? o("WAResultOrError").makeResult(
            babelHelpers.extends(
              {
                from: g.value,
                xmlns: h.value,
                pairSuccessJurisdictionIso: y.value,
                pairSuccessJurisdictionCc: C.value,
                pairSuccessDeviceIdentityElementValue: b.value,
                pairSuccessDeviceJid: v.value,
                pairSuccessDeviceLid: S.value,
                pairSuccessDeviceBeta: R.value,
                pairSuccessPlatformName: L.value,
              },
              E.value,
              {
                pairSuccessBiz: m.value,
                pairSuccessClientProps: p.value,
                pairSuccessEncryptionMetadata: _.value,
                pairSuccessCompanionRecoveryServerToken: f.value,
              },
            ),
          )
        : E;
    }
    ((l.parseSetRegRequestPairSuccessBiz = e),
      (l.parseSetRegRequestPairSuccessClientProps = s),
      (l.parseSetRegRequestPairSuccessEncryptionMetadata = u),
      (l.parseSetRegRequestPairSuccessCompanionRecoveryServerToken = c),
      (l.parseSetRegRequest = d));
  },
  98,
);
