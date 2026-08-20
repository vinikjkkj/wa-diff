__d(
  "LSIntEnum",
  ["I64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map();
    function u(t) {
      var n = s.get(t);
      if (n != null) return n;
      var r = (e || (e = o("I64"))).of_float(t);
      return (s.set(t, r), r);
    }
    function c(t) {
      return (e || (e = o("I64"))).to_float(t);
    }
    function d(t) {
      return (e || (e = o("I64"))).to_float(t);
    }
    function m(e, t) {
      return e == null ? !1 : c(e) === t;
    }
    ((l.ofNumber = u), (l.toNumber = c), (l.unwrapIntEnum = d), (l.equal = m));
  },
  98,
);
