__d(
  "createArrayFromMixed",
  ["invariant"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.length;
      if (
        ((!Array.isArray(e) &&
          (typeof e == "object" || typeof e == "function")) ||
          s(0, 3914),
        typeof t == "number" || s(0, 3915),
        t === 0 || t - 1 in e || s(0, 3916),
        typeof e.callee != "function" || s(0, 3917),
        e.hasOwnProperty)
      )
        try {
          return Array.prototype.slice.call(e);
        } catch (e) {}
      for (var n = Array(t), r = 0; r < t; r++) n[r] = e[r];
      return n;
    }
    function u(e) {
      return (
        !!e &&
        (typeof e == "object" || typeof e == "function") &&
        "length" in e &&
        !("setInterval" in e) &&
        typeof e.nodeType != "number" &&
        (Array.isArray(e) || "callee" in e || "item" in e)
      );
    }
    function c(t) {
      return u(t) ? (Array.isArray(t) ? t.slice() : e(t)) : [t];
    }
    l.default = c;
  },
  98,
);
