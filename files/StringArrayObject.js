__d(
  "StringArrayObject",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      function e(e) {
        ((this.strings = []), (this.strings = e));
      }
      var t = e.prototype;
      return (
        (t.toJSON = function () {
          return this.strings;
        }),
        (t.isEqual = function (n) {
          if (!(n instanceof e)) return !1;
          if (n.strings === this.strings) return !0;
          if (n.strings.length !== this.strings.length) return !1;
          for (var t = 0; t < this.strings.length; t++)
            if (this.strings[t] !== n.strings[t]) return !1;
          return !0;
        }),
        e
      );
    })();
    i.default = e;
  },
  66,
);
