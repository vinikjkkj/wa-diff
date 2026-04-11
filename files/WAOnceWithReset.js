__d(
  "WAOnceWithReset",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {};
    function l(t) {
      var n = e,
        r = function () {
          if (n === e) {
            for (var r = arguments.length, o = new Array(r), a = 0; a < r; a++)
              o[a] = arguments[a];
            n = t.call.apply(t, [this].concat(o));
          }
          return n;
        };
      return (
        (r.reset = function () {
          n = e;
        }),
        r
      );
    }
    i.default = l;
  },
  66,
);
