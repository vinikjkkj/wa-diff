__d(
  "WAWebHatchNoiseCipherState",
  ["WAWebHatchNoiseBytes", "WAWebNoop", "err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32;
    function s(e) {
      return e.byteOffset === 0 &&
        e.byteLength === e.buffer.byteLength &&
        e.buffer instanceof ArrayBuffer
        ? e.buffer
        : e.slice().buffer;
    }
    function u(e, t) {
      var n = new Uint8Array(12),
        r = new DataView(n.buffer);
      return (r.setUint32(4, e, !1), r.setUint32(8, t, !1), n);
    }
    var c = (function () {
      function t() {
        ((this.$1 = null),
          (this.$2 = null),
          (this.$3 = !1),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = !1),
          (this.$7 = Promise.resolve()));
      }
      var n = t.prototype;
      return (
        (n.$8 = function () {
          if (this.$6)
            throw r("err")(
              "WAWebHatchNoiseCipherState: poisoned after prior failure",
            );
        }),
        (n.initializeKey = function (t) {
          var e = this;
          return this.$9(function () {
            return e.$10(t);
          });
        }),
        (n.$10 = async function (n) {
          if ((this.$8(), this.$3))
            throw r("err")(
              "WAWebHatchNoiseCipherState: key is already initialized",
            );
          if (n.length !== e)
            throw r("err")(
              "WAWebHatchNoiseCipherState: expected a 32-byte key",
            );
          var t = n.slice();
          try {
            o("WAWebHatchNoiseBytes").zeroBytes(n);
            var a = s(t),
              i = await Promise.all([
                crypto.subtle.importKey("raw", a, "AES-GCM", !1, ["encrypt"]),
                crypto.subtle.importKey("raw", a, "AES-GCM", !1, ["decrypt"]),
              ]),
              l = i[0],
              u = i[1];
            (this.$8(), (this.$1 = l), (this.$2 = u), (this.$3 = !0));
          } catch (e) {
            throw ((this.$6 = !0), e);
          } finally {
            o("WAWebHatchNoiseBytes").zeroBytes(t);
          }
        }),
        (n.destroy = function () {
          var e = this;
          this.$9(function () {
            ((e.$1 = null), (e.$2 = null), (e.$6 = !0));
          });
        }),
        (n.encryptWithAd = function (t, n) {
          var e = this;
          return this.$9(function () {
            return e.$11(t, n);
          });
        }),
        (n.decryptWithAd = function (t, n) {
          var e = this;
          return this.$9(function () {
            return e.$12(t, n);
          });
        }),
        (n.$11 = async function (t, n) {
          if ((this.$8(), !this.$3)) return n.slice();
          var e = this.$1;
          if (e == null)
            throw (
              (this.$6 = !0),
              r("err")("WAWebHatchNoiseCipherState: missing encryption key")
            );
          var o = this.$13();
          try {
            var a = new Uint8Array(
              await crypto.subtle.encrypt(
                {
                  additionalData: s(t),
                  iv: s(o),
                  name: "AES-GCM",
                  tagLength: 128,
                },
                e,
                s(n),
              ),
            );
            return (this.$8(), a);
          } catch (e) {
            throw ((this.$6 = !0), e);
          }
        }),
        (n.$12 = async function (t, n) {
          if ((this.$8(), !this.$3)) return n.slice();
          var e = this.$2;
          if (e == null)
            throw (
              (this.$6 = !0),
              r("err")("WAWebHatchNoiseCipherState: missing decryption key")
            );
          var o = this.$13();
          try {
            var a = new Uint8Array(
              await crypto.subtle.decrypt(
                {
                  additionalData: s(t),
                  iv: s(o),
                  name: "AES-GCM",
                  tagLength: 128,
                },
                e,
                s(n),
              ),
            );
            return (this.$8(), a);
          } catch (e) {
            throw (
              (this.$6 = !0),
              r("err")("WAWebHatchNoiseCipherState: authentication failed")
            );
          }
        }),
        (n.$13 = function () {
          if (this.$4 === 4294967295 && this.$5 === 4294967295)
            throw (
              (this.$6 = !0),
              r("err")("WAWebHatchNoiseCipherState: nonce exhausted")
            );
          var e = u(this.$4, this.$5);
          return (
            this.$5 === 4294967295
              ? ((this.$4 += 1), (this.$5 = 0))
              : (this.$5 += 1),
            e
          );
        }),
        (n.$9 = async function (t) {
          var e = this.$7,
            n = r("WAWebNoop");
          ((this.$7 = new Promise(function (e) {
            n = e;
          })),
            await e);
          try {
            return await t();
          } finally {
            n();
          }
        }),
        t
      );
    })();
    l.WAWebHatchNoiseCipherState = c;
  },
  98,
);
