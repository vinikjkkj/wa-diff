__d(
  "WebBloksRsaTimelockNativeArithmetic",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
        function e(e, t) {
          if (
            ((this.$2 = BigInt("0x" + e)),
            (this.$1 = BigInt("0x" + t)),
            this.$2 === BigInt(0) || this.$2 % BigInt(2) === BigInt(0))
          ) {
            var n = new Error("RSA modulus must be odd");
            throw (n.stack, n);
          }
        }
        var t = e.prototype;
        return (
          (t.square = function () {
            this.$1 = (this.$1 * this.$1) % this.$2;
          }),
          (t.toHex = function () {
            return this.$1.toString(16);
          }),
          e
        );
      })(),
      l = {
        isSupported: function () {
          return typeof BigInt == "function";
        },
        create: function (n, r) {
          return new e(n, r);
        },
      },
      s = l;
    i.default = s;
  },
  66,
);
