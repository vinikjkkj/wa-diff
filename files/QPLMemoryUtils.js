__d(
  "QPLMemoryUtils",
  ["MemoryUtils", "QPLUserFlow"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = o("MemoryUtils").getCurrentMemory(),
        n = t.usedJSHeapSize;
      r("QPLUserFlow").addAnnotations(e, { int: { usedJSHeapSizeStart: n } });
    }
    function s(e) {
      var t = o("MemoryUtils").getCurrentMemory(),
        n = t.usedJSHeapSize;
      r("QPLUserFlow").addAnnotations(e, { int: { usedJSHeapSizeEnd: n } });
    }
    ((l.logMemoryForQPLStart = e), (l.logMemoryForQPLEnd = s));
  },
  98,
);
