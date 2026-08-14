__d(
  "memoizeOneWithArgs",
  ["areEqual"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      n === void 0 && (n = e || (e = r("areEqual")));
      var o,
        a,
        i = !1;
      return function () {
        for (var e = arguments.length, r = new Array(e), l = 0; l < e; l++)
          r[l] = arguments[l];
        return (
          (i && n(r, o)) || ((o = r), (a = t.apply(void 0, r)), (i = !0)),
          a
        );
      };
    }
    l.default = s;
  },
  98,
);
