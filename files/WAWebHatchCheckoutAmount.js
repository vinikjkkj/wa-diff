__d(
  "WAWebHatchCheckoutAmount",
  ["WAWebHatchJsonReaders"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (o("WAWebHatchJsonReaders").isBlankText(e)) return null;
      var n = e.trim();
      return o("WAWebHatchJsonReaders").isBlankText(t)
        ? n
        : n + " " + t.trim().toUpperCase();
    }
    l.formatCheckoutAmount = e;
  },
  98,
);
