__d(
  "WAWebFalcoLoggerCache",
  ["FalcoLoggerInternal"],
  function (t, n, r, o, a, i, l) {
    var e = new Map();
    function s(t) {
      var n = e.get(t);
      if (n != null) return n;
      var r = o("FalcoLoggerInternal").create(t, { r: 1 });
      return (e.set(t, r), r);
    }
    l.getFalcoLogger = s;
  },
  98,
);
