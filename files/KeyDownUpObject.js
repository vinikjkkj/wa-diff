__d(
  "KeyDownUpObject",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e, t) {
        ((this.action = null),
          (this.key_code = null),
          (this.action = e),
          (this.key_code = t));
      }
      var t = e.prototype;
      return (
        (t.toJSON = function () {
          return { action: this.action, key_code: this.key_code };
        }),
        (t.isEqual = function (n) {
          return n instanceof e
            ? this.action === n.action && this.key_code === n.key_code
            : !1;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
