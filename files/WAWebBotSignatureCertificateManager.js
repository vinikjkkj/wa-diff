__d(
  "WAWebBotSignatureCertificateManager",
  [
    "WACryptoPrimitives",
    "WALogger",
    "WAWebBotCertificateCachingSystem",
    "WAWebBotCertificateRevocationService",
    "WAWebBotSignatureRootCertificate",
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
          var r = n != null ? n : new Date(),
            a = r.getTime(),
            i = o(
              "WAWebBotSignatureRootCertificate",
            ).getRootCertificateVersion(),
            l = yield o(
              "WAWebBotCertificateCachingSystem",
            ).getCachedLeafPublicKey({
              chainBytes: e,
              rootCertVersion: i,
              atTimeMs: a,
            });
          if (l != null) return l;
          var s = yield o("WAWebCertificateUtils").parseCertificateChain(e);
          if (s.length === 0) throw new h("Certificate chain is empty");
          var u = s[0];
          if (!o("WAWebCertificateUtils").isCertificateValidAtTime(u, r))
            throw new g("Leaf cert expired at serverTime");
          for (var c = [].concat(s, [t]), d = 0; d < c.length - 1; d++) {
            var m = c[d],
              p = c[d + 1];
            if (!o("WAWebCertificateUtils").isCertificateValidAtTime(p, r))
              throw new g("Issuer cert at pos " + (d + 1) + " expired");
            var _ = yield v(m, p);
            if (!_) throw new y("Signature verification failed at pos " + d);
            var f = o("WAWebCertificateUtils").getCertificateSerialNumber(m);
            if (f == null)
              throw new h("Failed to extract serial number at pos " + d);
            if (
              o("WAWebBotCertificateRevocationService").isCertificateRevoked(
                f,
                a,
              )
            )
              throw new y("Certificate at pos " + d + " is revoked");
          }
          var C = T(u);
          if (C == null) throw new h("Failed to extract leaf public key");
          return (
            yield o("WAWebBotCertificateCachingSystem").cacheLeafPublicKey({
              chainBytes: e,
              rootCertVersion: i,
              publicKey: C,
              certificates: s,
            }),
            C
          );
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
                          " unknown sig alg OID: ",
                          ", pkijs fallback",
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
