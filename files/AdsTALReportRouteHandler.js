__d(
  "AdsTALReportRouteHandler",
  ["AdsTALReportSurveyUpdateStateAction"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      if (!t.isStoppable()) {
        r("AdsTALReportSurveyUpdateStateAction").dispatch(
          { isShown: !1, nextUrl: null },
          { line: "22", module: "AdsTALReportRouteHandler.js", moduleID: i.id },
        );
        return;
      }
      t.stop();
      var n = t.getNextURI();
      r("AdsTALReportSurveyUpdateStateAction").dispatch(
        { isShown: !0, nextUrl: n },
        { line: "31", module: "AdsTALReportRouteHandler.js", moduleID: i.id },
      );
    }
    l.routeWillUnmount = e;
  },
  98,
);
