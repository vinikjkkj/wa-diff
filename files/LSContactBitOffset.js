__d(
  "LSContactBitOffset",
  ["I64", "LSBitFlag", "LSBitOffset"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = ["capabilities", "capabilities2"];
    function u(e, t) {
      return c(e, t, !1);
    }
    function c(t, n, r) {
      var a,
        i = n.capabilities,
        l = n.capabilities2;
      if (t >= 64) {
        var s;
        return l == null
          ? r
          : o("LSBitFlag").has(
              (e || (e = o("I64"))).lsl_(e.one, t - 64),
              (s = n.capabilities2) != null ? s : o("LSBitOffset").empty,
            );
      }
      return i == null
        ? r
        : o("LSBitFlag").has(
            (e || (e = o("I64"))).lsl_(e.one, t),
            (a = n.capabilities) != null ? a : o("LSBitOffset").empty,
          );
    }
    function d(t, n) {
      return o("LSBitFlag").has(
        (e || (e = o("I64"))).lsl_(e.one, t - 64),
        n != null ? n : o("LSBitOffset").empty,
      );
    }
    ((l.contactCapabilityFields = s),
      (l.has = u),
      (l.hasWithDefault = c),
      (l.contactCapabilitiesHas = d));
  },
  98,
);
