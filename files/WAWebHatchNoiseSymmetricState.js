__d(
  "WAWebHatchNoiseSymmetricState",
  [
    "WAWebHatchNoiseBytes",
    "WAWebHatchNoiseCipherState",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32,
      s = "Noise_XX_25519_AESGCM_SHA256";
    function u(e) {
      return e.byteOffset === 0 &&
        e.byteLength === e.buffer.byteLength &&
        e.buffer instanceof ArrayBuffer
        ? e.buffer
        : e.slice().buffer;
    }
    function c(e, t) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          var n = yield crypto.subtle.importKey(
            "raw",
            u(e),
            { hash: "SHA-256", name: "HMAC" },
            !1,
            ["sign"],
          );
          return new Uint8Array(yield crypto.subtle.sign("HMAC", n, u(t)));
        })),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n) {
      return p.apply(this, arguments);
    }
    function p() {
      return (
        (p = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t, n) {
          var r = yield c(e, t),
            a = new Uint8Array(0),
            i = new Uint8Array(0);
          try {
            var l = yield c(r, new Uint8Array([1]));
            a = o("WAWebHatchNoiseBytes").concat(l, new Uint8Array([2]));
            var s = yield c(r, a);
            if (n === 2) return [l, s];
            i = o("WAWebHatchNoiseBytes").concat(s, new Uint8Array([3]));
            var u = yield c(r, i);
            return [l, s, u];
          } finally {
            (o("WAWebHatchNoiseBytes").zeroBytes(r),
              o("WAWebHatchNoiseBytes").zeroBytes(a),
              o("WAWebHatchNoiseBytes").zeroBytes(i));
          }
        })),
        p.apply(this, arguments)
      );
    }
    var _ = (function () {
      function t() {
        ((this.$1 = new Uint8Array(e)),
          (this.$2 = new Uint8Array(e)),
          (this.$3 = new (o(
            "WAWebHatchNoiseCipherState",
          ).WAWebHatchNoiseCipherState)()),
          (this.$4 = !1));
      }
      var a = t.prototype;
      return (
        (a.$5 = function () {
          if (this.$4)
            throw r("err")("WAWebHatchNoiseSymmetricState: destroyed");
        }),
        (a.initialize = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            this.$5();
            var t = new TextEncoder().encode(s),
              n = new Uint8Array(e);
            (n.set(t),
              (this.$2 = n),
              (this.$1 = n.slice()),
              yield this.mixHash(new Uint8Array(0)));
          });
          function r() {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (a.mixHash = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            this.$5();
            var t = o("WAWebHatchNoiseBytes").concat(this.$2, e);
            try {
              var n = new Uint8Array(
                yield crypto.subtle.digest("SHA-256", u(t)),
              );
              (o("WAWebHatchNoiseBytes").zeroBytes(this.$2), (this.$2 = n));
            } finally {
              o("WAWebHatchNoiseBytes").zeroBytes(t);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.mixKey = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            this.$5();
            var t = yield m(this.$1, e, 2),
              n = t[0],
              r = t[1];
            (o("WAWebHatchNoiseBytes").zeroBytes(this.$1),
              (this.$1 = n),
              (this.$3 = new (o(
                "WAWebHatchNoiseCipherState",
              ).WAWebHatchNoiseCipherState)()));
            try {
              yield this.$3.initializeKey(r);
            } finally {
              o("WAWebHatchNoiseBytes").zeroBytes(r);
            }
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.encryptAndHash = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            this.$5();
            var t = yield this.$3.encryptWithAd(this.$2, e);
            return (yield this.mixHash(t), t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.decryptAndHash = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
            this.$5();
            var t = yield this.$3.decryptWithAd(this.$2, e);
            return (yield this.mixHash(e), t);
          });
          function t(t) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.split = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            this.$5();
            var e = yield m(this.$1, new Uint8Array(0), 2),
              t = new (o(
                "WAWebHatchNoiseCipherState",
              ).WAWebHatchNoiseCipherState)(),
              n = new (o(
                "WAWebHatchNoiseCipherState",
              ).WAWebHatchNoiseCipherState)();
            try {
              return (
                yield t.initializeKey(e[0]),
                yield n.initializeKey(e[1]),
                [t, n]
              );
            } catch (e) {
              throw (t.destroy(), n.destroy(), e);
            } finally {
              (o("WAWebHatchNoiseBytes").zeroBytes(this.$1),
                (this.$3 = new (o(
                  "WAWebHatchNoiseCipherState",
                ).WAWebHatchNoiseCipherState)()),
                (this.$4 = !0),
                o("WAWebHatchNoiseBytes").zeroBytes(e[0]),
                o("WAWebHatchNoiseBytes").zeroBytes(e[1]));
            }
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.handshakeHash = function () {
          return this.$2.slice();
        }),
        (a.destroy = function () {
          (o("WAWebHatchNoiseBytes").zeroBytes(this.$1),
            o("WAWebHatchNoiseBytes").zeroBytes(this.$2),
            (this.$3 = new (o(
              "WAWebHatchNoiseCipherState",
            ).WAWebHatchNoiseCipherState)()),
            (this.$4 = !0));
        }),
        t
      );
    })();
    l.WAWebHatchNoiseSymmetricState = _;
  },
  98,
);
