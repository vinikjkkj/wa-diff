__d(
  "ReactFiberErrorDialogWWW",
  ["ErrorNormalizeUtils", "ErrorPubSub", "LogHistory", "getErrorSafe"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t) {
      var n = t.componentStack,
        a = t.errorBoundary,
        i = r("getErrorSafe")(t.error);
      if (
        ((i.componentStack = t.componentStack),
        (i.loggingSource = "REACT_FIBER"),
        a != null &&
          a.suppressReactDefaultErrorLoggingIUnderstandThisWillMakeBugsHarderToFindAndFix)
      )
        return !1;
      var l = o("LogHistory").getInstance("react_fiber_error_logger");
      l.error(
        "capturedError",
        JSON.stringify({
          componentStack: n,
          error: { name: i.name, message: i.message, stack: i.stack },
        }),
      );
      var s = r("ErrorNormalizeUtils").normalizeError(i);
      return ((e || (e = r("ErrorPubSub"))).reportNormalizedError(s), !1);
    }
    l.showErrorDialog = s;
  },
  98,
);
