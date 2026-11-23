__d(
  "MAIBAPreviewPublishPercentFormatter",
  ["MAIBAPreviewPublishRawFieldValue", "createIntlPercentFbtFormatter"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("createIntlPercentFbtFormatter")(0, !1),
      s = r("createIntlPercentFbtFormatter")(1, !1),
      u = r("createIntlPercentFbtFormatter")(2, !1);
    function c(t) {
      var n = o("MAIBAPreviewPublishRawFieldValue").parseNumberValue(t);
      if (n == null) return null;
      var r = Math.round(n * 100) / 100;
      return Number.isInteger(r)
        ? String(e(r))
        : Number.isInteger(r * 10)
          ? String(s(r))
          : String(u(r));
    }
    l.formatPercentageValue = c;
  },
  98,
);
