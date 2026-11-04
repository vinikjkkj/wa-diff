__d(
  "WAWebHatchPermissionsFailureReason",
  [],
  function (t, n, r, o, a, i) {
    function e(e) {
      return "http_" + e;
    }
    function l(e) {
      return (function (e) {
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "ok"
        )
          return null;
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "conflict"
        )
          return "conflict";
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unavailable" &&
          "failureReason" in e
        ) {
          var t = e.failureReason;
          return t != null ? t : "generic";
        }
        if (
          ((typeof e == "object" && e !== null) || typeof e == "function") &&
          e.kind === "unavailable"
        )
          return "generic";
        throw Error(
          "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
            e,
        );
      })(e);
    }
    ((i.hatchPermissionsHttpFailureReason = e),
      (i.hatchPermissionsFailureReason = l));
  },
  66,
);
