__d(
  "WAWebPdfViewerLongAnimationFrameTracker",
  ["WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c = [],
      d = !1;
    function m() {
      d ||
        ((c = []),
        (d = !0),
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[pdfViewer:longAnimationFrameTracker] started",
            ])),
        ));
    }
    function p(e, t, n) {
      d &&
        (c.push({
          blockingDuration: e,
          longestScriptInvoker: t,
          longestScriptDuration: n,
        }),
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[pdfViewer:LAF] detected cnt=",
              " blockDur=",
              "ms script=",
              " ",
              "ms",
            ])),
          c.length,
          e,
          t,
          n,
        ));
    }
    function _() {
      return d;
    }
    function f() {
      if (!d) return { count: 0, entries: [] };
      var e = { count: c.length, entries: c };
      return (
        (d = !1),
        (c = []),
        o("WALogger").LOG(
          u ||
            (u = babelHelpers.taggedTemplateLiteralLoose([
              "[pdfViewer:longAnimationFrameTracker] consumed count=",
              "",
            ])),
          e.count,
        ),
        e
      );
    }
    ((l.startPdfViewerLongAnimationFrameTracking = m),
      (l.recordPdfViewerLongAnimationFrame = p),
      (l.isPdfViewerLongAnimationFrameTrackingActive = _),
      (l.consumePdfViewerLongAnimationFrameData = f));
  },
  98,
);
