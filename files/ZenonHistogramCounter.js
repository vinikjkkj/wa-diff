__d(
  "ZenonHistogramCounter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1e4,
      l = (function () {
        function t(t, n, r) {
          if (
            ((this.$1 = []),
            (this.$2 = 0),
            (this.$3 = 0),
            (this.$4 = 0),
            (this.$5 = !1),
            (this.$6 = 1),
            !(t > n || r <= 0))
          ) {
            ((Math.floor(t) !== t ||
              Math.floor(n) !== n ||
              Math.floor(r) !== r) &&
              (this.$6 = e),
              (this.$3 = Math.floor(t * this.$6 + 0.5)),
              (this.$2 = Math.floor(r * this.$6 + 0.5)));
            var o =
              Math.floor((Math.floor(n * this.$6 + 0.5) - this.$3) / this.$2) +
              2;
            ((this.$1 = new Array(o).fill(0)),
              (this.$4 = this.$3 + (o - 2) * this.$2),
              (this.$5 = !0));
          }
        }
        var n = t.prototype;
        return (
          (n.update = function (t) {
            if (!(!this.$5 || this.$1.length === 0)) {
              var e = Math.floor(t * this.$6 + 0.5);
              if (e < this.$3) ++this.$1[0];
              else if (e >= this.$4) this.$1[this.$1.length - 1]++;
              else {
                var n = Math.floor((e - this.$3 + 0.5) / this.$2) + 1;
                this.$1[n]++;
              }
            }
          }),
          (n.getStats = function () {
            return this.$5 ? this.$1 : null;
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
