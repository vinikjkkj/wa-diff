__d(
  "WAWebBotSignatureCertificateManager",
  [
    "WACryptoPrimitives",
    "WALogger",
    "WAWebBotCertificateCachingSystem",
    "WAWebBotCertificateRevocationService",
    "WAWebBotSignatureRootCertificate",
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
      })(babelHelpers.wrapNativeSuper(Error)),
      C = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = "Certificate revoked"),
            (n = e.call(this, t) || this),
            (n.name = "CertRevokedError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      b = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = "CRL unavailable"),
            (n = e.call(this, t) || this),
            (n.name = "CrlUnavailableError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error)),
      v = (function (e) {
        function t(t) {
          var n;
          return (
            t === void 0 && (t = "CRL stale"),
            (n = e.call(this, t) || this),
            (n.name = "CrlStaleError"),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    async function S(e, t, n) {
      var r = n != null ? n : new Date(),
        a = r.getTime(),
        i = o("WAWebBotSignatureRootCertificate").getRootCertificateVersion(),
        l = await o("WAWebBotCertificateCachingSystem").getCachedLeafPublicKey({
          chainBytes: e,
          rootCertVersion: i,
          atTimeMs: a,
        });
      if (l != null) return l;
      var s = await o("WAWebCertificateUtils").parseCertificateChain(e);
      if (s.length === 0) throw new h("Certificate chain is empty");
      var u = s[0];
      if (!o("WAWebCertificateUtils").isCertificateValidAtTime(u, r))
        throw new g("Leaf cert expired at serverTime");
      for (
        var c = [].concat(s, [t]),
          d = async function () {
            var e = c[m],
              t = c[m + 1];
            if (!o("WAWebCertificateUtils").isCertificateValidAtTime(t, r))
              throw new g("Issuer cert at pos " + (m + 1) + " expired");
            var n = await R(e, t);
            if (!n) throw new y("Signature verification failed at pos " + m);
            var i = o("WAWebCertificateUtils").getCertificateSerialNumber(e);
            if (i == null)
              throw new h("Failed to extract serial number at pos " + m);
            var l = o(
              "WAWebBotCertificateRevocationService",
            ).checkCertificateRevocationStatus(i, a);
            if (l !== "valid") {
              var s =
                l === "revoked"
                  ? new C("Certificate at pos " + m + " is revoked")
                  : l === "crl_unavailable"
                    ? new b(
                        "CRL unavailable, treating cert at pos " +
                          m +
                          " as revoked",
                      )
                    : l === "crl_stale"
                      ? new v(
                          "CRL stale, treating cert at pos " +
                            m +
                            " as revoked",
                        )
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              l,
                          );
                        })();
              throw s;
            }
          },
          m = 0;
        m < c.length - 1;
        m++
      )
        await d();
      var p = I(u);
      if (p == null) throw new h("Failed to extract leaf public key");
      return (
        await o("WAWebBotCertificateCachingSystem").cacheLeafPublicKey({
          chainBytes: e,
          rootCertVersion: i,
          publicKey: p,
          certificates: s,
        }),
        p
      );
    }
    async function R(t, n) {
      try {
        var a,
          i = (a = t.signatureAlgorithm) == null ? void 0 : a.algorithmId;
        return i === p
          ? L(t, n)
          : i === _
            ? await E(t, n)
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
              await k(t, n));
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
    function L(e, t) {
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
        s = I(t);
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
    async function E(e, t) {
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
          k(e, t)
        );
      }
    }
    async function k(e, t) {
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
    function I(e) {
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
      (l.CertRevokedError = C),
      (l.CrlUnavailableError = b),
      (l.CrlStaleError = v),
      (l.getValidatedLeafPublicKey = S),
      (l.extractRawPublicKey = I));
  },
  98,
);
