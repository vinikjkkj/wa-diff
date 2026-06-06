__d(
  "WANoiseHandshake",
  [
    "WABinary",
    "WACryptoDependencies",
    "WACryptoHkdf",
    "WACryptoSha256",
    "WAErrors",
    "WANoiseSocket",
    "WAResolvable",
    "WATagsLogger",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = o("WATagsLogger").TAGS(["NoiseHandshake"]),
      d = Promise.reject("UNINITIALIZED HANDSHAKE"),
      m = new Uint8Array(0);
    d.catch(function () {});
    var p = (function () {
      function t(e) {
        var t = this;
        ((this.$2 = d),
          (this.$3 = d),
          (this.$4 = d),
          (this.$5 = 0),
          (this.$1 = e),
          (this.$6 = new (o("WAResolvable").Resolvable)()),
          (e.onClose = function () {
            t.$6.reject(
              new (o("WAErrors").Disconnected)("NoiseHandshake: SocketClosed"),
            );
          }),
          C(this.$6.promise));
      }
      var n = t.prototype;
      return (
        (n.start = function (t, n) {
          var e = o("WABinary").Binary.build(t).readBuffer(),
            r =
              e.byteLength === 32
                ? Promise.resolve(e)
                : o("WACryptoSha256").sha256(e);
          ((this.$2 = r),
            (this.$3 = r),
            (this.$4 = r.then(f)),
            this.authenticate(n));
        }),
        (n.sendAndReceive = function (t) {
          var e = this.$1,
            n = new Promise(function (n) {
              ((e.onFrame = function (t) {
                ((e.onFrame = null), n(t));
              }),
                e.sendFrame(t));
            });
          return this.$7(n);
        }),
        (n.send = function (t) {
          this.$1.sendFrame(t);
        }),
        (n.authenticate = function (t) {
          this.$2 = Promise.all([this.$2, t]).then(function (e) {
            var t = e[0],
              n = e[1],
              r = o("WABinary").Binary.build(t, n).readByteArrayView();
            return o("WACryptoSha256").sha256(r);
          });
        }),
        (n.encrypt = async function (n) {
          try {
            var t = this.$5++,
              r = Promise.all([this.$4, this.$2, n]).then(function (e) {
                var n = e[0],
                  r = e[1],
                  o = e[2];
                return g(n, t, r, o);
              });
            this.authenticate(r);
            var o = await this.$7(r);
            return o;
          } catch (t) {
            throw (
              c.ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Error on encrypt: ",
                    "",
                  ])),
                t,
              ),
              t
            );
          }
        }),
        (n.decrypt = async function (t, n) {
          try {
            var e = this.$5++,
              r = Promise.all([this.$4, this.$2]).then(function (n) {
                var r = n[0],
                  o = n[1];
                return h(r, e, o, t);
              });
            this.authenticate(t);
            var o = await this.$7(r);
            return o;
          } catch (e) {
            throw (
              c.ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Error on decrypt: ",
                    " reason: ",
                    "",
                  ])),
                e,
                n,
              ),
              e
            );
          }
        }),
        (n.finish = async function () {
          var e = this;
          try {
            var t = this.$3
                .then(function (e) {
                  return y(e, new Uint8Array(0));
                })
                .then(function (e) {
                  var t = e[0],
                    n = e[1];
                  return Promise.all([f(t, ["encrypt"]), f(n, ["decrypt"])]);
                })
                .then(function (t) {
                  var n = t[0],
                    r = t[1];
                  return new (o("WANoiseSocket").NoiseSocket)(e.$1, n, r);
                }),
              n = await this.$7(t);
            return n;
          } catch (e) {
            throw (
              c.ERROR(
                u ||
                  (u = babelHelpers.taggedTemplateLiteralLoose([
                    "Error on finish: ",
                    "",
                  ])),
                e,
              ),
              e
            );
          }
        }),
        (n.mixIntoKey = function (t) {
          this.$5 = 0;
          var e = Promise.all([this.$3, t]).then(function (e) {
            var t = e[0],
              n = e[1];
            return y(t, new Uint8Array(n));
          });
          ((this.$3 = e.then(function (e) {
            return e[0];
          })),
            (this.$4 = e.then(function (e) {
              return f(e[1]);
            })),
            C(this.$3),
            C(this.$4));
        }),
        (n.$7 = function (t) {
          var e = this;
          return Promise.race([t, this.$6.promise]).then(function (t) {
            return e.$6.resolveWasCalled() ? e.$6.promise : t;
          });
        }),
        t
      );
    })();
    function _(e) {
      var t = new ArrayBuffer(12),
        n = new DataView(t);
      return (n.setUint32(8, e), new Uint8Array(t));
    }
    function f(e, t) {
      return (
        t === void 0 && (t = ["encrypt", "decrypt"]),
        o("WACryptoDependencies")
          .getCrypto()
          .subtle.importKey("raw", new Uint8Array(e), "AES-GCM", !1, t)
      );
    }
    function g(e, t, n, r) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.encrypt(
          {
            name: "AES-GCM",
            iv: _(t),
            additionalData: n ? new Uint8Array(n) : m,
          },
          e,
          r,
        );
    }
    function h(e, t, n, r) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.decrypt(
          {
            name: "AES-GCM",
            iv: _(t),
            additionalData: n ? new Uint8Array(n) : m,
          },
          e,
          r,
        );
    }
    function y(e, t) {
      return o("WACryptoHkdf")
        .extractWithSaltAndExpand(t, new Uint8Array(e), "", 64)
        .then(function (e) {
          return [e.slice(0, 32), e.slice(32)];
        });
    }
    function C(e) {
      e.catch(function () {});
    }
    l.NoiseHandshake = p;
  },
  98,
);
