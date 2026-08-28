__d(
  "MediaOnlyCryptoUtils",
  ["FBLogger", "asyncToGeneratorRuntime", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 4,
      s = 16,
      u = 24,
      c = 30,
      d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",
      m = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    function p(e, t) {
      var n = crypto.getRandomValues(new Uint8Array(e));
      return Array.from(n, function (e) {
        return t[e % t.length];
      }).join("");
    }
    function _() {
      return p(s, d);
    }
    function f() {
      return p(e, d);
    }
    function g() {
      return p(u, m);
    }
    function h() {
      return crypto.getRandomValues(new Uint8Array(c));
    }
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield RTCPeerConnection.generateCertificate({
                name: "ECDSA",
                namedCurve: "P-256",
              }),
              t = e.getFingerprints(),
              n = t.find(function (e) {
                var t;
                return (
                  ((t = e.algorithm) == null ? void 0 : t.toLowerCase()) ===
                  "sha-256"
                );
              });
            if (n == null || n.value == null)
              return (
                r("FBLogger")("rtc_www").warn(
                  "No SHA-256 fingerprint found in generated certificate",
                ),
                null
              );
            var o = "sha-256 " + n.value.toUpperCase();
            return { certificate: e, fingerprint: o };
          } catch (e) {
            return (
              r("FBLogger")("rtc_www").warn(
                "Failed to generate certificate %s",
                e instanceof Error ? e.message : String(e),
              ),
              null
            );
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b(e) {
      return e < 128
        ? new Uint8Array([e])
        : e < 256
          ? new Uint8Array([129, e])
          : new Uint8Array([130, Math.floor(e / 256), e % 256]);
    }
    function v(e, t) {
      var n = b(t.length),
        r = new Uint8Array(1 + n.length + t.length);
      return ((r[0] = e), r.set(n, 1), r.set(t, 1 + n.length), r);
    }
    function S() {
      for (var e = 0, t = arguments.length, n = new Array(t), r = 0; r < t; r++)
        n[r] = arguments[r];
      for (var o of n) e += o.length;
      var a = new Uint8Array(e),
        i = 0;
      for (var l of n) (a.set(l, i), (i += l.length));
      return v(48, a);
    }
    function R(e) {
      for (var t = 0; t < e.length - 1 && e[t] === 0; ) t++;
      var n = e.subarray(t);
      if (n.length > 0 && n[0] >= 128) {
        var r = new Uint8Array(n.length + 1);
        return ((r[0] = 0), r.set(n, 1), v(2, r));
      }
      return v(2, n.length === 0 ? new Uint8Array([0]) : n);
    }
    function L(e) {
      var t = new Uint8Array(1 + e.length);
      return ((t[0] = 0), t.set(e, 1), v(3, t));
    }
    function E(e) {
      return v(6, new Uint8Array(e));
    }
    function k(e, t) {
      return v(160 + e, t);
    }
    function I(e) {
      var t = new TextEncoder();
      return v(19, t.encode(e));
    }
    function T(e) {
      var t = String(e.getUTCFullYear() % 100).padStart(2, "0"),
        n = String(e.getUTCMonth() + 1).padStart(2, "0"),
        r = String(e.getUTCDate()).padStart(2, "0"),
        o = String(e.getUTCHours()).padStart(2, "0"),
        a = String(e.getUTCMinutes()).padStart(2, "0"),
        i = String(e.getUTCSeconds()).padStart(2, "0"),
        l = new TextEncoder();
      return v(23, l.encode("" + t + n + r + o + a + i + "Z"));
    }
    var D = [42, 134, 72, 206, 61, 4, 3, 2],
      x = [85, 4, 3];
    function $(e, t) {
      for (var n = new Uint8Array(e), r = "", o = 0; o < n.length; o++)
        r += String.fromCharCode(n[o]);
      for (var a = btoa(r), i = [], l = 0; l < a.length; l += 64)
        i.push(a.substring(l, l + 64));
      return (
        "-----BEGIN " +
        t +
        "-----\n" +
        i.join("\n") +
        "\n-----END " +
        t +
        "-----"
      );
    }
    function P(e) {
      var t = new Uint8Array(e),
        n = Array.from(t, function (e) {
          return e.toString(16).toUpperCase().padStart(2, "0");
        });
      return "sha-256 " + n.join(":");
    }
    function N(e) {
      var t = new Uint8Array(e);
      if (t.length !== 64)
        throw r("err")(
          "Unexpected ECDSA P-256 signature length: " + String(t.length),
        );
      return S(R(t.subarray(0, 32)), R(t.subarray(32, 64)));
    }
    function M() {
      return w.apply(this, arguments);
    }
    function w() {
      return (
        (w = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var e = yield crypto.subtle.generateKey(
                { name: "ECDSA", namedCurve: "P-256" },
                !0,
                ["sign", "verify"],
              ),
              t = yield crypto.subtle.exportKey("pkcs8", e.privateKey),
              n = $(t, "PRIVATE KEY"),
              o = yield crypto.subtle.exportKey("spki", e.publicKey),
              a = new Date(),
              i = new Date(a.getTime() + 1440 * 60 * 1e3),
              l = crypto.getRandomValues(new Uint8Array(8));
            l[0] %= 128;
            var s = S(E(D)),
              u = v(49, S(E(x), I("ullc"))),
              c = S(u),
              d = S(T(a), T(i)),
              m = S(
                k(0, R(new Uint8Array([2]))),
                R(l),
                s,
                c,
                d,
                c,
                new Uint8Array(o),
              ),
              p = yield crypto.subtle.sign(
                { hash: "SHA-256", name: "ECDSA" },
                e.privateKey,
                m,
              ),
              _ = N(p),
              f = S(m, s, L(_)),
              g = $(f.buffer, "CERTIFICATE"),
              h = yield crypto.subtle.digest("SHA-256", f),
              y = P(h);
            return { certPem: g, fingerprint: y, privateKeyPem: n };
          } catch (e) {
            return (
              r("FBLogger")("rtc_www").warn(
                "Failed to generate exportable certificate: %s",
                e instanceof Error ? e.message : String(e),
              ),
              null
            );
          }
        })),
        w.apply(this, arguments)
      );
    }
    ((l.createServerIceUfrag = _),
      (l.createClientIceUfrag = f),
      (l.createIcePwd = g),
      (l.createSrtpMasterKey = h),
      (l.createCertificate = y),
      (l.createExportableCertificate = M));
  },
  98,
);
