__d(
  "areSpecsEqual",
  ["invariant", "isSpecEmpty"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    function e(t, n) {
      if (t === n) return !0;
      var o = r("isSpecEmpty")(t),
        a = r("isSpecEmpty")(n);
      if (o || a) return o === a;
      var i = typeof t;
      switch (i) {
        case "number":
          return isNaN(t) ? !1 : t === n;
        case "boolean":
        case "string":
          return t === n;
        case "object":
          if (Array.isArray(t)) return Array.isArray(n) ? u(t, n) : !1;
          if (
            typeof t != "object" ||
            typeof n != "object" ||
            t == null ||
            n == null
          )
            return !1;
          (d(t) || s(0, 11822, i), d(n) || s(0, 11822, typeof n));
          for (
            var l = new Set(Object.keys(t).concat(Object.keys(n))),
              c = l.values(),
              m = c.next();
            m.done === !1;
            m = c.next()
          )
            if (m.value !== "__dataID__" && !e(t[m.value], n[m.value]))
              return !1;
          return !0;
        default:
          s(0, 11823, i);
      }
    }
    function u(t, n) {
      if (t.length !== n.length) return !1;
      if (t.length === 1) return e(t[0], n[0]);
      for (var r = {}, o = 0, a = t.length; o < a; o++) {
        var i = c(t[o], n, r);
        if (i === -1) return !1;
        r[i] = !0;
      }
      return !0;
    }
    function c(t, n, r) {
      for (var o = 0, a = n.length; o < a; o++)
        if (r[String(o)] == null && e(t, n[o])) return o;
      return -1;
    }
    function d(e) {
      return {}.toString.call(e) === "[object Object]";
    }
    l.default = e;
  },
  98,
);
