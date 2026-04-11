__d(
  "WANoiseHandshake",
  [
    "Promise",
    "WABinary",
    "WACryptoDependencies",
    "WACryptoHkdf",
    "WACryptoSha256",
    "WAErrors",
    "WANoiseSocket",
    "WAResolvable",
    "WATagsLogger",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d = o("WATagsLogger").TAGS(["NoiseHandshake"]),
      m = (c || (c = n("Promise"))).reject("UNINITIALIZED HANDSHAKE"),
      p = new Uint8Array(0);
    m.catch(function () {});
    var _ = (function () {
      function t(e) {
        var t = this;
        ((this.$2 = m),
          (this.$3 = m),
          (this.$4 = m),
          (this.$5 = 0),
          (this.$1 = e),
          (this.$6 = new (o("WAResolvable").Resolvable)()),
          (e.onClose = function () {
            t.$6.reject(
              new (o("WAErrors").Disconnected)("NoiseHandshake: SocketClosed"),
            );
          }),
          b(this.$6.promise));
      }
      var r = t.prototype;
      return (
        (r.start = function (t, r) {
          var e = o("WABinary").Binary.build(t).readBuffer(),
            a =
              e.byteLength === 32
                ? (c || (c = n("Promise"))).resolve(e)
                : o("WACryptoSha256").sha256(e);
          ((this.$2 = a),
            (this.$3 = a),
            (this.$4 = a.then(g)),
            this.authenticate(r));
        }),
        (r.sendAndReceive = function (t) {
          var e = this.$1,
            r = new (c || (c = n("Promise")))(function (n) {
              ((e.onFrame = function (t) {
                ((e.onFrame = null), n(t));
              }),
                e.sendFrame(t));
            });
          return this.$7(r);
        }),
        (r.send = function (t) {
          this.$1.sendFrame(t);
        }),
        (r.authenticate = function (t) {
          this.$2 = (c || (c = n("Promise")))
            .all([this.$2, t])
            .then(function (e) {
              var t = e[0],
                n = e[1],
                r = o("WABinary").Binary.build(t, n).readByteArrayView();
              return o("WACryptoSha256").sha256(r);
            });
        }),
        (r.encrypt = (function () {
          var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
            try {
              var r = this.$5++,
                o = (c || (c = n("Promise")))
                  .all([this.$4, this.$2, t])
                  .then(function (e) {
                    var t = e[0],
                      n = e[1],
                      o = e[2];
                    return h(t, r, n, o);
                  });
              this.authenticate(o);
              var a = yield this.$7(o);
              return a;
            } catch (t) {
              throw (
                d.ERROR(
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
          });
          function r(e) {
            return t.apply(this, arguments);
          }
          return r;
        })()),
        (r.decrypt = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(
            function* (e, t) {
              try {
                var r = this.$5++,
                  o = (c || (c = n("Promise")))
                    .all([this.$4, this.$2])
                    .then(function (t) {
                      var n = t[0],
                        o = t[1];
                      return y(n, r, o, e);
                    });
                this.authenticate(e);
                var a = yield this.$7(o);
                return a;
              } catch (e) {
                throw (
                  d.ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
                        "Error on decrypt: ",
                        " reason: ",
                        "",
                      ])),
                    e,
                    t,
                  ),
                  e
                );
              }
            },
          );
          function t(t, n) {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.finish = (function () {
          var e = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
            var e = this;
            try {
              var t = this.$3
                  .then(function (e) {
                    return C(e, new Uint8Array(0));
                  })
                  .then(function (e) {
                    var t = e[0],
                      r = e[1];
                    return (c || (c = n("Promise"))).all([
                      g(t, ["encrypt"]),
                      g(r, ["decrypt"]),
                    ]);
                  })
                  .then(function (t) {
                    var n = t[0],
                      r = t[1];
                    return new (o("WANoiseSocket").NoiseSocket)(e.$1, n, r);
                  }),
                r = yield this.$7(t);
              return r;
            } catch (e) {
              throw (
                d.ERROR(
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
          });
          function t() {
            return e.apply(this, arguments);
          }
          return t;
        })()),
        (r.mixIntoKey = function (t) {
          this.$5 = 0;
          var e = (c || (c = n("Promise")))
            .all([this.$3, t])
            .then(function (e) {
              var t = e[0],
                n = e[1];
              return C(t, new Uint8Array(n));
            });
          ((this.$3 = e.then(function (e) {
            return e[0];
          })),
            (this.$4 = e.then(function (e) {
              return g(e[1]);
            })),
            b(this.$3),
            b(this.$4));
        }),
        (r.$7 = function (t) {
          var e = this;
          return (c || (c = n("Promise")))
            .race([t, this.$6.promise])
            .then(function (t) {
              return e.$6.resolveWasCalled() ? e.$6.promise : t;
            });
        }),
        t
      );
    })();
    function f(e) {
      var t = new ArrayBuffer(12),
        n = new DataView(t);
      return (n.setUint32(8, e), new Uint8Array(t));
    }
    function g(e, t) {
      return (
        t === void 0 && (t = ["encrypt", "decrypt"]),
        o("WACryptoDependencies")
          .getCrypto()
          .subtle.importKey("raw", new Uint8Array(e), "AES-GCM", !1, t)
      );
    }
    function h(e, t, n, r) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.encrypt(
          {
            name: "AES-GCM",
            iv: f(t),
            additionalData: n ? new Uint8Array(n) : p,
          },
          e,
          r,
        );
    }
    function y(e, t, n, r) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.decrypt(
          {
            name: "AES-GCM",
            iv: f(t),
            additionalData: n ? new Uint8Array(n) : p,
          },
          e,
          r,
        );
    }
    function C(e, t) {
      return o("WACryptoHkdf")
        .extractWithSaltAndExpand(t, new Uint8Array(e), "", 64)
        .then(function (e) {
          return [e.slice(0, 32), e.slice(32)];
        });
    }
    function b(e) {
      e.catch(function () {});
    }
    l.NoiseHandshake = _;
  },
  98,
);
