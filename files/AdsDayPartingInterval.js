__d(
  "AdsDayPartingInterval",
  ["DateConsts"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = function (t, n) {
      ((this.start_minute = t * o("DateConsts").MIN_PER_HOUR),
        (this.end_minute = n * o("DateConsts").MIN_PER_HOUR));
    };
    l.default = e;
  },
  98,
);
