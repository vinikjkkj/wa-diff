__d(
  "WAFtsV3BlindIndexGenerator",
  [
    "WAArrayBufferUtils",
    "WACryptoDependencies",
    "WAFtsGenBlindIndex",
    "WAFtsIsSearchQueryEligibleForMessageSearch",
    "WALruCache",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 32,
      s = 3,
      u = (function () {
        function t(t, n, r) {
          (n === void 0 && (n = e),
            r === void 0 && (r = s),
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
            (this.keyGenFn = t),
            (this.blindIndexByteLength = n),
            (this.$3 = r));
        }
        var n = t.prototype;
        return (
          (n.generateForToken = async function (t, n) {
            var e = await this.$4(t);
            return this.$5(e, n);
          }),
          (n.generatePrefixes = async function (t, n) {
            var e = this,
              a = [],
              i = this.$1.get(t);
            if (i != null) a = i;
            else {
              for (var l = 0; l < t.length; ++l) {
                var s = t.slice(0, l + 1);
                (l === 0 &&
                  !r("WAFtsIsSearchQueryEligibleForMessageSearch")(s)) ||
                  a.push(
                    await o("WAFtsGenBlindIndex").genBlindIndexBuffer(
                      s,
                      this.keyGenFn(),
                    ),
                  );
              }
              this.$1.put(t, a);
            }
            return Promise.all(
              a.map(function (t) {
                return e.$5(t, n);
              }),
            );
          }),
          (n.generateBoundsForToken = async function (t) {
            var e = await this.$4(t),
              n = new Uint8Array(this.blindIndexByteLength).fill(0),
              r = new Uint8Array(this.blindIndexByteLength).fill(255);
            return Promise.all([this.$5(e, n), this.$5(e, r)]);
          }),
          (n.$4 = async function (t) {
            var e = this.$1.get(t),
              n;
            return (
              e != null
                ? (n = e[e.length - 1])
                : (n = await o("WAFtsGenBlindIndex").genBlindIndexBuffer(
                    t,
                    this.keyGenFn(),
                  )),
              n
            );
          }),
          (n.$5 = async function (t, n) {
            var e = t.slice(0, this.blindIndexByteLength);
            if (n == null) return e;
            var r;
            return (
              typeof n == "string"
                ? (r = new Uint8Array(await this.$6(n)))
                : (r = n),
              o("WAArrayBufferUtils").concatBuffers([
                e.slice(0, this.blindIndexByteLength),
                r.slice(0, this.$3).buffer,
              ])
            );
          }),
          (n.$6 = async function (t) {
            var e = this.$2.get(t);
            if (e != null) return e;
            var n = await o("WACryptoDependencies")
              .getCrypto()
              .subtle.digest(
                "SHA-1",
                o("WAArrayBufferUtils").stringToArrayBuffer(t),
              );
            return (this.$2.put(t, n), n);
          }),
          t
        );
      })();
    l.default = u;
  },
  98,
);
