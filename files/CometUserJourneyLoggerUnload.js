__d(
  "CometUserJourneyLoggerUnload",
  ["Run"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = null,
      s = !1;
    function u(t) {
      ((e = t),
        s ||
          ((s = !0),
          o("Run").onBeforeUnload(function () {
            e != null && e();
          }, !1)));
    }
    l.registerUnloadHandler = u;
  },
  98,
);
