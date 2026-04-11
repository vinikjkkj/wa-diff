__d(
  "WAWebPdfViewerAnrTracker",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = 0,
      d = !1;
    function m() {
      d ||
        ((c = 0),
        (d = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[pdfViewer:anrTracker] started",
            ])),
        ));
    }
    function p() {
      d &&
        (c++,
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[pdfViewer:anrTracker] ANR detected, count=",
              "",
            ])),
          c,
        ));
    }
    function _() {
      return d;
    }
    function f() {
      if (!d) return 0;
      var e = c;
      return (
        (d = !1),
        (c = 0),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[pdfViewer:anrTracker] consumed count=",
              "",
            ])),
          e,
        ),
        e
      );
    }
    ((l.startPdfViewerAnrTracking = m),
      (l.incrementPdfViewerAnrCount = p),
      (l.isPdfViewerAnrTrackingActive = _),
      (l.consumePdfViewerAnrCount = f));
  },
  98,
);
