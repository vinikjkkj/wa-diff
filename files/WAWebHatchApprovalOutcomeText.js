__d(
  "WAWebHatchApprovalOutcomeText",
  ["fbt", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e.record.outcomeLabel != null
        ? e.record.outcomeLabel
        : e.outcome === "allowed"
          ? s._(/*BTDS*/ "Allowed")
          : e.outcome === "always_allowed"
            ? s._(/*BTDS*/ "Always allowed")
            : e.outcome === "auto_allowed"
              ? s._(/*BTDS*/ "Auto allowed")
              : e.outcome === "denied"
                ? s._(/*BTDS*/ "Denied")
                : e.outcome === "always_denied"
                  ? s._(/*BTDS*/ "Always denied")
                  : e.outcome === "timed_out"
                    ? s._(/*BTDS*/ "Timed out")
                    : e.outcome === null || e.outcome === void 0
                      ? null
                      : (function () {
                          throw Error(
                            "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                              e.outcome,
                          );
                        })();
    }
    function d(e) {
      return e.outcome === "allowed" ||
        e.outcome === "always_allowed" ||
        e.outcome === "auto_allowed"
        ? "positive"
        : e.outcome === "denied" || e.outcome === "always_denied"
          ? "negative"
          : e.outcome === "timed_out" ||
              e.outcome === null ||
              e.outcome === void 0
            ? "neutral"
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e.outcome,
                );
              })();
    }
    ((l.hatchApprovalOutcomeText = c), (l.hatchApprovalOutcomeTone = d));
  },
  226,
);
