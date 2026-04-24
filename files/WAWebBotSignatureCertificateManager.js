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
    function C(e, t, n) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield o("WAWebCertificateUtils").parseCertificateChain(e);
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
            var d = yield v(u, c);
            if (!d) throw new y("Signature verification failed at pos " + s);
          }
          var m = T(a);
          if (m == null) throw new h("Failed to extract leaf public key");
          return m;
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n,
              a = (n = e.signatureAlgorithm) == null ? void 0 : n.algorithmId;
            return a === p
              ? R(e, t)
              : a === _
                ? yield L(e, t)
                : (o("WALogger")
                    .WARN(
                      u ||
                        (u = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " Unrecognized signature algorithm OID: ",
                          ", falling back to pkijs",
                        ])),
                      f,
                      String(a),
                    )
                    .sendLogs("bot-signature-cert-unknown-sig-alg"),
                  yield k(e, t));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  c ||
                    (c = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cert sig verify error",
                    ])),
                  f,
                )
                .catching(e instanceof Error ? e : r("err")(String(e))),
              !1
            );
          }
        })),
        S.apply(this, arguments)
      );
    }
    function R(t, n) {
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
        u = T(n);
      return u == null
        ? (o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " issuer pubkey extract failed for Ed25519",
              ])),
            f,
          ),
          !1)
        : o("WACryptoPrimitives").signDetachedVerify(i, s, u);
    }
    function L(e, t) {
      return E.apply(this, arguments);
    }
    function E() {
      return (
        (E = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield e.verify(t);
            return n;
          } catch (n) {
            return (
              o("WALogger")
                .WARN(
                  d ||
                    (d = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cert.verify() failed, fallback to engine",
                    ])),
                  f,
                )
                .catching(n instanceof Error ? n : r("err")(String(n))),
              k(e, t)
            );
          }
        })),
        E.apply(this, arguments)
      );
    }
    function k(e, t) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
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
                  m ||
                    (m = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " pkijs verification failed",
                    ])),
                  f,
                )
                .catching(e instanceof Error ? e : r("err")(String(e))),
              !1
            );
          }
        })),
        I.apply(this, arguments)
      );
    }
    function T(e) {
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
        return i === p ? u : u[0] === 4 ? u.slice(1) : u;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
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
      (l.extractRawPublicKey = T));
  },
  98,
);
