__d(
  "WAWebBotSignatureCertificateManager",
  [
    "JSResourceForInteraction",
    "Promise",
    "WACryptoPrimitives",
    "WALogger",
    "asyncToGeneratorRuntime",
    "err",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c,
      d,
      m,
      p,
      _,
      f,
      g,
      h,
      y,
      C,
      b,
      v,
      S = r("requireDeferred")("asn1js-2.1.1").__setRef(
        "WAWebBotSignatureCertificateManager",
      ),
      R = "1.3.101.112",
      L = "1.2.840.10045.4.3.2",
      E = "[bot-signature-cert]",
      k = function (t) {
        return {
          leafPublicKey: t,
          isExpired: !1,
          isInvalid: !1,
          isChainValidationFailed: !1,
        };
      };
    function I() {
      return r("JSResourceForInteraction")("pkijs")
        .__setRef("WAWebBotSignatureCertificateManager")
        .load();
    }
    function T() {
      return new (v || (v = n("Promise")))(function (e) {
        S.onReady(function (t) {
          e(t().fromBER);
        });
      });
    }
    function D(e) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = yield I(),
            n = t.Certificate,
            r = yield T(),
            a = [];
          for (var i of e) {
            var l = r(i.buffer),
              s = l.result;
            if (s.error)
              return (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Failed to parse certificate DER",
                      ])),
                    E,
                  )
                  .sendLogs("bot-signature-cert-parse-error"),
                []
              );
            a.push(new n({ schema: s }));
          }
          return a;
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t, n) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a = yield D(e);
            if (a.length === 0)
              return (
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Certificate chain is empty",
                      ])),
                    E,
                  )
                  .sendLogs("bot-signature-cert-chain-empty"),
                {
                  leafPublicKey: null,
                  isExpired: !1,
                  isInvalid: !0,
                  isChainValidationFailed: !1,
                }
              );
            var i = a[0],
              l = n != null ? n : new Date();
            if (!N(i, l))
              return (
                o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " leaf cert invalid at serverTime",
                      ])),
                    E,
                  )
                  .sendLogs("bot-signature-leaf-cert-expired"),
                {
                  leafPublicKey: null,
                  isExpired: !0,
                  isInvalid: !1,
                  isChainValidationFailed: !1,
                }
              );
            for (var s = [].concat(a, [t]), u = 0; u < s.length - 1; u++) {
              var c = s[u],
                h = s[u + 1];
              if (!N(h, l))
                return (
                  o("WALogger")
                    .WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " issuer cert invalid at serverTime",
                        ])),
                      E,
                    )
                    .sendLogs("bot-signature-issuer-cert-expired"),
                  {
                    leafPublicKey: null,
                    isExpired: !0,
                    isInvalid: !1,
                    isChainValidationFailed: !1,
                  }
                );
              var y = yield M(c, h);
              if (!y)
                return (
                  o("WALogger")
                    .WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " cert sig verify failed at pos ",
                          "",
                        ])),
                      E,
                      u,
                    )
                    .sendLogs("bot-signature-cert-chain-verify-failed"),
                  {
                    leafPublicKey: null,
                    isExpired: !1,
                    isInvalid: !1,
                    isChainValidationFailed: !0,
                  }
                );
            }
            var C = q(i);
            return C == null
              ? (o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Failed to extract leaf public key",
                      ])),
                    E,
                  )
                  .sendLogs("bot-signature-leaf-key-extract-failed"),
                {
                  leafPublicKey: null,
                  isExpired: !1,
                  isInvalid: !0,
                  isChainValidationFailed: !1,
                })
              : k(C);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " Certificate chain verification failed",
                    ])),
                  E,
                )
                .catching(e instanceof Error ? e : r("err")(String(e)))
                .sendLogs("bot-signature-cert-chain-error"),
              {
                leafPublicKey: null,
                isExpired: !1,
                isInvalid: !0,
                isChainValidationFailed: !1,
              }
            );
          }
        })),
        P.apply(this, arguments)
      );
    }
    function N(t, n) {
      try {
        var r,
          a,
          i = new Date(
            (r = (a = t.notBefore) == null ? void 0 : a.value) != null
              ? r
              : t.notBefore,
          ),
          l = new Date(t.notAfter.value);
        return n >= i && n <= l;
      } catch (t) {
        return (
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " Failed to check certificate validity",
              ])),
            E,
          ),
          !1
        );
      }
    }
    function M(e, t) {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n,
              a = (n = e.signatureAlgorithm) == null ? void 0 : n.algorithmId;
            return a === R
              ? A(e, t)
              : a === L
                ? yield F(e, t)
                : (o("WALogger")
                    .WARN(
                      h ||
                        (h = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " Unrecognized signature algorithm OID: ",
                          ", falling back to pkijs",
                        ])),
                      E,
                      String(a),
                    )
                    .sendLogs("bot-signature-cert-unknown-sig-alg"),
                  yield B(e, t));
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cert sig verify error",
                    ])),
                  E,
                )
                .catching(e instanceof Error ? e : r("err")(String(e))),
              !1
            );
          }
        })),
        w.apply(this, arguments)
      );
    }
    function A(e, t) {
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
        u = q(t);
      return u == null
        ? (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " issuer pubkey extract failed for Ed25519",
              ])),
            E,
          ),
          !1)
        : o("WACryptoPrimitives").signDetachedVerify(a, l, u);
    }
    function F(e, t) {
      return O.apply(this, arguments);
    }
    function O() {
      return (
        (O = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield e.verify(t);
            return n;
          } catch (n) {
            return (
              o("WALogger")
                .WARN(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cert.verify() failed, fallback to engine",
                    ])),
                  E,
                )
                .catching(n instanceof Error ? n : r("err")(String(n))),
              B(e, t)
            );
          }
        })),
        O.apply(this, arguments)
      );
    }
    function B(e, t) {
      return W.apply(this, arguments);
    }
    function W() {
      return (
        (W = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield I(),
              a = n.CertificateChainValidationEngine,
              i = new a({ trustedCerts: [t], certs: [e] }),
              l = yield i.verify();
            return l.result;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  b ||
                    (b = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " pkijs verification failed",
                    ])),
                  E,
                )
                .catching(e instanceof Error ? e : r("err")(String(e))),
              !1
            );
          }
        })),
        W.apply(this, arguments)
      );
    }
    function q(e) {
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
        return i === R ? s : s[0] === 4 ? s.slice(1) : s;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " Failed to extract raw public key",
                ])),
              E,
            )
            .catching(e instanceof Error ? e : r("err")(String(e))),
          null
        );
      }
    }
    ((l.parseCertificateChain = D),
      (l.verifyCertificateChainAndGetLeafPublicKey = $),
      (l.extractRawPublicKey = q));
  },
  98,
);
