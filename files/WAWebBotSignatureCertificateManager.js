__d(
  "WAWebBotSignatureCertificateManager",
  [
    "WACryptoPrimitives",
    "WALogger",
    "WAWebBotCertificateRevocationService",
    "WAWebCertificateUtils",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p = "1.3.101.112",
      _ = "1.2.840.10045.4.3.2",
      f = "[bot-signature-cert]",
      g = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = "Certificate expired"),
            (n = e.call(this, t) || this),
            (n.name = "CertExpiredError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      h = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = "Certificate invalid"),
            (n = e.call(this, t) || this),
            (n.name = "CertInvalidError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      y = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = "Chain validation failed"),
            (n = e.call(this, t) || this),
            (n.name = "CertChainValidationError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    async function C(e, t, n) {
      var r = await o("WAWebCertificateUtils").parseCertificateChain(e);
      if (r.length === 0) throw new h("Certificate chain is empty");
      var a = r[0],
        i = n != null ? n : new Date();
      if (!o("WAWebCertificateUtils").isCertificateValidAtTime(a, i))
        throw new g("Leaf cert expired at serverTime");
      for (var l = [].concat(r, [t]), s = 0; s < l.length - 1; s++) {
        var u = l[s],
          c = l[s + 1];
        if (!o("WAWebCertificateUtils").isCertificateValidAtTime(c, i))
          throw new g("Issuer cert at pos " + (s + 1) + " expired");
        var d = await b(u, c);
        if (!d) throw new y("Signature verification failed at pos " + s);
        var m = o("WAWebCertificateUtils").getCertificateSerialNumber(u);
        if (m == null)
          throw new h("Failed to extract serial number at pos " + s);
        if (
          o("WAWebBotCertificateRevocationService").isCertificateRevoked(
            m,
            i.getTime(),
          )
        )
          throw new y("Certificate at pos " + s + " is revoked");
      }
      var p = L(a);
      if (p == null) throw new h("Failed to extract leaf public key");
      return p;
    }
    async function b(t, n) {
      try {
        var a,
          i = (a = t.signatureAlgorithm) == null ? void 0 : a.algorithmId;
        return i === p
          ? v(t, n)
          : i === _
            ? await S(t, n)
            : (o("WALogger")
                .WARN(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " unknown sig alg OID: ",
                      ", pkijs fallback",
                    ])),
                  f,
                  String(i),
                )
                .sendLogs("bot-signature-cert-unknown-sig-alg"),
              await R(t, n));
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " cert sig verify error",
                ])),
              f,
            )
            .catching(e instanceof Error ? e : r("err")(String(e))),
          !1
        );
      }
    }
    function v(e, t) {
      var n,
        r,
        a = new Uint8Array(e.tbs),
        i = e.signatureValue,
        l = new Uint8Array(
          (n = i == null || (r = i.valueBlock) == null ? void 0 : r.valueHex) !=
            null
            ? n
            : i,
        ),
        s = L(t);
      return s == null
        ? (o("WALogger").WARN(
            u ||
              (u = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " issuer pubkey extract failed for Ed25519",
              ])),
            f,
          ),
          !1)
        : o("WACryptoPrimitives").signDetachedVerify(a, l, s);
    }
    async function S(e, t) {
      try {
        var n = await e.verify(t);
        return n;
      } catch (n) {
        return (
          o("WALogger")
            .WARN(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " cert.verify() failed, fallback to engine",
                ])),
              f,
            )
            .catching(n instanceof Error ? n : r("err")(String(n))),
          R(e, t)
        );
      }
    }
    async function R(e, t) {
      try {
        var n = await o("WAWebCertificateUtils").getPkiJs(),
          a = n.CertificateChainValidationEngine,
          i = new a({ trustedCerts: [t], certs: [e] }),
          l = await i.verify();
        return l.result;
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              d ||
                (d = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " pkijs verification failed",
                ])),
              f,
            )
            .catching(e instanceof Error ? e : r("err")(String(e))),
          !1
        );
      }
    }
    function L(e) {
      try {
        var t,
          n,
          a = e.subjectPublicKeyInfo;
        if (a == null) return null;
        var i = (t = a.algorithm) == null ? void 0 : t.algorithmId,
          l =
            (n = a.subjectPublicKey) == null || (n = n.valueBlock) == null
              ? void 0
              : n.valueHex;
        if (l == null) return null;
        var s = new Uint8Array(l);
        return i === p ? s : s[0] === 4 ? s.slice(1) : s;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              m ||
                (m = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " Failed to extract raw public key",
                ])),
              f,
            )
            .catching(e instanceof Error ? e : r("err")(String(e))),
          null
        );
      }
    }
    ((l.CertExpiredError = g),
      (l.CertInvalidError = h),
      (l.CertChainValidationError = y),
      (l.getValidatedLeafPublicKey = C),
      (l.extractRawPublicKey = L));
  },
  98,
);
