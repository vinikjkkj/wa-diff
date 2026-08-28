__d(
  "NamedJSONPathExpression",
  [],
  function (t, n, r, o, a, i) {
    var e = (function () {
        function e(e) {
          ((this.$1 = e), (this.$2 = new l()));
        }
        var t = e.prototype;
        return (
          (t.prop = function (t) {
            return (this.$2.prop(t), this);
          }),
          (t.toString = function () {
            return "{result=" + this.$1 + ":" + String(this.$2) + "}";
          }),
          (t.valueOf = function () {
            return this.toString();
          }),
          e
        );
      })(),
      l = (function () {
        function e() {
          this.$1 = "$";
        }
        var t = e.prototype;
        return (
          (t.prop = function (t) {
            return ((this.$1 += "." + t), this);
          }),
          (t.toString = function () {
            return this.$1;
          }),
          (t.valueOf = function () {
            return this.toString();
          }),
          e
        );
      })();
    i.default = e;
  },
  66,
);
