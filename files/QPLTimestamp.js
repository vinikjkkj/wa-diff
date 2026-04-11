__d(
  "QPLTimestamp",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    function e(e) {
      if (e === 0) return "0";
      var t = e.toFixed(6).split(".", 2),
        n = t[0],
        r = t[1];
      return n === "0" ? r.replace(/^0+/, "") : n + r;
    }
    function l(t, n) {
      var r = n - t;
      return e(r);
    }
    ((i.timestampToSerializedNanoseconds = e),
      (i.calculateDurationAsNanoseconds = l));
  },
  66,
);
