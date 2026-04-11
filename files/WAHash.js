__d(
  "WAHash",
  ["err"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new WeakMap(),
      s = 0;
    function u(t) {
      if (t === null) return "null";
      switch (typeof t) {
        case "undefined":
          return "undefined";
        case "number":
          return "n:" + t;
        case "string":
          return "s:" + t;
        case "boolean":
          return "b:" + t.toString();
        case "object": {
          var n = e.get(t);
          return (n == null && ((n = s++), e.set(t, n)), "o:" + n);
        }
        default:
          throw r("err")("Unsupported type");
      }
    }
    l.default = u;
  },
  98,
);
