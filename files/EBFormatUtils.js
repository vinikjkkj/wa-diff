__d(
  "EBFormatUtils",
  ["I64", "WATimeUtils"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n) {
      if (t != null)
        return (e || (e = o("I64"))).min(
          t,
          e.of_float(o("WATimeUtils").millisTime()),
        );
      switch (n) {
        case "before":
          return (e || (e = o("I64"))).of_float(o("WATimeUtils").millisTime());
        case "after":
          return (e || (e = o("I64"))).zero;
        default:
          return (e || (e = o("I64"))).max_int;
      }
    }
    l.adjustTs = s;
  },
  98,
);
