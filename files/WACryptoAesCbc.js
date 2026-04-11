__d(
  "WACryptoAesCbc",
  [
    "Promise",
    "WABinary",
    "WACryptoDependencies",
    "WAPromiseDelays",
    "WATypedArraysCast",
    "WATypedArraysConcat",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 16,
      u = 1024,
      c = 16,
      d = 1024 * 1024,
      m = s * d,
      p = (function () {
        function e(e, t, n, r) {
          ((this.$4 = null),
            (this.$6 = !1),
            (this.$1 = e),
            (this.$2 = t),
            (this.$3 = n));
          var a = { name: "AES-CBC", iv: r };
          this.$5 = o("WACryptoDependencies")
            .getCrypto()
            .subtle.importKey("raw", n, "AES-CBC", !1, [t])
            .then(function (e) {
              return { algo: a, key: e };
            });
        }
        var t = e.prototype;
        return (
          (t.append = function (t) {
            var e = this;
            this.$7("append");
            var n,
              r = this.$4;
            if (r)
              if ((r.writeByteArray(t), r.size() > u)) {
                var a = r.size() % s;
                ((n = r.readByteArrayView(r.size() - a)),
                  r.size() || (this.$4 = null));
              } else n = null;
            else if (t.length > u) {
              var i = t.length % s;
              i
                ? ((this.$4 = new (o("WABinary").Binary)(t)),
                  (n = this.$4.readByteArrayView(t.length - i)))
                : (n = t);
            } else ((this.$4 = new (o("WABinary").Binary)(t)), (n = null));
            var l = n;
            return (
              l &&
                (this.$5 = this.$5
                  .then(function (t) {
                    var n = t.algo,
                      r = t.key;
                    if (e.$2 === "encrypt")
                      return o("WACryptoDependencies")
                        .getCrypto()
                        .subtle.encrypt(n, r, l)
                        .then(function (t) {
                          return (
                            e.$1.writeByteArray(
                              new Uint8Array(t, 0, t.byteLength - s),
                            ),
                            new Uint8Array(t, t.byteLength - 2 * s, s)
                          );
                        });
                    var a = l.slice(-s);
                    return o("WACryptoDependencies")
                      .getCrypto()
                      .subtle.decrypt(n, r, l)
                      .then(function (t) {
                        return (e.$1.writeBuffer(t), a);
                      });
                  })
                  .then(function (t) {
                    var n = { name: "AES-CBC", iv: t };
                    return o("WACryptoDependencies")
                      .getCrypto()
                      .subtle.importKey("raw", e.$3, "AES-CBC", !1, [e.$2])
                      .then(function (e) {
                        return { algo: n, key: e };
                      });
                  })),
              this.$5.then(function () {})
            );
          }),
          (t.finalize = function (t) {
            var e = this;
            this.$7("finalize");
            var n;
            if (this.$4) {
              var r = this.$4;
              (t && r.writeByteArray(t),
                (n = r.readByteArrayView()),
                (this.$4 = null));
            } else t && (n = t);
            if (n) {
              var a = n;
              return this.$5
                .then(function (t) {
                  var n = t.algo,
                    r = t.key;
                  return e.$2 === "encrypt"
                    ? o("WACryptoDependencies")
                        .getCrypto()
                        .subtle.encrypt(n, r, a)
                    : o("WACryptoDependencies")
                        .getCrypto()
                        .subtle.decrypt(n, r, a);
                })
                .then(function (t) {
                  e.$1.writeBuffer(t);
                });
            } else return this.$5.then(function () {});
          }),
          (t.$7 = function (t) {
            if (this.$6)
              throw r("err")("AesCbcStream." + t + " called after finalize");
          }),
          e
        );
      })();
    function _(e) {
      return {
        name: "AES-CBC",
        iv: o("WATypedArraysCast").castTypedArrays(Uint8Array, e),
      };
    }
    function f(e) {
      return o("WACryptoDependencies")
        .getCrypto()
        .subtle.importKey(
          "raw",
          o("WATypedArraysCast").castTypedArrays(Uint8Array, e),
          "AES-CBC",
          !1,
          ["encrypt"],
        );
    }
    function g(e) {
      if (e) return o("WATypedArraysCast").castTypedArrays(Uint8Array, e);
      var t = new Uint8Array(c);
      return (o("WACryptoDependencies").getCrypto().getRandomValues(t), t);
    }
    function h(e) {
      var t = e.byteLength,
        n = s - (t % s);
      return Number.isNaN(n) ? t : t + n;
    }
    function y(t, r, a) {
      var i = _(r);
      return (e || (e = n("Promise")))
        .resolve(
          o("WACryptoDependencies")
            .getCrypto()
            .subtle.importKey(
              "raw",
              o("WATypedArraysCast").castTypedArrays(Uint8Array, t),
              "AES-CBC",
              !1,
              ["decrypt"],
            ),
        )
        .then(function (e) {
          return o("WACryptoDependencies").getCrypto().subtle.decrypt(i, e, a);
        });
    }
    function C(t, r) {
      return (e || (e = n("Promise"))).resolve().then(function () {
        var e = r.slice(0, c),
          n = r.slice(c);
        return y(t, e, n);
      });
    }
    function b(t, r, a) {
      return (e || (e = n("Promise"))).resolve().then(function () {
        var i = g(a),
          l = _(i);
        return (e || (e = n("Promise")))
          .resolve(f(t))
          .then(function (e) {
            return o("WACryptoDependencies")
              .getCrypto()
              .subtle.encrypt(l, e, r);
          })
          .then(function (e) {
            return o("WATypedArraysConcat").concatTypedArrays(Uint8Array, [
              i,
              new Uint8Array(e),
            ]).buffer;
          });
      });
    }
    function v(e) {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e) {
          var t = e.encKey,
            n = e.plaintext,
            a = e.optionalIv,
            i = e.chunkSize,
            l = i === void 0 ? m : i,
            u = e.delayInBetween,
            c = u === void 0 ? !1 : u,
            d = e.yieldFn;
          if (l % s !== 0)
            throw r("err")(
              "chunkSize must be a multiple of " + s + ", " + l + " received",
            );
          var p = yield f(t),
            _ = new Uint8Array(n),
            y = Math.ceil(_.byteLength / l),
            C = g(a),
            b = new Uint8Array(h(_) + C.byteLength);
          b.set(C);
          for (var v = 0, S = C, L; v < y; v++) {
            var E = v === y - 1,
              k = v * l;
            L = _.subarray(k, k + l);
            var I = yield R(E, L, S, p),
              T = I.encryptedChunk,
              D = I.nextIv;
            (b.set(T, C.byteLength + v * l),
              (S = D),
              c === !0 &&
                (d != null
                  ? yield d()
                  : yield o("WAPromiseDelays").releaseToEventLoop()));
          }
          return b.buffer;
        })),
        S.apply(this, arguments)
      );
    }
    function R(e, t, n, r) {
      return L.apply(this, arguments);
    }
    function L() {
      return (
        (L = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r) {
            var a = yield o("WACryptoDependencies")
                .getCrypto()
                .subtle.encrypt(_(n), r, t)
                .then(function (t) {
                  return e
                    ? new Uint8Array(t)
                    : new Uint8Array(t).subarray(0, -s);
                }),
              i = a.slice(-s);
            return { encryptedChunk: a, nextIv: i };
          },
        )),
        L.apply(this, arguments)
      );
    }
    ((l.AES_CBC_BLOCK_SIZE = s),
      (l.AesCbcStream = p),
      (l.importRawKey = f),
      (l.getIv = g),
      (l.aesCbcDecrypt = y),
      (l.aesCbcDecryptSplit = C),
      (l.aesCbcEncrypt = b),
      (l.aesCbcEncryptWithChunking = v),
      (l.aesCbcEncryptChunk = R));
  },
  98,
);
