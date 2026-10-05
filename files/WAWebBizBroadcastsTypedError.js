__d(
  "WAWebBizBroadcastsTypedError",
  ["$InternalEnum", "WAWebContactImportTemplateParsingUtils"],
  function (t, n, r, o, a, i, l) {
    var e = n("$InternalEnum").Mirrored(["TOO_SMALL", "TEMPLATE_MISMATCH"]),
      s = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, "TypedError") || this),
            (n.name = "WAWebBizBroadcastsTypedError"),
            (n.type = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    function u(e) {
      var t = e.headerRow,
        n = t[0],
        r = babelHelpers.arrayLikeToArray(t).slice(1);
      return (
        o("WAWebContactImportTemplateParsingUtils").isPhoneFieldName(n) &&
        r.every(function (e) {
          return e == null || String(e).trim() === "";
        }) &&
        e.maxPopulatedRowWidth <= 1
      );
    }
    ((l.AudienceError = e),
      (l.WAWebBizBroadcastsTypedError = s),
      (l.isPhoneOnlyTemplateShape = u));
  },
  98,
);
