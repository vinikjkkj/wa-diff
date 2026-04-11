__d(
  "WACryptoLtHash",
  ["Promise", "WACryptoHkdf", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 2,
      u = 128,
      c = new ArrayBuffer(u),
      d = (function () {
        function t(e) {
          this.salt = e;
        }
        var r = t.prototype;
        return (
          (r.add = function (r, o) {
            var t = this;
            return o.reduce(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    return t.$1(yield e, n);
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              (e || (e = n("Promise"))).resolve(r),
            );
          }),
          (r.subtract = function (r, o) {
            var t = this;
            return o.reduce(
              (function () {
                var e = n("asyncToGeneratorRuntime").asyncToGenerator(
                  function* (e, n) {
                    return t.$2(yield e, n);
                  },
                );
                return function (t, n) {
                  return e.apply(this, arguments);
                };
              })(),
              (e || (e = n("Promise"))).resolve(r),
            );
          }),
          (r.subtractThenAdd = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t, n) {
                var r = yield this.subtract(e, n),
                  o = yield this.add(r, t);
                return { ltHash: o, subtractResult: r };
              },
            );
            function t(t, n, r) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$1 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield o("WACryptoHkdf").extractAndExpand(
                  t,
                  this.salt,
                  u,
                );
                return this.performPointwiseWithOverflow(e, n, function (e, t) {
                  return e + t;
                });
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.$2 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield o("WACryptoHkdf").extractAndExpand(
                  t,
                  this.salt,
                  u,
                );
                return this.performPointwiseWithOverflow(e, n, function (e, t) {
                  return e - t;
                });
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (r.performPointwiseWithOverflow = function (t, n, r) {
            for (
              var e = new DataView(t),
                o = new DataView(n),
                a = new ArrayBuffer(e.byteLength),
                i = new DataView(a),
                l = 0;
              l < e.byteLength;
              l += s
            )
              i.setUint16(l, r(e.getUint16(l, !0), o.getUint16(l, !0)), !0);
            return a;
          }),
          t
        );
      })(),
      m = new d("WhatsApp Patch Integrity");
    ((l.KEY_LENGTH_BYTES = u),
      (l.EMPTY_LT_HASH = c),
      (l.LtHash16 = d),
      (l.LT_HASH_ANTI_TAMPERING = m));
  },
  98,
);
