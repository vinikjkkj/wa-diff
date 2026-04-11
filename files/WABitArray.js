__d(
  "WABitArray",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 8,
      s = (function () {
        function t(t) {
          if (t <= 0) throw r("err")("BitArray:numBits should be positive");
          ((this.$1 = t), (this.$2 = new Uint8Array(Math.ceil(this.$1 / e))));
        }
        var n = t.prototype;
        return (
          (n.get = function (t) {
            var e = this.$3(t),
              n = e[0],
              r = e[1];
            return !!((this.$2[n] >> r) & 1);
          }),
          (n.set = function (t) {
            var e = this.$3(t),
              n = e[0],
              r = e[1];
            this.$2[n] |= 1 << r;
          }),
          (n.unset = function (t) {
            var e = this.$3(t),
              n = e[0],
              r = e[1];
            this.$2[n] &= ~(1 << r);
          }),
          (n.toggle = function (t) {
            var e = this.$3(t),
              n = e[0],
              r = e[1];
            this.$2[n] ^= 1 << r;
          }),
          (n.clear = function () {
            this.$2 = new Uint8Array(Math.ceil(this.$1 / e));
          }),
          (n.toArray = function () {
            for (var e = [], t = 0; t < this.$1; t++) e.push(this.get(t));
            return e;
          }),
          (n.toString = function () {
            return this.toArray()
              .map(function (e) {
                return e ? "1" : "0";
              })
              .join("");
          }),
          (n.toNumber = function () {
            return parseInt(this.toString(), 2);
          }),
          (n.$3 = function (n) {
            if (n < 0 || n >= this.$1)
              throw r("err")("BitArray:index out of bounds");
            var t = Math.floor(n / e),
              o = n - t * e;
            return [t, o];
          }),
          t
        );
      })();
    l.default = s;
  },
  98,
);
