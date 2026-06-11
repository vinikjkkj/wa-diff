__d(
  "WAWebHatchDecodeError",
  ["$InternalEnum"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = n("$InternalEnum")({
        PARSE_FAILURE: "hatch_metadata_parse_failure",
        INVALID_VERSION: "hatch_metadata_invalid_version",
        INVALID_PAYLOAD: "hatch_metadata_invalid_payload",
        INVALID_OP_KEY: "hatch_metadata_invalid_op_key",
      }),
      l = (function (e) {
        function t(t) {
          var n;
          return (
            (n = e.call(this, "HatchDecodeError: " + String(t)) || this),
            (n.reason = t),
            n
          );
        }
        return (babelHelpers.inheritsLoose(t, e), t);
      })(babelHelpers.wrapNativeSuper(Error));
    ((i.HatchDecodeReason = e), (i.HatchDecodeError = l));
  },
  66,
);
