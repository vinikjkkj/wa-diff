__d(
  "WASmaxMdSetRegRPC",
  [
    "WAResultOrError",
    "WASmaxAttrs",
    "WASmaxChildren",
    "WASmaxInMdBaseIQSetRequestMixin",
    "WASmaxInMdEnums",
    "WASmaxJsx",
    "WASmaxMixins",
    "WASmaxParseJid",
    "WASmaxParseReference",
    "WASmaxParseUtils",
    "WASmaxParsingFailure",
    "WASmaxRpcUtils",
    "WAWap",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = m(e);
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(
          o("WASmaxRpcUtils").errorMessageRpcParsing("SetReg", { Request: t }),
        );
      return {
        parsedRequest: t.value,
        makeSetRegResponseClientResponse: function (n) {
          return p(n, e);
        },
        makeSetRegResponseHostedClientResponse: function (n) {
          return f(n, e);
        },
        makeSetRegResponseError: function () {
          return _(e);
        },
      };
    }
    function s(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "biz");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").attrString(e, "name");
      return n.success ? o("WAResultOrError").makeResult({ name: n.value }) : n;
    }
    function u(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "client-props");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").contentBytes(e);
      return n.success
        ? o("WAResultOrError").makeResult({ elementValue: n.value })
        : n;
    }
    function c(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "encryption-metadata");
      if (!t.success) return t;
      var n = g(e);
      return (n.success, n);
    }
    function d(e) {
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
    function m(e) {
      var t = o("WASmaxParseUtils").assertTag(e, "iq");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "pair-success");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "jurisdiction",
      );
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(
        n.value,
        "device-identity",
      );
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "device");
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").flattenedChildWithTag(n.value, "platform");
      if (!l.success) return l;
      var m = o("WASmaxParseUtils").optionalChildWithTag(n.value, "biz", s);
      if (!m.success) return m;
      var p = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "client-props",
        u,
      );
      if (!p.success) return p;
      var _ = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "encryption-metadata",
        c,
      );
      if (!_.success) return _;
      var f = o("WASmaxParseUtils").optionalChildWithTag(
        n.value,
        "companion_recovery_server_token",
        d,
      );
      if (!f.success) return f;
      var g = o("WASmaxParseJid").literalJid(
        o("WASmaxParseJid").attrDomainJid,
        e,
        "from",
        "s.whatsapp.net",
      );
      if (!g.success) return g;
      var h = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "xmlns",
        "md",
      );
      if (!h.success) return h;
      var y = o("WASmaxParseUtils").attrString(r.value, "iso");
      if (!y.success) return y;
      var C = o("WASmaxParseUtils").attrString(r.value, "cc");
      if (!C.success) return C;
      var b = o("WASmaxParseUtils").contentBytesRange(a.value, 1, 500);
      if (!b.success) return b;
      var v = o("WASmaxParseUtils").optional(
        o("WASmaxParseJid").attrDeviceJid,
        i.value,
        "jid",
      );
      if (!v.success) return v;
      var S = o("WASmaxParseJid").attrDeviceJid(i.value, "lid");
      if (!S.success) return S;
      var R = o("WASmaxParseUtils").optional(
        o("WASmaxParseUtils").attrStringEnum,
        i.value,
        "beta",
        o("WASmaxInMdEnums").ENUM_FALSE_TRUE,
      );
      if (!R.success) return R;
      var L = o("WASmaxParseUtils").attrString(l.value, "name");
      if (!L.success) return L;
      var E = o("WASmaxInMdBaseIQSetRequestMixin").parseBaseIQSetRequestMixin(
        e,
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
    function p(e, t) {
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        t,
        ["id"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = E(
        o("WASmaxJsx").smax("iq", {
          id: o("WAWap").STANZA_ID(n.value),
          to: o("WAWap").S_WHATSAPP_NET,
          type: "result",
        }),
        e,
      );
      return r;
    }
    function _(e) {
      var t = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        e,
        ["id"],
      );
      if (!t.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(t.error);
      var n = o("WASmaxJsx").smax(
        "iq",
        {
          id: o("WAWap").STANZA_ID(t.value),
          to: o("WAWap").S_WHATSAPP_NET,
          type: "error",
        },
        b(o("WASmaxJsx").smax("error", null)),
      );
      return n;
    }
    function f(e, t) {
      var n = o("WASmaxParseReference").attrFromReference(
        o("WASmaxParseUtils").attrStanzaId,
        t,
        ["id"],
      );
      if (!n.success)
        throw new (o("WASmaxParsingFailure").SmaxParsingFailure)(n.error);
      var r = y(
        o("WASmaxJsx").smax("iq", {
          id: o("WAWap").STANZA_ID(n.value),
          to: o("WAWap").S_WHATSAPP_NET,
          type: "result",
        }),
        e,
      );
      return r;
    }
    function g(e) {
      var t = o("WASmaxParseUtils").flattenedChildWithTag(e, "encrypted_key");
      if (!t.success) return t;
      var n = o("WASmaxParseUtils").flattenedChildWithTag(e, "nonce");
      if (!n.success) return n;
      var r = o("WASmaxParseUtils").flattenedChildWithTag(e, "encrypted_data");
      if (!r.success) return r;
      var a = o("WASmaxParseUtils").flattenedChildWithTag(e, "auth_tag");
      if (!a.success) return a;
      var i = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "version",
        "1",
      );
      if (!i.success) return i;
      var l = o("WASmaxParseUtils").literal(
        o("WASmaxParseUtils").attrString,
        e,
        "algorithm",
        "aes-256-gcm",
      );
      if (!l.success) return l;
      var s = o("WASmaxParseUtils").contentBytesRange(t.value, 1, 2048);
      if (!s.success) return s;
      var u = o("WASmaxParseUtils").contentBytesRange(n.value, 1, 128);
      if (!u.success) return u;
      var c = o("WASmaxParseUtils").contentBytesRange(r.value, 1, 8192);
      if (!c.success) return c;
      var d = o("WASmaxParseUtils").contentBytesRange(a.value, 1, 128);
      return d.success
        ? o("WAResultOrError").makeResult({
            version: i.value,
            algorithm: l.value,
            encryptedKeyElementValue: s.value,
            nonceElementValue: u.value,
            encryptedDataElementValue: c.value,
            authTagElementValue: d.value,
          })
        : d;
    }
    function h(e) {
      var t = e.deviceIdentityElementValue,
        n = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax(
            "hosted-pair-set",
            null,
            o("WASmaxJsx").smax("device-identity", null, t),
          ),
        );
      return n;
    }
    function y(e, t) {
      var n = h(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    function C() {
      var e = o("WASmaxJsx").smax("error", {
        text: "not-authorized",
        code: o("WAWap").INT(401),
      });
      return e;
    }
    function b(e) {
      var t = C();
      return o("WASmaxMixins").mergeStanzas(e, t);
    }
    function v(e) {
      var t = e.keyAttestationKeyId,
        n = e.keyAttestationElementValue,
        r = o("WASmaxJsx").smax(
          "key_attestation",
          { key_id: o("WASmaxAttrs").OPTIONAL(o("WAWap").CUSTOM_STRING, t) },
          n,
        );
      return r;
    }
    function S(e) {
      var t = e.gpiaElementValue,
        n = o("WASmaxJsx").smax("gpia", null, t);
      return n;
    }
    function R(e) {
      var t = e.clientAppIdElementValue,
        n = o("WASmaxJsx").smax("client-app-id", null, t);
      return n;
    }
    function L(e) {
      var t = e.keyAttestationArgs,
        n = e.gpiaArgs,
        r = e.clientAppIdArgs,
        a = e.deviceIdentityKeyIndex,
        i = e.deviceIdentityElementValue,
        l = o("WASmaxJsx").smax(
          "smax$any",
          null,
          o("WASmaxJsx").smax(
            "pair-device-sign",
            null,
            o("WASmaxJsx").smax(
              "device-identity",
              { "key-index": o("WAWap").INT(a) },
              i,
            ),
            o("WASmaxChildren").OPTIONAL_CHILD(v, t),
            o("WASmaxChildren").OPTIONAL_CHILD(S, n),
            o("WASmaxChildren").OPTIONAL_CHILD(R, r),
          ),
        );
      return l;
    }
    function E(e, t) {
      var n = L(t);
      return o("WASmaxMixins").mergeStanzas(e, n);
    }
    ((l.receiveSetRegRPC = e),
      (l.parseSetRegRequestPairSuccessBiz = s),
      (l.parseSetRegRequestPairSuccessClientProps = u),
      (l.parseSetRegRequestPairSuccessEncryptionMetadata = c),
      (l.parseSetRegRequestPairSuccessCompanionRecoveryServerToken = d),
      (l.parseSetRegRequest = m),
      (l.makeSetRegResponseClientResponse = p),
      (l.makeSetRegResponseError = _),
      (l.makeSetRegResponseHostedClientResponse = f),
      (l.parseAESEncryptionMetadataMixin = g),
      (l.mergeHostedCompanionSetRegResponseBundleMixin = y),
      (l.mergeIQErrorNotAuthorizedMixin = b),
      (l.makeRegularCompanionSetRegResponseBundlePairDeviceSignKeyAttestation =
        v),
      (l.makeRegularCompanionSetRegResponseBundlePairDeviceSignGpia = S),
      (l.makeRegularCompanionSetRegResponseBundlePairDeviceSignClientAppId = R),
      (l.mergeRegularCompanionSetRegResponseBundleMixin = E));
  },
  98,
);
