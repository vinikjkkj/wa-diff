__d(
  "relay-runtime/util/StringInterner",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = new Map(),
      l = 1,
      s = d(),
      u = "	",
      c = "\v";
    function d() {
      for (var e = new Set(), t = 0; t < 10; ++t) e.add(t.toString());
      return e;
    }
    function m(e) {
      return (e[0] === u && s.has(e[1])) || e[0] === c ? c + e : e;
    }
    function p(t, n) {
      if (n == null || t.length < n) return m(t);
      var r = e.get(t);
      return (r != null || ((r = u + l++), e.set(t, r)), r);
    }
    a.exports = { intern: p };
  },
  null,
);
