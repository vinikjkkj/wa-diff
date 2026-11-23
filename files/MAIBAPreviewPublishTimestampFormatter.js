__d(
  "MAIBAPreviewPublishTimestampFormatter",
  ["LocalDateTime", "MAIBAPreviewPublishRawFieldValue", "Timezone"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}/;
    function s(e) {
      return e.format("M j, Y g:i A", { skipPatternLocalization: !1 });
    }
    function u(t, n) {
      var a = o("MAIBAPreviewPublishRawFieldValue").parseIntegerValue(t);
      if (a != null) {
        var i;
        if (a <= 0) return null;
        var l =
          (i = n != null ? n : o("Timezone").getEnvironmentTimezoneID()) != null
            ? i
            : o("Timezone").UTC;
        return s(r("LocalDateTime").fromInstant(a, l));
      }
      if (typeof t != "string") return null;
      var u = o("MAIBAPreviewPublishRawFieldValue").unquote(t);
      return e.test(u) ? s(r("LocalDateTime").fromISOString(u)) : null;
    }
    l.formatTimestampValue = u;
  },
  98,
);
