__d(
  "WAWebBotSignatureCertificateManager",
  [
    "WACryptoPrimitives",
    "WALogger",
    "WAWebCertificateUtils",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _ = "1.3.101.112",
      f = "1.2.840.10045.4.3.2",
      g = "[bot-signature-cert]",
      h = (function (e) {
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
      y = (function (e) {
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
      C = (function (e) {
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
    function b(e) {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = yield o("WAWebCertificateUtils").getPkiJs(),
            n = t.Certificate,
            r = yield o("WAWebCertificateUtils").getAsn1FromBER(),
            a = [];
          for (var i of e) {
            var l = r(i.buffer),
              s = l.result;
            if (s.error != null && s.error !== "")
              return (
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Failed to parse certificate DER",
                      ])),
                    g,
                  )
                  .sendLogs("bot-signature-cert-parse-error"),
                []
              );
            a.push(new n({ schema: s }));
          }
          return a;
        })),
        v.apply(this, arguments)
      );
    }
    function S(e, t, n) {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield b(e);
          if (r.length === 0) throw new y("Certificate chain is empty");
          var a = r[0],
            i = n != null ? n : new Date();
          if (!o("WAWebCertificateUtils").isCertificateValidAtTime(a, i))
            throw new h("Leaf cert expired at serverTime");
          for (var l = [].concat(r, [t]), s = 0; s < l.length - 1; s++) {
            var u = l[s],
              c = l[s + 1];
            if (!o("WAWebCertificateUtils").isCertificateValidAtTime(c, i))
              throw new h("Issuer cert at pos " + (s + 1) + " expired");
            var d = yield L(u, c);
            if (!d) throw new C("Signature verification failed at pos " + s);
          }
          var m = $(a);
          if (m == null) throw new y("Failed to extract leaf public key");
          return m;
        })),
        R.apply(this, arguments)
      );
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n,
              a = (n = e.signatureAlgorithm) == null ? void 0 : n.algorithmId;
            return a === _
              ? k(e, t)
              : a === f
                ? yield I(e, t)
                : (o("WALogger")
                    .WARN(
                      c ||
                        (c = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " Unrecognized signature algorithm OID: ",
                          ", falling back to pkijs",
                        ])),
                      g,
                      String(a),
                    )
                    .sendLogs("bot-signature-cert-unknown-sig-alg"),
                  yield D(e, t));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cert sig verify error",
                    ])),
                  g,
                )
                .catching(e instanceof Error ? e : r("err")(String(e))),
              !1
            );
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(t, n) {
      var r,
        a,
        i = new Uint8Array(t.tbs),
        l = t.signatureValue,
        s = new Uint8Array(
          (r = l == null || (a = l.valueBlock) == null ? void 0 : a.valueHex) !=
            null
            ? r
            : l,
        ),
        u = $(n);
      return u == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " issuer pubkey extract failed for Ed25519",
              ])),
            g,
          ),
          !1)
        : o("WACryptoPrimitives").signDetachedVerify(i, s, u);
    }
    function I(e, t) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield e.verify(t);
            return n;
          } catch (n) {
            return (
              o("WALogger")
                .WARN(
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cert.verify() failed, fallback to engine",
                    ])),
                  g,
                )
                .catching(n instanceof Error ? n : r("err")(String(n))),
              D(e, t)
            );
          }
        })),
        T.apply(this, arguments)
      );
    }
    function D(e, t) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield o("WAWebCertificateUtils").getPkiJs(),
              a = n.CertificateChainValidationEngine,
              i = new a({ trustedCerts: [t], certs: [e] }),
              l = yield i.verify();
            return l.result;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  p ||
                    (p = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " pkijs verification failed",
                    ])),
                  g,
                )
                .catching(e instanceof Error ? e : r("err")(String(e))),
              !1
            );
          }
        })),
        x.apply(this, arguments)
      );
    }
    function $(e) {
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
        var u = new Uint8Array(l);
        return i === _ ? u : u[0] === 4 ? u.slice(1) : u;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " Failed to extract raw public key",
                ])),
              g,
            )
            .catching(e instanceof Error ? e : r("err")(String(e))),
          null
        );
      }
    }
    ((l.CertExpiredError = h),
      (l.CertInvalidError = y),
      (l.CertChainValidationError = C),
      (l.parseCertificateChain = b),
      (l.getValidatedLeafPublicKey = S),
      (l.extractRawPublicKey = $));
  },
  98,
);
