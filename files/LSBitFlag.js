__d(
  "LSBitFlag",
  ["I64"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      return (e || (e = o("I64"))).equal(e.and_(n, t), t);
    }
    function u(t, n) {
      return (e || (e = o("I64"))).or_(n, t);
    }
    function c(t, n) {
      return (e || (e = o("I64"))).and_(n, e.lognot(t));
    }
    ((l.has = s),
      (l.set = u),
      (l.clear = c),
      (l.empty = (e || (e = o("I64"))).zero));
  },
  98,
);
