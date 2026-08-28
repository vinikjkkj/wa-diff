__d(
  "FBPayAuthLibraryCommon",
  [
    "FBLogger",
    "FBPayAuthLibraryUtils",
    "FBPayBase64URL",
    "FBPayCryptoUtils",
    "FBPayUPLSessionIDGenerator",
    "Promise",
    "asyncToGeneratorRuntime",
    "first",
    "flattenArray",
    "getErrorSafe",
    "gkx",
    "promiseDone",
    "requireDeferred",
    "uuidv4",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("PlatformTrustTokenUPLLogger").__setRef(
        "FBPayAuthLibraryCommon",
      );
    function u(e, t, n, o) {
      if (e.authFactorType === "PIN")
        return {
          data: {
            app_id: "2805739562851096",
            auth_ticket_type: "PIN",
            caps: t,
            device_id: "12345",
            pin: "$e2ee",
          },
          nonce: n,
          op: "VERIFY_FACTOR",
          ver: 1,
        };
      if (e.authFactorType === "CSC") {
        var a;
        return {
          data: {
            app_id: "2805739562851096",
            auth_ticket_type: "CSC",
            caps: t,
            device_id: "12345",
            csc: "$e2ee",
            cred_id: (a = e.credID) != null ? a : "",
          },
          nonce: n,
          op: "VERIFY_FACTOR",
          ver: 1,
        };
      } else if (e.authFactorType === "SDC") {
        var i;
        return {
          data: {
            app_id: "2805739562851096",
            auth_ticket_type: "SDC",
            caps: t,
            device_id: "12345",
            sdc_code: "$e2ee",
            sdc_type: "SDC",
            cred_id: (i = e.credID) != null ? i : "",
          },
          nonce: n,
          op: "VERIFY_FACTOR",
          ver: 1,
        };
      } else if (e.authFactorType === "PAYPAL_ACCESS_TOKEN") {
        var l;
        return {
          data: {
            app_id: "2805739562851096",
            auth_ticket_type: "PAYPAL_ACCESS_TOKEN",
            caps: t,
            device_id: "12345",
            encrypted_paypal_access_token: o != null ? o : "",
            cred_id: (l = e.credID) != null ? l : "",
          },
          nonce: n,
          op: "VERIFY_FACTOR",
          ver: 1,
        };
      } else {
        if (e.authFactorType === "PAYMENT_DEVICE")
          return {
            data: {
              app_id: "2805739562851096",
              auth_ticket_type: "PAYMENT_DEVICE",
              caps: t,
              device_id: "12346",
              registration_payload: o != null ? o : "",
            },
            nonce: n,
            op: "VERIFY_FACTOR",
            ver: 1,
          };
        throw r("FBLogger")("fbpay")
          .blameToPreviousFrame()
          .mustfixThrow("Not supported auth factor type");
      }
    }
    function c(t, o, a, i) {
      return new (e || (e = n("Promise")))(function (e, n) {
        var l = {
          nonce: t,
          op: "ACCOUNT_LINKING",
          data: { target_account_id: a },
          ver: 1,
        };
        r("promiseDone")(
          p(l, { secretPayload: {}, serverKeyObject: i }, o),
          function (t) {
            var n = t.keyPairs,
              r = t.ptt;
            e(r);
          },
          function (e) {
            n(e);
          },
        );
      });
    }
    function d(t, a, i, l, s, u, c) {
      return (
        l === void 0 && (l = "CHARGE"),
        new (e || (e = n("Promise")))(function (e, n) {
          var d = o("FBPayAuthLibraryUtils").createCheckoutOrP2PAuthPttPayload(
              i,
              a,
              "2805739562851096",
              c,
              u,
            ),
            m = { data: d, nonce: r("uuidv4")(), op: l, ver: 1 },
            p = o("FBPayAuthLibraryUtils").createCheckoutOrP2PSecretPayload(u);
          r("promiseDone")(
            v(
              o("FBPayBase64URL").encode(JSON.stringify(m)),
              { secretPayload: p, serverKeyObject: s },
              t,
            ),
            function (t) {
              e(t);
            },
            function (e) {
              n(e);
            },
          );
        })
      );
    }
    function m(e) {
      var t = o("FBPayBase64URL").encode(JSON.stringify(e)),
        n = { payload: t, signatures: [] };
      return o("FBPayBase64URL").encode(JSON.stringify(n));
    }
    function p(e, t, n, r, o, a) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a, i) {
            i === void 0 && (i = !1);
            var l = n,
              s = null;
            if (l == null) {
              var u = yield C(),
                c = u.keyPair,
                d = u.publicKey;
              ((l = c),
                (s = babelHelpers.extends({}, e, {
                  data: babelHelpers.extends({}, e.data, { public_key: d }),
                })));
            } else s = e;
            var m = yield v(
              o("FBPayBase64URL").encode(JSON.stringify(s)),
              t,
              l,
              r,
              a,
              i,
            );
            return { keyPairs: l, ptt: m };
          },
        )),
        _.apply(this, arguments)
      );
    }
    function f() {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield window.crypto.subtle.generateKey(
            { name: "ECDSA", namedCurve: "P-256" },
            !0,
            ["sign", "verify"],
          );
          return e;
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield window.crypto.subtle.exportKey("spki", e.publicKey);
          return window.btoa(
            o("FBPayAuthLibraryUtils").convertBufferToString(t),
          );
        })),
        y.apply(this, arguments)
      );
    }
    function C(e) {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e != null ? e : yield f(),
            n = yield h(t);
          return { keyPair: t, publicKey: n };
        })),
        b.apply(this, arguments)
      );
    }
    function v(e, t, n, r, o, a) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (t, a, i, l, s, u) {
            if ((u === void 0 && (u = !1), Array.isArray(i))) {
              var c = yield (e || (e = n("Promise"))).all(
                  i
                    .slice(1)
                    .map(
                      o("FBPayAuthLibraryUtils").genKidFingerprintFromKeyPair,
                    ),
                ),
                d = a ? yield R(r("first")(i), a, c, t) : t,
                m = r("flattenArray")(
                  yield e.all(
                    i.map(function (e) {
                      return L(e, d, l, u);
                    }),
                  ),
                );
              return o("FBPayBase64URL").encode(
                JSON.stringify({ payload: d, signatures: m != null ? m : [] }),
              );
            } else {
              var p = a ? yield R(i, a, s, t, u) : t,
                _ = yield L(i, p, l, u);
              return o("FBPayBase64URL").encode(
                JSON.stringify({ payload: p, signatures: _ != null ? _ : [] }),
              );
            }
          },
        )),
        S.apply(this, arguments)
      );
    }
    var R = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, a) {
            a === void 0 && (a = !1);
            var i = t.secretPayload,
              l = t.serverKeyObject,
              s = yield o("FBPayAuthLibraryUtils").getEncryptionKey(e, l, n, a),
              u = s.apu,
              c = s.apv,
              d = s.encryptionKey,
              m = s.ephemeralKeyPair,
              p = yield window.crypto.subtle.exportKey("spki", m.publicKey),
              _ = o("FBPayAuthLibraryUtils").getPEMPublicKey(p),
              f = o("FBPayAuthLibraryUtils").buildJoseHeader(u, c, _),
              g = o("FBPayBase64URL").encode(JSON.stringify(f)) + "." + r,
              h = yield window.crypto.getRandomValues(new Uint8Array(12)),
              y = new TextEncoder().encode(g),
              C = new TextEncoder().encode(JSON.stringify(i)),
              b = yield window.crypto.subtle.importKey(
                "raw",
                d,
                "AES-GCM",
                !0,
                ["encrypt"],
              ),
              v = yield window.crypto.subtle.encrypt(
                { name: "AES-GCM", iv: h, additionalData: y, tagLength: 128 },
                b,
                C,
              ),
              S = new Uint8Array(v).slice(v.byteLength - 16),
              R = new Uint8Array(v).subarray(0, v.byteLength - 16);
            return (
              r +
              "." +
              [
                JSON.stringify(f),
                "",
                o("FBPayAuthLibraryUtils").convertBufferToString(h),
                o("FBPayAuthLibraryUtils").convertBufferToString(R),
                o("FBPayAuthLibraryUtils").convertBufferToString(S),
              ]
                .map(o("FBPayBase64URL").encode)
                .join(".")
            );
          },
        );
        return function (n, r, o, a, i) {
          return e.apply(this, arguments);
        };
      })(),
      L = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, r, a) {
            if (e == null) return null;
            var i = yield o(
                "FBPayAuthLibraryUtils",
              ).genKidFingerprintFromKeyPair(e),
              l = { alg: "ES256", kid: i },
              s = o("FBPayBase64URL").encode(JSON.stringify(l)),
              u = new TextEncoder().encode(s + "." + t),
              c = (function () {
                var t = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* () {
                    var t = yield window.crypto.subtle.sign(
                      { hash: { name: "SHA-256" }, name: "ECDSA" },
                      e.privateKey,
                      u,
                    );
                    return { signature: t, kid: i };
                  },
                );
                return function () {
                  return t.apply(this, arguments);
                };
              })(),
              d = yield E(c, r, t, a),
              m =
                d == null
                  ? void 0
                  : d.map(function (e) {
                      var t = e.kid,
                        n = e.signature;
                      return {
                        signature:
                          typeof n == "string"
                            ? n
                            : o("FBPayBase64URL").encode(
                                o(
                                  "FBPayAuthLibraryUtils",
                                ).convertBufferToString(n),
                              ),
                        header: { alg: "ES256", kid: t },
                      };
                    });
            return m == null
              ? void 0
              : m.map(function (e) {
                  var t = e.header,
                    n = e.signature;
                  return {
                    protected: o("FBPayBase64URL").encode(JSON.stringify(t)),
                    signature: n,
                  };
                });
          },
        );
        return function (n, r, o, a) {
          return e.apply(this, arguments);
        };
      })(),
      E = (function () {
        var e = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            if (!t) {
              var o = yield e();
              return [o];
            }
            var a = yield t(n, e, r);
            return a;
          },
        );
        return function (n, r, o, a) {
          return e.apply(this, arguments);
        };
      })();
    function k(e) {
      return I.apply(this, arguments);
    }
    function I() {
      return (
        (I = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t,
            n = yield f(),
            r = yield h(n),
            a = yield window.crypto.subtle.exportKey("spki", n.publicKey),
            i = e.data,
            l = e.nonce,
            s = e.op,
            u = e.ver,
            c = {
              ver: u,
              op: s,
              nonce: l,
              data: babelHelpers.extends({}, i, { public_key: r }),
            },
            d = yield o("FBPayAuthLibraryUtils").getKidFingerprintFromPublicKey(
              a,
            ),
            m = (t = o("FBPayBase64URL")).encode(JSON.stringify(c)),
            p = { alg: "ES256", kid: d },
            _ = t.encode(JSON.stringify(p)),
            g = new TextEncoder().encode(_ + "." + m),
            y = yield window.crypto.subtle.sign(
              { hash: { name: "SHA-256" }, name: "ECDSA" },
              n.privateKey,
              g,
            ),
            C = t.encode(o("FBPayAuthLibraryUtils").convertBufferToString(y)),
            b = {
              payload: m,
              signatures: [
                { protected: t.encode(JSON.stringify(p)), signature: C },
              ],
            };
          return { keyPairs: n, ptt: t.encode(JSON.stringify(b)) };
        })),
        I.apply(this, arguments)
      );
    }
    var T = function (t, n) {
      ((this.key = t), (this.validity = n));
    };
    function D(e, t, n) {
      return x.apply(this, arguments);
    }
    function x() {
      return (
        (x = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, a, i) {
          var l = yield o("FBPayAuthLibraryUtils").verifyTrustChain(t, a, i);
          if (!l)
            throw r("FBLogger")("fbpay")
              .blameToPreviousFrame()
              .mustfixThrow("Verify TrustChain failed");
          if (r("gkx")("8142"))
            try {
              var s = yield o(
                "FBPayAuthLibraryUtils",
              ).parseAndImportCertWithPkiJS(t[0]);
              return new T(s.key, s.validity);
            } catch (e) {
              var u = r("getErrorSafe")(e);
              throw (
                $("Crypto importKey failed: " + u.message, i),
                r("FBLogger")("fbpay")
                  .blameToPreviousFrame()
                  .mustfixThrow("Crypto importKey failed: " + u.message)
              );
            }
          return new (e || (e = n("Promise")))(function (e, n) {
            var a = (function () {
              try {
                var e = o("FBPayCryptoUtils").parseX509Cert(t[0]);
                return e;
              } catch (e) {
                var n = r("getErrorSafe")(e);
                throw ($("Crypto importKey failed: " + n.message, i), n);
              }
            })();
            o("FBPayCryptoUtils")
              .importX509Cert(a)
              .then(function (t) {
                var n = new T(t, a.validity);
                e(n);
              })
              .catch(function (e) {
                throw (
                  $("Crypto importKey failed: " + e.message, i),
                  r("FBLogger")("fbpay")
                    .blameToPreviousFrame()
                    .mustfixThrow("Crypto importKey failed: " + e.message)
                );
              });
          });
        })),
        x.apply(this, arguments)
      );
    }
    function $(e, t) {
      t != null
        ? t.logClientLoadPaysecFail("get_encryption_key", { error_message: e })
        : s.onReady(function (t) {
            var n = new t(
              void 0,
              o("FBPayUPLSessionIDGenerator").sessionIDGenerator(),
              "fbpay_hub",
              "web",
            );
            n.logClientLoadPaysecFail(
              "get_encryption_key",
              { error_message: e },
              "undefined",
            );
          });
    }
    ((l.getVerifyAuthData = u),
      (l.getLinkAccountAuthPTTForServerKey = c),
      (l.getCheckoutOrP2PPaymentAuthPTTForServerKey = d),
      (l.getPTTWithoutSignature = m),
      (l.getPTTForServerKey = p),
      (l.createOrGetKeyPairAndAbstractPublicKey = C),
      (l.createPttGeneric = v),
      (l.getPTTWithoutEncryption = k),
      (l.CryptoKeyObject = T),
      (l.getCryptoKeyFromCert = D));
  },
  98,
);
