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
      v = r("requireDeferred")("asn1js-2.1.1").__setRef(
        "WAWebBotSignatureCertificateManager",
      ),
      S = "1.3.101.112",
      R = "1.2.840.10045.4.3.2",
      L = "[bot-signature-cert]",
      E = function (t) {
        return {
          leafPublicKey: t,
          isExpired: !1,
          isInvalid: !1,
          isChainValidationFailed: !1,
        };
      };
    function k() {
      return r("JSResourceForInteraction")("pkijs")
        .__setRef("WAWebBotSignatureCertificateManager")
        .load();
    }
    function I() {
      return new (b || (b = n("Promise")))(function (e) {
        v.onReady(function (t) {
          e(t().fromBER);
        });
      });
    }
    function T(e) {
      return D.apply(this, arguments);
    }
    function D() {
      return (
        (D = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          if (e.length === 0) return [];
          var t = yield k(),
            n = t.Certificate,
            r = yield I(),
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
                    L,
                  )
                  .sendLogs("bot-signature-cert-parse-error"),
                []
              );
            a.push(new n({ schema: s }));
          }
          return a;
        })),
        D.apply(this, arguments)
      );
    }
    function x(e, t, n) {
      return $.apply(this, arguments);
    }
    function $() {
      return (
        ($ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          try {
            var a = yield T(e);
            if (a.length === 0)
              return (
                o("WALogger")
                  .WARN(
                    d ||
                      (d = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Certificate chain is empty",
                      ])),
                    L,
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
            if (!P(i, l))
              return (
                o("WALogger")
                  .WARN(
                    m ||
                      (m = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Leaf certificate not valid at server time",
                      ])),
                    L,
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
              if (!P(h, l))
                return (
                  o("WALogger")
                    .WARN(
                      p ||
                        (p = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " Issuer certificate not valid at server time",
                        ])),
                      L,
                    )
                    .sendLogs("bot-signature-issuer-cert-expired"),
                  {
                    leafPublicKey: null,
                    isExpired: !0,
                    isInvalid: !1,
                    isChainValidationFailed: !1,
                  }
                );
              var y = yield N(c, h);
              if (!y)
                return (
                  o("WALogger")
                    .WARN(
                      _ ||
                        (_ = babelHelpers.taggedTemplateLiteralLoose([
                          "",
                          " Certificate signature verification failed at position ",
                          "",
                        ])),
                      L,
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
            var C = W(i);
            return C == null
              ? (o("WALogger")
                  .WARN(
                    f ||
                      (f = babelHelpers.taggedTemplateLiteralLoose([
                        "",
                        " Failed to extract leaf public key",
                      ])),
                    L,
                  )
                  .sendLogs("bot-signature-leaf-key-extract-failed"),
                {
                  leafPublicKey: null,
                  isExpired: !1,
                  isInvalid: !0,
                  isChainValidationFailed: !1,
                })
              : E(C);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  g ||
                    (g = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " Certificate chain verification failed",
                    ])),
                  L,
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
        $.apply(this, arguments)
      );
    }
    function P(t, n) {
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
            L,
          ),
          !1
        );
      }
    }
    function N(e, t) {
      return M.apply(this, arguments);
    }
    function M() {
      return (
        (M = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n,
              a = (n = e.signatureAlgorithm) == null ? void 0 : n.algorithmId;
            return a === S ? w(e, t) : a === R ? yield A(e, t) : yield O(e, t);
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  h ||
                    (h = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " Certificate signature verification error",
                    ])),
                  L,
                )
                .catching(e instanceof Error ? e : r("err")(String(e))),
              !1
            );
          }
        })),
        M.apply(this, arguments)
      );
    }
    function w(e, t) {
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
        u = W(t);
      return u == null
        ? (o("WALogger").WARN(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "",
                " Failed to extract issuer public key for Ed25519 verification",
              ])),
            L,
          ),
          !1)
        : o("WACryptoPrimitives").signDetachedVerify(a, l, u);
    }
    function A(e, t) {
      return F.apply(this, arguments);
    }
    function F() {
      return (
        (F = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield e.verify(t);
            return n;
          } catch (n) {
            return (
              o("WALogger")
                .WARN(
                  y ||
                    (y = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " cert.verify() failed, falling back to chain engine",
                    ])),
                  L,
                )
                .catching(n instanceof Error ? n : r("err")(String(n))),
              O(e, t)
            );
          }
        })),
        F.apply(this, arguments)
      );
    }
    function O(e, t) {
      return B.apply(this, arguments);
    }
    function B() {
      return (
        (B = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          try {
            var n = yield k(),
              a = n.CertificateChainValidationEngine,
              i = new a({ trustedCerts: [t], certs: [e] }),
              l = yield i.verify();
            return l.result;
          } catch (e) {
            return (
              o("WALogger")
                .ERROR(
                  C ||
                    (C = babelHelpers.taggedTemplateLiteralLoose([
                      "",
                      " pkijs verification failed",
                    ])),
                  L,
                )
                .catching(e instanceof Error ? e : r("err")(String(e))),
              !1
            );
          }
        })),
        B.apply(this, arguments)
      );
    }
    function W(e) {
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
        return i === S ? s : s[0] === 4 ? s.slice(1) : s;
      } catch (e) {
        return (
          o("WALogger")
            .WARN(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "",
                  " Failed to extract raw public key",
                ])),
              L,
            )
            .catching(e instanceof Error ? e : r("err")(String(e))),
          null
        );
      }
    }
    ((l.parseCertificateChain = T),
      (l.verifyCertificateChainAndGetLeafPublicKey = x),
      (l.extractRawPublicKey = W));
  },
  98,
);
