__d(
  "keyMirrorRecursive",
  ["invariant", "isTruthy"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = function (n, o) {
      var t = {};
      u(n) || s(0, 580);
      for (var a in n)
        if (Object.prototype.hasOwnProperty.call(n, a)) {
          var i = n[a],
            l = r("isTruthy")(o) ? o + "." + a : a;
          (u(i) ? (i = e(i, l)) : (i = l), (t[a] = i));
        }
      return t;
    };
    function u(e) {
      return e instanceof Object && !Array.isArray(e);
    }
    var c = e;
    l.default = c;
  },
  98,
);
