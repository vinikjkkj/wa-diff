__d(
  "WAWebRichResponseValidationError",
  ["$InternalEnum", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        INVALID_MESSAGE_TYPE: "rich_response_invalid_name",
        MISSING_MESSAGE_TYPE: "rich_response_missing_message_type",
        INVALID_SENDER: "rich_response_invalid_sender",
      }),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "RichResponseValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError);
    ((l.RichResponseValidationErrorCode = e),
      (l.RichResponseValidationError = s));
  },
  98,
);
