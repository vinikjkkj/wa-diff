__d(
  "flattenPHPQueryData",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      return u(e, "", {});
    }
    function u(e, t, n) {
      if (e == null) n[t] = void 0;
      else if (typeof e == "object") {
        typeof e.appendChild != "function" || s(0, 2616);
        for (var r in e)
          r !== "$$typeof" &&
            Object.prototype.hasOwnProperty.call(e, r) &&
            e[r] !== void 0 &&
            u(e[r], t ? t + "[" + r + "]" : r, n);
      } else n[t] = e;
      return n;
    }
    l.default = e;
  },
  98,
);
