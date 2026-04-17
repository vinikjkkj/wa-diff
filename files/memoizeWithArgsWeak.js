__d(
  "memoizeWithArgsWeak",
  ["MultiKeyMap"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      t === void 0 && (t = "");
      var n = new (r("MultiKeyMap"))();
      return function () {
        for (var t = arguments.length, r = new Array(t), o = 0; o < t; o++)
          r[o] = arguments[o];
        var a = n.get(r);
        if (a !== void 0) return a;
        var i = e.apply(void 0, r);
        return (n.set(r, i), i);
      };
    }
    l.default = e;
  },
  98,
);
