__d(
  "AdsPreemptiveErrorUtils",
  ["AdsError", "AdsPreemptiveErrorsList"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      return o("AdsPreemptiveErrorsList").PREEMPTIVE_ERRORS.has(e);
    }
    function s(e) {
      return (e == null ? void 0 : e.level) === r("AdsError").Level.QUIET;
    }
    function u(e) {
      return m(e);
    }
    function c(t) {
      return t.map(function (t) {
        if (!e(t.key)) return t;
        var n = t.key;
        return r("AdsError").createError(
          n,
          t.message,
          babelHelpers.extends({}, t.getOptions(), {
            level: r("AdsError").Level.QUIET,
          }),
        );
      });
    }
    var d = new Set(["ERROR", "ERROR_DEPENDENCY", "CANCELED_DEPENDENCY"]);
    function m(e) {
      return (
        (e == null ? void 0 : e.action) === "add" &&
        !d.has(e == null ? void 0 : e.publishStatus)
      );
    }
    ((l.isPreemptiveError = e),
      (l.shouldUsePreemptiveErrorTreatment = s),
      (l.shouldAdObjectHidePreemptiveErrors = u),
      (l.setPreemptiveErrorsToQuietErrors = c));
  },
  98,
);
