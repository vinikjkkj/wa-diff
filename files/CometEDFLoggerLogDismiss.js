__d(
  "CometEDFLoggerLogDismiss",
  ["CometEdfFalcoEvent"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      r("CometEdfFalcoEvent").logImmediately(function () {
        return { nux: e, type: "dismiss" };
      });
    }
    l.markMessageSeenByUser = e;
  },
  98,
);
