__d(
  "WAWebWamQrCodeCount",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
        function e() {
          ((this.$1 = !1), (this.$2 = 0));
        }
        var t = e.prototype;
        return (
          (t.get = function () {
            return this.$2;
          }),
          (t.$3 = function () {
            this.$1 &&
              ((this.$1 = !1), (this.$2 = 0), (this.initialDisplayDate = null));
          }),
          (t.inc = function () {
            return (this.$3(), this.set(this.$2 + 1));
          }),
          (t.set = function (t) {
            if ((this.$3(), this.$2 !== t))
              return (
                t === 1 && (this.initialDisplayDate = s()),
                (this.$2 = t),
                this.get()
              );
          }),
          (t.reset = function () {
            this.$1 = !0;
          }),
          e
        );
      })(),
      l = new e();
    function s() {
      return Math.floor(window.performance.now());
    }
    i.default = l;
  },
  66,
);
