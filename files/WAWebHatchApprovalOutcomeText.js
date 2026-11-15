__d(
  "WAWebHatchApprovalOutcomeText",
  ["fbt", "WAWebL10N", "react"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return m(e)
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
    function m(e) {
      var t = e.record;
      return (
        t.outcomeLabel != null &&
        !(
          t.outcomeLabel === "Denied" &&
          e.outcome === "denied" &&
          t.status === "denied" &&
          t.decision === "deny" &&
          r("WAWebL10N").getLocale() === "ml_IN"
        )
      );
    }
    ((l.hatchApprovalOutcomeText = c), (l.hatchApprovalOutcomeTone = d));
  },
  226,
);
