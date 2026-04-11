__d(
  "isEmpty",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(e) {
      if (Array.isArray(e)) return e.length === 0;
      if (typeof e == "object") {
        if (e) {
          !u(e) || e.size === void 0 || s(0, 1445);
          for (var t in e) return !1;
        }
        return !0;
      } else return !e;
    }
    function u(e) {
      return typeof Symbol == "undefined"
        ? !1
        : e[typeof Symbol == "function" ? Symbol.iterator : "@@iterator"] !=
            null;
    }
    l.default = e;
  },
  98,
);
