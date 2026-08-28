__d(
  "KFRAFEngine",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e() {
        (this.$1,
          this.$2,
          (this.$3 = !1),
          (this.$4 = []),
          (this.$5 = this.$6.bind(this)));
      }
      var t = e.prototype;
      return (
        (t.start = function () {
          ((this.$3 = !0), window.requestAnimationFrame(this.$5));
        }),
        (t.stop = function () {
          ((this.$3 = !1), (this.$2 = 0), (this.$1 = 0));
        }),
        (t.registerCallback = function (t) {
          this.$4.push(t);
        }),
        (t.$6 = function (t) {
          if (this.$3) {
            ((this.$2 = this.$1 || t), (this.$1 = t));
            for (
              var e = this.$4.length, n = this.$1 - this.$2, r = 0;
              r < e;
              r++
            )
              this.$4[r](this.$1, n);
            window.requestAnimationFrame(this.$5);
          }
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
