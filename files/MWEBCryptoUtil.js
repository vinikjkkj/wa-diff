__d(
  "MWEBCryptoUtil",
  ["Base64Utils", "WACryptoHkdf", "asyncToGeneratorRuntime", "vulture"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return e;
    }
    function s(e) {
      return e.replace(/-/g, "+").replace(/_/g, "/");
    }
    function u(e) {
      return atob(e);
    }
    function c(e) {
      for (var t = e; t.length % 4 !== 0; ) t += "=";
      return t;
    }
    function d(e) {
      return o("Base64Utils").toArrayBuffer(c(s(e)));
    }
    var m = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.decrypt = function (n) {
          var t = n.slice(0, e.NONCE_SIZE),
            r = n.slice(e.NONCE_SIZE);
          return window.crypto.subtle.decrypt(
            { iv: t, name: "AES-GCM" },
            this.$1,
            r,
          );
        }),
        (t.encrypt = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = new Uint8Array(e.NONCE_SIZE);
            crypto.getRandomValues(n);
            var r = yield window.crypto.subtle.encrypt(
                { iv: n, name: "AES-GCM" },
                this.$1,
                t,
              ),
              o = new Uint8Array(n.length + r.byteLength);
            return (o.set(n), o.set(new Uint8Array(r), n.length), o.buffer);
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (e.fromArrayBuffer = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var n = yield window.crypto.subtle.importKey(
              "raw",
              t,
              "AES-GCM",
              !1,
              ["encrypt", "decrypt"],
            );
            return new e(n);
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        e
      );
    })();
    ((m.KEY_SIZE = 32), (m.NONCE_SIZE = 12));
    var p = (function () {
      function e(e) {
        this.$1 = e;
      }
      var t = e.prototype;
      return (
        (t.hkdfDerive = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (t, n) {
              n === void 0 && (n = null);
              var r = yield o("WACryptoHkdf").extractWithSaltAndExpand(
                this.$1,
                n,
                t,
                64,
              );
              return new e(r);
            },
          );
          function r(e, n) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (t.get = function () {
          return this.$1;
        }),
        (t.toEncryptionKey = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = yield this.hkdfDerive("encryptionKey");
            return m.fromArrayBuffer(e.get().slice(0, m.KEY_SIZE));
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        e
      );
    })();
    function _(e) {
      return (
        r("vulture")("Cs2uL5Q99r0sD9i6wAB5ug5wPvU="),
        btoa(String.fromCharCode.apply(String, Array.from(new Uint8Array(e))))
      );
    }
    function f(e) {
      for (
        var t = atob(e), n = new Uint8Array(t.length), r = 0;
        r < t.length;
        r++
      )
        n[r] = t.charCodeAt(r);
      return n.buffer;
    }
    ((l.toBase64String = e),
      (l.decodeBase64 = u),
      (l.decodeBase64Bytes = d),
      (l.EncryptionKey = m),
      (l.DerivableSecret = p),
      (l.arrayBufferToBase64 = _),
      (l.base64ToArrayBuffer = f));
  },
  98,
);
