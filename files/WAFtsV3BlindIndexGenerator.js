__d(
  "WAFtsV3BlindIndexGenerator",
  [
    "Promise",
    "WAArrayBufferUtils",
    "WACryptoDependencies",
    "WAFtsGenBlindIndex",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WALruCache",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 32,
      u = 3,
      c = (function () {
        function t(e, t, n) {
          (t === void 0 && (t = s),
            n === void 0 && (n = u),
            (this.$1 = new (o("WALruCache").LruCache)({
              sizeLimit: 5e4,
              getSize: function (t) {
                return t.length;
              },
            })),
            (this.$2 = new (o("WALruCache").LruCache)({
              sizeLimit: 1e3,
              getSize: function () {
                return 1;
              },
            })),
            (this.keyGenFn = e),
            (this.blindIndexByteLength = t),
            (this.$3 = n));
        }
        var a = t.prototype;
        return (
          (a.generateForToken = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = yield this.$4(e);
                return this.$5(n, t);
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.generatePrefixes = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t, a) {
                var i = this,
                  l = [],
                  s = this.$1.get(t);
                if (s != null) l = s;
                else {
                  for (var u = 0; u < t.length; ++u) {
                    var c = t.slice(0, u + 1);
                    (u === 0 &&
                      !r("WAFtsIsSearchQueryEligibleForMessageSearch")(c)) ||
                      l.push(
                        yield o("WAFtsGenBlindIndex").genBlindIndexBuffer(
                          c,
                          this.keyGenFn(),
                        ),
                      );
                  }
                  this.$1.put(t, l);
                }
                return (e || (e = n("Promise"))).all(
                  l.map(function (e) {
                    return i.$5(e, a);
                  }),
                );
              },
            );
            function a(e, n) {
              return t.apply(this, arguments);
            }
            return a;
          })()),
          (a.generateBoundsForToken = (function () {
            var t = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (t) {
                var r = yield this.$4(t),
                  o = new Uint8Array(this.blindIndexByteLength).fill(0),
                  a = new Uint8Array(this.blindIndexByteLength).fill(255);
                return (e || (e = n("Promise"))).all([
                  this.$5(r, o),
                  this.$5(r, a),
                ]);
              },
            );
            function r(e) {
              return t.apply(this, arguments);
            }
            return r;
          })()),
          (a.$4 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.$1.get(e),
                  n;
                return (
                  t != null
                    ? (n = t[t.length - 1])
                    : (n = yield o("WAFtsGenBlindIndex").genBlindIndexBuffer(
                        e,
                        this.keyGenFn(),
                      )),
                  n
                );
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$5 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e, t) {
                var n = e.slice(0, this.blindIndexByteLength);
                if (t == null) return n;
                var r;
                return (
                  typeof t == "string"
                    ? (r = new Uint8Array(yield this.$6(t)))
                    : (r = t),
                  o("WAArrayBufferUtils").concatBuffers([
                    n.slice(0, this.blindIndexByteLength),
                    r.slice(0, this.$3).buffer,
                  ])
                );
              },
            );
            function t(t, n) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          (a.$6 = (function () {
            var e = n("asyncToGeneratorRuntime").asyncToGenerator(
              function* (e) {
                var t = this.$2.get(e);
                if (t != null) return t;
                var n = yield o("WACryptoDependencies")
                  .getCrypto()
                  .subtle.digest(
                    "SHA-1",
                    o("WAArrayBufferUtils").stringToArrayBuffer(e),
                  );
                return (this.$2.put(e, n), n);
              },
            );
            function t(t) {
              return e.apply(this, arguments);
            }
            return t;
          })()),
          t
        );
      })();
    l.default = c;
  },
  98,
);
