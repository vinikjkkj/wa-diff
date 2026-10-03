__d(
  "WAWebHatchNoiseCipherState",
  [
    "Promise",
    "WAWebHatchNoiseBytes",
    "WAWebNoop",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 32;
    function u(e) {
      return e.byteOffset === 0 &&
        e.byteLength === e.buffer.byteLength &&
        e.buffer instanceof ArrayBuffer
        ? e.buffer
        : e.slice().buffer;
    }
    function c(e, t) {
      var n = new Uint8Array(12),
        r = new DataView(n.buffer);
      return (r.setUint32(4, e, !1), r.setUint32(8, t, !1), n);
    }
    var d = (function () {
      function t() {
        ((this.$1 = null),
          (this.$2 = null),
          (this.$3 = !1),
          (this.$4 = 0),
          (this.$5 = 0),
          (this.$6 = !1),
          (this.$7 = (e || (e = n("Promise"))).resolve()));
      }
      var a = t.prototype;
      return (
        (a.$8 = function () {
          if (this.$6)
            throw r("err")(
              "WAWebHatchNoiseCipherState: poisoned after prior failure",
            );
        }),
        (a.initializeKey = function (t) {
          var e = this;
          return this.$9(function () {
            return e.$10(t);
          });
        }),
        (a.$10 = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            if ((this.$8(), this.$3))
              throw r("err")(
                "WAWebHatchNoiseCipherState: key is already initialized",
              );
            if (t.length !== s)
              throw r("err")(
                "WAWebHatchNoiseCipherState: expected a 32-byte key",
              );
            var a = t.slice();
            try {
              o("WAWebHatchNoiseBytes").zeroBytes(t);
              var i = u(a),
                l = yield (e || (e = n("Promise"))).all([
                  crypto.subtle.importKey("raw", i, "AES-GCM", !1, ["encrypt"]),
                  crypto.subtle.importKey("raw", i, "AES-GCM", !1, ["decrypt"]),
                ]),
                c = l[0],
                d = l[1];
              (this.$8(), (this.$1 = c), (this.$2 = d), (this.$3 = !0));
            } catch (e) {
              throw ((this.$6 = !0), e);
            } finally {
              o("WAWebHatchNoiseBytes").zeroBytes(a);
            }
          });
          function a(e) {
            return t.apply(this, arguments);
          }
          return a;
        })()),
        (a.overrideNonceForTesting = function (t) {
          var e = this;
          return this.$9(function () {
            throw r("err")(
              "WAWebHatchNoiseCipherState: test nonce override requires a development build",
            );
            var n, o;
          });
        }),
        (a.destroy = function () {
          var e = this;
          this.$9(function () {
            ((e.$1 = null), (e.$2 = null), (e.$6 = !0));
          });
        }),
        (a.encryptWithAd = function (t, n) {
          var e = this;
          return this.$9(function () {
            return e.$11(t, n);
          });
        }),
        (a.decryptWithAd = function (t, n) {
          var e = this;
          return this.$9(function () {
            return e.$12(t, n);
          });
        }),
        (a.$11 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if ((this.$8(), !this.$3)) return t.slice();
              var n = this.$1;
              if (n == null)
                throw (
                  (this.$6 = !0),
                  r("err")("WAWebHatchNoiseCipherState: missing encryption key")
                );
              var o = this.$13();
              try {
                var a = new Uint8Array(
                  yield crypto.subtle.encrypt(
                    {
                      additionalData: u(e),
                      iv: u(o),
                      name: "AES-GCM",
                      tagLength: 128,
                    },
                    n,
                    u(t),
                  ),
                );
                return (this.$8(), a);
              } catch (e) {
                throw ((this.$6 = !0), e);
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$12 = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              if ((this.$8(), !this.$3)) return t.slice();
              var n = this.$2;
              if (n == null)
                throw (
                  (this.$6 = !0),
                  r("err")("WAWebHatchNoiseCipherState: missing decryption key")
                );
              var o = this.$13();
              try {
                var a = new Uint8Array(
                  yield crypto.subtle.decrypt(
                    {
                      additionalData: u(e),
                      iv: u(o),
                      name: "AES-GCM",
                      tagLength: 128,
                    },
                    n,
                    u(t),
                  ),
                );
                return (this.$8(), a);
              } catch (e) {
                throw (
                  (this.$6 = !0),
                  r("err")("WAWebHatchNoiseCipherState: authentication failed")
                );
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (a.$13 = function () {
          if (this.$4 === 4294967295 && this.$5 === 4294967295)
            throw (
              (this.$6 = !0),
              r("err")("WAWebHatchNoiseCipherState: nonce exhausted")
            );
          var e = c(this.$4, this.$5);
          return (
            this.$5 === 4294967295
              ? ((this.$4 += 1), (this.$5 = 0))
              : (this.$5 += 1),
            e
          );
        }),
        (a.$9 = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            var o = this.$7,
              a = r("WAWebNoop");
            ((this.$7 = new (e || (e = n("Promise")))(function (e) {
              a = e;
            })),
              yield o);
            try {
              return yield t();
            } finally {
              a();
            }
          });
          function o(e) {
            return t.apply(this, arguments);
          }
          return o;
        })()),
        t
      );
    })();
    l.WAWebHatchNoiseCipherState = d;
  },
  98,
);
