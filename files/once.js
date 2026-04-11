__d(
  "once",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = l(e);
      for (var n in e)
        Object.prototype.hasOwnProperty.call(e, n) && (t[n] = e[n]);
      return t;
    }
    function l(e) {
      var t = e,
        n,
        r = function () {
          if (t) {
            for (var e = arguments.length, r = new Array(e), o = 0; o < e; o++)
              r[o] = arguments[o];
            ((n = t.apply(this, r)), (t = null));
          }
          return n;
        };
      return r;
    }
    i.default = e;
  },
  66,
);
