__d(
  "WAFlowsPreviewEncryptionHelper",
  ["codedError", "getErrorSafe"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    async function e(e, t) {
      try {
        var n = f(window.crypto.getRandomValues(new Uint8Array(16))),
          o = await window.crypto.subtle.generateKey(
            { length: 128, name: "AES-GCM" },
            !0,
            ["encrypt"],
          ),
          a = f(await u(o, n, t)),
          i = await window.crypto.subtle.exportKey("raw", o),
          l = await c(e, i);
        return {
          encryptedAesKey: l,
          encryptedData: a,
          exportedAesKey: i,
          iv: n,
        };
      } catch (e) {
        var d = r("getErrorSafe")(e),
          m = s._(
            4016015,
            function (e) {
              return e._(/*BTDS*/ "");
            },
            function (e, t) {
              return e._(/*BTDS*/ "");
            },
            {},
          );
        throw (
          (m.message = d.message),
          (m.name = d.name),
          (m.description = d.toString()),
          m
        );
      }
    }
    function u(e, t, n) {
      var r = new TextEncoder(),
        o = r.encode(n).buffer;
      return window.crypto.subtle.encrypt(
        { iv: new Uint8Array(_(t)), name: "AES-GCM", tagLength: 128 },
        e,
        o,
      );
    }
    async function c(e, t) {
      var n = window.atob(e).replace(/(\r\n|\n|\r)/gm, ""),
        r = "-----BEGIN PUBLIC KEY-----",
        o = "-----END PUBLIC KEY-----",
        a = n.substring(r.length, n.length - o.length),
        i = window.atob(a),
        l = p(i),
        s = await window.crypto.subtle.importKey(
          "spki",
          l,
          { hash: "SHA-256", name: "RSA-OAEP" },
          !0,
          ["encrypt"],
        ),
        u = await window.crypto.subtle.encrypt({ name: "RSA-OAEP" }, s, t);
      return f(u);
    }
    async function d(e, t, n, o) {
      try {
        var a = await window.crypto.subtle.importKey(
            "raw",
            e,
            { name: "AES-GCM" },
            !1,
            ["decrypt"],
          ),
          i = (function () {
            switch (o) {
              case "100":
                return new Uint8Array(_(n));
              default:
                return new Uint8Array(m(_(n)));
            }
          })(),
          l = await window.crypto.subtle.decrypt(
            { iv: i, name: "AES-GCM", tagLength: 128 },
            a,
            _(t),
          ),
          u = new TextDecoder(),
          c = u.decode(l);
        return c;
      } catch (e) {
        var d = r("getErrorSafe")(e),
          p = s._(
            4016016,
            function (e) {
              return e._(/*BTDS*/ "");
            },
            function (e, t) {
              return e._(/*BTDS*/ "");
            },
            {},
          );
        throw (
          (p.message = d.message),
          (p.name = d.name),
          (p.description = d.toString()),
          p
        );
      }
    }
    function m(e) {
      for (var t = new Uint8Array(e), n = 0; n < t.length; n++) t[n] = ~t[n];
      return t.buffer;
    }
    function p(e) {
      for (
        var t = new ArrayBuffer(e.length),
          n = new Uint8Array(t),
          r = 0,
          o = e.length;
        r < o;
        r++
      )
        n[r] = e.charCodeAt(r);
      return t;
    }
    function _(e) {
      for (
        var t = window.atob(e), n = t.length, r = new Uint8Array(n), o = 0;
        o < n;
        o++
      )
        r[o] = t.charCodeAt(o);
      return r.buffer;
    }
    function f(e) {
      var t = Array.from(new Uint8Array(e)),
        n = t
          .map(function (e) {
            return String.fromCharCode(e);
          })
          .join("");
      return window.btoa(n);
    }
    ((l.encryptData = e), (l.decryptData = d));
  },
  226,
);
