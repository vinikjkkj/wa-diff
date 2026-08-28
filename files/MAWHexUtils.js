__d(
  "MAWHexUtils",
  ["FBLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = e.toString(16);
      return (t.length - 1).toString(16) + t;
    }
    function s(e) {
      for (var t = 1; t < e.length; t++) {
        var n = e.substring(0, t),
          o = e.substring(t);
        if (o.length - 1 === parseInt(n, 16)) return parseInt(o, 16);
      }
      throw r("FBLogger")("messenger_web").mustfixThrow(
        "Cannot convert the order-preserving-hex back to number",
      );
    }
    ((l.orderPreservingHex = e), (l.reverseOrderPreservingHex = s));
  },
  98,
);
