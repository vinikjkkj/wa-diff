__d(
  "KFEntity",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = 1,
      l = (function () {
        function t() {
          this.id = e++;
        }
        var n = t.prototype;
        return (
          (n.getID = function () {
            return this.id;
          }),
          t
        );
      })();
    i.default = l;
  },
  66,
);
