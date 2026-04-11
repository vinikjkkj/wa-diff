__d(
  "WebBloksRegexUtils",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      var t = e.match(/\(\?([imsuy]+)\)/);
      if (!t) return { normalizedPattern: e };
      var n = t[1],
        r = t.index,
        o = r + t[0].length,
        a = e.slice(0, r) + e.slice(o);
      return { normalizedPattern: a, flags: n };
    }
    i.extractPatternAndFlags = e;
  },
  66,
);
