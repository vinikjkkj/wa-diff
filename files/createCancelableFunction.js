__d(
  "createCancelableFunction",
  ["emptyFunction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e,
        n = function () {
          for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++)
            n[r] = arguments[r];
          return t.apply(this, n);
        };
      return (
        (n.cancel = function () {
          t = r("emptyFunction");
        }),
        n
      );
    }
    l.default = e;
  },
  98,
);
