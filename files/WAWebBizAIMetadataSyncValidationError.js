__d(
  "WAWebBizAIMetadataSyncValidationError",
  ["$InternalEnum", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        UNEXPECTED_SENDER: "biz_ai_metadata_sync_unexpected_sender",
      }),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "BizAIMetadataSyncValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError);
    ((l.BizAIMetadataSyncValidationCode = e),
      (l.BizAIMetadataSyncValidationError = s));
  },
  98,
);
