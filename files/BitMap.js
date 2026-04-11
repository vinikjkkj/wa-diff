__d(
  "BitMap",
  [],
  function (t, n, r, o, a, i) {
    var e = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_",
      l = (function () {
        function e() {
          ((this.$1 = []), (this.$2 = null));
        }
        var t = e.prototype;
        return (
          (t.set = function (t) {
            return (
              this.$2 != null && !this.$1[t] && (this.$2 = null),
              (this.$1[t] = 1),
              this
            );
          }),
          (t.toString = function () {
            for (var e = [], t = 0; t < this.$1.length; t++)
              e.push(this.$1[t] ? 1 : 0);
            return e.length ? u(e.join("")) : "";
          }),
          (t.toCompressedString = function () {
            if (this.$1.length === 0) return "";
            if (this.$2 != null) return this.$2;
            for (
              var e = [], t = 1, n = this.$1[0] || 0, r = n.toString(2), o = 1;
              o < this.$1.length;
              o++
            ) {
              var a = this.$1[o] || 0;
              a === n ? t++ : (e.push(s(t)), (n = a), (t = 1));
            }
            return (t && e.push(s(t)), (this.$2 = u(r + e.join(""))));
          }),
          e
        );
      })();
    function s(e) {
      var t = e.toString(2),
        n = "0".repeat(t.length - 1);
      return n + t;
    }
    function u(t) {
      for (
        var n = (t + "00000").match(/[01]{6}/g), r = "", o = 0;
        n != null && o < n.length;
        o++
      )
        r += e[parseInt(n[o], 2)];
      return r;
    }
    i.default = l;
  },
  66,
);
