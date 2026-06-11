__d(
  "WAWebHatchMetadataSyncValidationError",
  ["$InternalEnum", "WAWebHandleMsgError"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum")({
        UNEXPECTED_SENDER: "hatch_metadata_unexpected_sender",
        EMPTY_PAYLOAD: "hatch_metadata_empty_payload",
        UNHANDLED_CONTROL: "hatch_metadata_unhandled_control",
        DECODE_FAILURE: "hatch_metadata_decode_failure",
        UNEXPECTED_DECODE_FAILURE: "hatch_metadata_unexpected_decode_failure",
      }),
      s = (function (e) {
        function t() {
          for (var t, n = arguments.length, r = new Array(n), o = 0; o < n; o++)
            r[o] = arguments[o];
          return (
            (t = e.call.apply(e, [this].concat(r)) || this),
            (t.name = "HatchMetadataSyncValidationError"),
            babelHelpers.assertThisInitialized(t) ||
              babelHelpers.assertThisInitialized(t)
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(o("WAWebHandleMsgError").MessageValidationError);
    ((l.HatchMetadataSyncValidationCode = e),
      (l.HatchMetadataSyncValidationError = s));
  },
  98,
);
