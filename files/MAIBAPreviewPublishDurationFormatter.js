__d(
  "MAIBAPreviewPublishDurationFormatter",
  ["fbt", "MAIBAPreviewPublishRawFieldValue"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = 60,
      u = 60 * e,
      c = 1440,
      d = c * e;
    function m(t) {
      var n = o("MAIBAPreviewPublishRawFieldValue").parseIntegerValue(t);
      if (n == null || n <= 0) return null;
      if (n % d === 0) {
        var r = n / d;
        return String(
          s._(/*BTDS*/ "", [
            s._plural(r, "attribution window duration in days"),
          ]),
        );
      }
      if (n % u === 0) {
        var a = n / u;
        return String(
          s._(/*BTDS*/ "", [
            s._plural(a, "attribution window duration in hours"),
          ]),
        );
      }
      if (n % e === 0) {
        var i = n / e;
        return String(
          s._(/*BTDS*/ "", [
            s._plural(i, "attribution window duration in minutes"),
          ]),
        );
      }
      return String(
        s._(/*BTDS*/ "", [
          s._plural(n, "attribution window duration in seconds"),
        ]),
      );
    }
    function p(e) {
      var t = o("MAIBAPreviewPublishRawFieldValue").parseIntegerValue(e);
      return t == null || t <= 0
        ? null
        : String(s._(/*BTDS*/ "", [s._plural(t, "duration in days")]));
    }
    ((l.formatDurationSecondsValue = m), (l.formatDurationDaysValue = p));
  },
  226,
);
