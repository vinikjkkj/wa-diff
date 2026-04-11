__d(
  "WAWebIsCagGroupCache",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
        function e() {
          this.$1 = new Set();
        }
        var t = e.prototype;
        return (
          (t.add = function (t) {
            this.$1.add(t.toString());
          }),
          (t.remove = function (t) {
            this.$1.delete(t.toString());
          }),
          (t.isCag = function (t) {
            return this.$1.has(t.toString());
          }),
          (t.clear = function () {
            this.$1.clear();
          }),
          e
        );
      })(),
      l = new e(),
      s = l;
    i.default = s;
  },
  66,
);
