__d(
  "WAOnceWithReset",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = null,
        n = function () {
          if (t == null) {
            for (var n = arguments.length, r = new Array(n), o = 0; o < n; o++)
              r[o] = arguments[o];
            t = { value: e.call.apply(e, [this].concat(r)) };
          }
          return t.value;
        };
      return (
        (n.reset = function () {
          t = null;
        }),
        n
      );
    }
    i.default = e;
  },
  66,
);
