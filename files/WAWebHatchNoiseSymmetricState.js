__d(
  "WAWebHatchNoiseSymmetricState",
  ["WAWebHatchNoiseBytes", "WAWebHatchNoiseCipherState", "err"],
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
    async function c(e, t) {
      var n = await crypto.subtle.importKey(
        "raw",
        u(e),
        { hash: "SHA-256", name: "HMAC" },
        !1,
        ["sign"],
      );
      return new Uint8Array(await crypto.subtle.sign("HMAC", n, u(t)));
    }
    async function d(e, t, n) {
      var r = await c(e, t),
        a = new Uint8Array(0),
        i = new Uint8Array(0);
      try {
        var l = await c(r, new Uint8Array([1]));
        a = o("WAWebHatchNoiseBytes").concat(l, new Uint8Array([2]));
        var s = await c(r, a);
        if (n === 2) return [l, s];
        i = o("WAWebHatchNoiseBytes").concat(s, new Uint8Array([3]));
        var u = await c(r, i);
        return [l, s, u];
      } finally {
        (o("WAWebHatchNoiseBytes").zeroBytes(r),
          o("WAWebHatchNoiseBytes").zeroBytes(a),
          o("WAWebHatchNoiseBytes").zeroBytes(i));
      }
    }
    var m = (function () {
      function t() {
        ((this.$1 = new Uint8Array(e)),
          (this.$2 = new Uint8Array(e)),
          (this.$3 = new (o(
            "WAWebHatchNoiseCipherState",
          ).WAWebHatchNoiseCipherState)()),
          (this.$4 = !1));
      }
      var n = t.prototype;
      return (
        (n.$5 = function () {
          if (this.$4)
            throw r("err")("WAWebHatchNoiseSymmetricState: destroyed");
        }),
        (n.initialize = async function () {
          this.$5();
          var t = new TextEncoder().encode(s),
            n = new Uint8Array(e);
          (n.set(t),
            (this.$2 = n),
            (this.$1 = n.slice()),
            await this.mixHash(new Uint8Array(0)));
        }),
        (n.mixHash = async function (t) {
          this.$5();
          var e = o("WAWebHatchNoiseBytes").concat(this.$2, t);
          try {
            var n = new Uint8Array(await crypto.subtle.digest("SHA-256", u(e)));
            (o("WAWebHatchNoiseBytes").zeroBytes(this.$2), (this.$2 = n));
          } finally {
            o("WAWebHatchNoiseBytes").zeroBytes(e);
          }
        }),
        (n.mixKey = async function (t) {
          this.$5();
          var e = await d(this.$1, t, 2),
            n = e[0],
            r = e[1];
          (o("WAWebHatchNoiseBytes").zeroBytes(this.$1),
            (this.$1 = n),
            (this.$3 = new (o(
              "WAWebHatchNoiseCipherState",
            ).WAWebHatchNoiseCipherState)()));
          try {
            await this.$3.initializeKey(r);
          } finally {
            o("WAWebHatchNoiseBytes").zeroBytes(r);
          }
        }),
        (n.encryptAndHash = async function (t) {
          this.$5();
          var e = await this.$3.encryptWithAd(this.$2, t);
          return (await this.mixHash(e), e);
        }),
        (n.decryptAndHash = async function (t) {
          this.$5();
          var e = await this.$3.decryptWithAd(this.$2, t);
          return (await this.mixHash(t), e);
        }),
        (n.split = async function () {
          this.$5();
          var e = await d(this.$1, new Uint8Array(0), 2),
            t = new (o(
              "WAWebHatchNoiseCipherState",
            ).WAWebHatchNoiseCipherState)(),
            n = new (o(
              "WAWebHatchNoiseCipherState",
            ).WAWebHatchNoiseCipherState)();
          try {
            return (
              await t.initializeKey(e[0]),
              await n.initializeKey(e[1]),
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
        }),
        (n.handshakeHash = function () {
          return this.$2.slice();
        }),
        (n.destroy = function () {
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
    l.WAWebHatchNoiseSymmetricState = m;
  },
  98,
);
