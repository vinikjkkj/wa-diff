__d(
  "stringifyCyclicJson",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = function (t) {
      return ["Element", t.localName].concat(t.className.split(" ")).join(".");
    };
    function l(t) {
      try {
        var n = new Set();
        return JSON.stringify(t, function (t, r) {
          if (r != null && typeof r == "object") {
            if (r instanceof Element) return e(r);
            if (n.has(r)) return "<Cyclic Dependency>";
            n.add(r);
          }
          return r;
        });
      } catch (e) {
        return "<Error Stringifying Trace>";
      }
    }
    i.default = l;
  },
  66,
);
