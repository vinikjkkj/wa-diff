__d(
  "PEAppLoggerEventCounter",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
        function e() {
          this.$1 = 0;
        }
        var t = e.prototype;
        return (
          (t.get = function () {
            return this.$1;
          }),
          (t.increase = function () {
            return ++this.$1;
          }),
          e
        );
      })(),
      l = new e();
    i.default = l;
  },
  66,
);
