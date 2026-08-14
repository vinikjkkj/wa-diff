__d(
  "LSBitOffset",
  ["I64", "LSBitFlag"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      return o("LSBitFlag").set(
        (e || (e = o("I64"))).lsl_(e.one, e.to_int32(t)),
        n,
      );
    }
    function u(t, n) {
      return o("LSBitFlag").clear(
        (e || (e = o("I64"))).lsl_(e.one, e.to_int32(t)),
        n,
      );
    }
    ((l.set = s), (l.clear = u), (l.empty = (e || (e = o("I64"))).zero));
  },
  98,
);
