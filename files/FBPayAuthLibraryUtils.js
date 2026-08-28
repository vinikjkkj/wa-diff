__d(
  "FBPayAuthLibraryUtils",
  [
    "FBPayBase64URL",
    "FBPayUPLSessionIDGenerator",
    "Promise",
    "asyncToGeneratorRuntime",
    "gkx",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = r("requireDeferred")("PlatformTrustTokenUPLLogger").__setRef(
        "FBPayAuthLibraryUtils",
      ),
      u = r("requireDeferred")("asn1js-2.1.1").__setRef(
        "FBPayAuthLibraryUtils",
      ),
      c = r("requireDeferred")("pkijs").__setRef("FBPayAuthLibraryUtils"),
      d =
        "MIIC/TCCAqSgAwIBAgIUNymdhTP/0YDPMJaJtQcqCahEFygwCgYIKoZIzj0EAwIwfDEiMCAGA1UEAwwZRmFjZWJvb2sgUGF5bWVudHMgUm9vdCBDQTELMAkGA1UEBhMCVVMxEzARBgNVBAgMCkNhbGlmb3JuaWExEzARBgNVBAcMCk1lbmxvIFBhcmsxHzAdBgNVBAoMFkZhY2Vib29rIFBheW1lbnRzIEluYy4wIBcNMjAwNjAzMjMwMzEyWhgPMjA3MDA2MDMyMzAzMTJaMHwxIjAgBgNVBAMMGUZhY2Vib29rIFBheW1lbnRzIFJvb3QgQ0ExCzAJBgNVBAYTAlVTMRMwEQYDVQQIDApDYWxpZm9ybmlhMRMwEQYDVQQHDApNZW5sbyBQYXJrMR8wHQYDVQQKDBZGYWNlYm9vayBQYXltZW50cyBJbmMuMFkwEwYHKoZIzj0CAQYIKoZIzj0DAQcDQgAEVgHjgdXliIzstMydc99Grq3a+XM9oNuvNMmThjmD10Mu4dyN9jDAvz7WUKEaTE20tRAJOpobf0EuRGHoOntHR6OCAQAwgf0wDwYDVR0TAQH/BAUwAwEB/zAdBgNVHQ4EFgQUy3wJDXDuhw25PFnkqA6RjH56VXowgboGA1UdIwSBsjCBr4AUy3wJDXDuhw25PFnkqA6RjH56VXqhgYCkfjB8MSIwIAYDVQQDDBlGYWNlYm9vayBQYXltZW50cyBSb290IENBMQswCQYDVQQGEwJVUzETMBEGA1UECAwKQ2FsaWZvcm5pYTETMBEGA1UEBwwKTWVubG8gUGFyazEfMB0GA1UECgwWRmFjZWJvb2sgUGF5bWVudHMgSW5jLoIUNymdhTP/0YDPMJaJtQcqCahEFygwDgYDVR0PAQH/BAQDAgGGMAoGCCqGSM49BAMCA0cAMEQCIEA9xLMNmT9uJYurGmPXbP0cs0niRW5dp1YNwEBVamZoAiB2Vjz24gYBRMp0TmgrqDRfglR3lrzkGLm6Y5EXbZP5og==",
      m = 1;
    function p(e, t, n) {
      return _.apply(this, arguments);
    }
    function _() {
      return (
        (_ = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          return r("gkx")("20951") ||
            r("gkx")("20952") ||
            r("gkx")("20953") ||
            r("gkx")("3993") ||
            r("gkx")("20955") ||
            r("gkx")("13441") ||
            r("gkx")("13444") ||
            r("gkx")("18655") ||
            r("gkx")("18663") ||
            r("gkx")("17042") ||
            r("gkx")("21270") ||
            t === !0
            ? !0
            : f(e, n);
        })),
        _.apply(this, arguments)
      );
    }
    function f(e, t) {
      return g.apply(this, arguments);
    }
    function g() {
      return (
        (g = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          var a = yield new (e || (e = n("Promise")))(function (e) {
              u.onReady(function (t) {
                e(t().fromBER);
              });
            }),
            i = yield new e(function (e) {
              c.onReady(function (t) {
                return e([t.Certificate, t.CertificateChainValidationEngine]);
              });
            }),
            l = i[0],
            m = i[1],
            p = new l({ schema: a(w(d)).result }),
            _ = new l({ schema: a(w(t[1])).result }),
            f = new l({ schema: a(w(t[0])).result }),
            g = new Date(),
            h = new m({ certs: [p, _, f], trustedCerts: [p], checkDate: g }),
            y = yield h.verify(),
            C = y.result,
            b = {
              error_message: y.resultMessage,
              e2ee_cert_chain_validation_curr_time: g.toUTCString(),
              e2ee_cert_chain_validation_server_cert_not_before:
                f.notBefore.value.toUTCString(),
              e2ee_cert_chain_validation_server_cert_not_after:
                f.notAfter.value.toUTCString(),
              e2ee_cert_chain_validation_inter_cert_not_before:
                _.notBefore.value.toUTCString(),
              e2ee_cert_chain_validation_inter_cert_not_after:
                _.notAfter.value.toUTCString(),
            };
          return (
            C ||
              (r != null
                ? r.logClientLoadPaysecFail("get_encryption_key", b)
                : s.onReady(function (e) {
                    var t = new e(
                      void 0,
                      o("FBPayUPLSessionIDGenerator").sessionIDGenerator(),
                      "fbpay_hub",
                      "web",
                    );
                    t.logClientLoadPaysecFail(
                      "get_encryption_key",
                      b,
                      "undefined",
                    );
                  })),
            C
          );
        })),
        g.apply(this, arguments)
      );
    }
    function h(e) {
      var t = String(e.getUTCFullYear() % 100).padStart(2, "0"),
        n = String(e.getUTCMonth() + 1).padStart(2, "0"),
        r = String(e.getUTCDate()).padStart(2, "0"),
        o = String(e.getUTCHours()).padStart(2, "0"),
        a = String(e.getUTCMinutes()).padStart(2, "0"),
        i = String(e.getUTCSeconds()).padStart(2, "0");
      return "" + t + n + r + o + a + i + "Z";
    }
    function y(e, t) {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t, r) {
          r === void 0 && (r = "P-256");
          var o = yield new (e || (e = n("Promise")))(function (e) {
              u.onReady(function (t) {
                e(t().fromBER);
              });
            }),
            a = yield new e(function (e) {
              c.onReady(function (t) {
                return e([t.Certificate]);
              });
            }),
            i = a[0],
            l = w(t),
            s = o(l),
            d = new i({ schema: s.result }),
            m = yield d.getPublicKey({
              algorithm: {
                algorithm: { name: "ECDH", namedCurve: r },
                usages: [],
              },
            }),
            p = d.notBefore.value,
            _ = d.notAfter.value;
          return { key: m, validity: { notBefore: h(p), notAfter: h(_) } };
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return Array.from(new Uint8Array(e))
        .map(function (e) {
          return String.fromCharCode(e);
        })
        .join("");
    }
    function v(e, t, n) {
      var r = 0,
        o = S(m),
        a = S(n);
      ((r += o.byteLength), (r += a.byteLength), (r += e.byteLength));
      var i = [];
      t.forEach(function (e) {
        var t = new TextEncoder().encode(e);
        r += t.byteLength;
        var n = S(t.byteLength);
        ((r += n.byteLength), i.push(n), i.push(t));
      });
      var l = new Uint8Array(r),
        s = 0;
      return (
        l.set(o),
        (s = o.byteLength),
        l.set(e, s),
        (s += e.byteLength),
        i.forEach(function (e) {
          (l.set(e, s), (s += e.byteLength));
        }),
        l.set(a, s),
        l
      );
    }
    function S(e) {
      return new Uint8Array(new Uint32Array([e]).buffer).reverse();
    }
    function R(e) {
      var t = parseInt(e.notBefore.substring(0, e.notBefore.length - 1), 10),
        n = parseInt(e.notAfter.substring(0, e.notAfter.length - 1), 10),
        r = L(),
        o = t <= r && r <= n;
      return o;
    }
    function L() {
      var e = new Date(),
        t = [
          E(e.getUTCFullYear()),
          E(e.getUTCMonth() + 1),
          E(e.getUTCDate()),
        ].join(""),
        n = [
          E(e.getUTCHours()),
          E(e.getUTCMinutes()),
          E(e.getUTCSeconds()),
        ].join(""),
        r = parseInt(t.substring(2, t.length) + n, 10);
      return r;
    }
    function E(e) {
      return e < 10 ? "0" + e : "" + e;
    }
    function k(e, t, n) {
      var r = {
        alg: "ECDH-ES",
        apu: e,
        apv: t,
        enc: "A256GCM",
        epk: { crv: "P-256", kty: "EC", pem: n },
      };
      return r;
    }
    function I(e) {
      return T.apply(this, arguments);
    }
    function T() {
      return (
        (T = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = yield window.crypto.subtle.digest(
              "SHA-256",
              new Uint8Array(e),
            ),
            n = b(t);
          return "fp:" + o("FBPayBase64URL").encode(n);
        })),
        T.apply(this, arguments)
      );
    }
    function D(e) {
      for (
        var t = "-----BEGIN PUBLIC KEY-----\n",
          n = "-----END PUBLIC KEY-----\n",
          r = window.btoa(b(e)),
          o = t;
        r.length > 0;
      )
        ((o += r.substring(0, 64) + "\n"), (r = r.substring(64)));
      return ((o += n), o);
    }
    function x(e, t) {
      var n = {
        ptt_encryption_key_not_before: e,
        ptt_encryption_key_not_after: t,
      };
      if (t.length >= 12 && t.length <= 15) {
        var r = t.length <= 13 ? 2 : 4,
          a = t[t.length - 1] === "Z" ? "Z" : "",
          i =
            "^(\\d{" +
            r +
            "})(\\d\\d)(\\d\\d)(\\d\\d)(\\d\\d)(\\d\\d)" +
            a +
            "$",
          l = new RegExp(i),
          u = new Date(t.replace(l, "$4:$5:$6 $2/$3/$1")),
          c = (u.getTime() - Date.now()) / 1e3;
        n = babelHelpers.extends({}, n, {
          ptt_encryption_key_life_in_sec: c.toString(),
        });
      }
      s.onReady(function (e) {
        var t = new e(
          void 0,
          o("FBPayUPLSessionIDGenerator").sessionIDGenerator(),
          "fbpay_hub",
          "web",
        );
        t.logClientLoadPaysecSuccess("use_encryption_key", n, "undefined");
      });
    }
    function $(e, t, n, r) {
      return P.apply(this, arguments);
    }
    function P() {
      return (
        (P = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            r === void 0 && (r = !1);
            try {
              x(t.validity.notBefore, t.validity.notAfter);
            } catch (e) {}
            var a = yield window.crypto.subtle.generateKey(
                { name: "ECDH", namedCurve: "P-256" },
                !0,
                ["deriveBits"],
              ),
              i = yield window.crypto.subtle.deriveBits(
                { name: "ECDH", namedCurve: "P-256", public: t.key },
                a.privateKey,
                256,
              ),
              l = yield window.crypto.subtle.exportKey("spki", t.key),
              s = yield N(e),
              u = s;
            n && (u = r ? n.sort().join(";") : [s].concat(n).sort().join(";"));
            var c = yield I(l),
              d = v(new Uint8Array(i), ["A256GCM", u, c], 256),
              m = yield window.crypto.subtle.digest("SHA-256", d);
            return {
              encryptionKey: m,
              apu: o("FBPayBase64URL").encode(u),
              apv: o("FBPayBase64URL").encode(c),
              ephemeralKeyPair: a,
            };
          },
        )),
        P.apply(this, arguments)
      );
    }
    var N = (function () {
      var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
        var t;
        return (
          e != null &&
            (t = yield window.crypto.subtle.exportKey("spki", e.publicKey)),
          t == null ? "" : I(t)
        );
      });
      return function (n) {
        return e.apply(this, arguments);
      };
    })();
    function M(e) {
      var t = window.atob(e);
      return new Uint8Array(t.length).map(function (e, n) {
        return t.charCodeAt(n);
      });
    }
    function w(e) {
      for (
        var t = atob(e), n = t.length, r = new Uint8Array(n), o = 0;
        o < n;
        o++
      )
        r[o] = t.charCodeAt(o);
      return r.buffer;
    }
    function A(e, t, n, r, o) {
      var a,
        i = String(Math.round(parseFloat(e == null ? void 0 : e.amount) * 100)),
        l = {
          amount: i,
          app_id: n != null ? n : "",
          cred_id: t != null ? t : "",
          currency: (a = e == null ? void 0 : e.currency) != null ? a : "",
          device_id: r,
        };
      return (o && (l = babelHelpers.extends({}, l, { csc: "$e2ee" })), l);
    }
    function F(e) {
      var t = e == null ? {} : { csc: e };
      return t;
    }
    ((l.verifyTrustChain = p),
      (l.parseAndImportCertWithPkiJS = y),
      (l.convertBufferToString = b),
      (l.getEncryptionKeyPayload = v),
      (l.getBigEndianNumberIn4Bytes = S),
      (l.isTimeValid = R),
      (l.buildJoseHeader = k),
      (l.getKidFingerprintFromPublicKey = I),
      (l.getPEMPublicKey = D),
      (l.getEncryptionKey = $),
      (l.genKidFingerprintFromKeyPair = N),
      (l.strToUint8Array = M),
      (l.createCheckoutOrP2PAuthPttPayload = A),
      (l.createCheckoutOrP2PSecretPayload = F));
  },
  98,
);
