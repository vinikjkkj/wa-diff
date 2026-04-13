__d(
  "WAWebReportPictograms.react",
  [
    "WAWebWdsPictoDocumentFeedbackWarningIcon.react",
    "WAWebWdsPictoTextFeedbackNegativeIcon.react",
    "WAWebWdsPictoTextFeedbackPositiveIcon.react",
    "WAWebWdsPictoTextFeedbackWarningIcon.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 88;
    function c(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.reportOutcome;
      switch (n) {
        case "PENDING": {
          var r;
          return (
            t[0] === Symbol.for("react.memo_cache_sentinel")
              ? ((r = s.jsx(
                  o("WAWebWdsPictoDocumentFeedbackWarningIcon.react")
                    .WdsPictoDocumentFeedbackWarningIcon,
                  { width: u, height: u },
                )),
                (t[0] = r))
              : (r = t[0]),
            r
          );
        }
        case "SUCCESS": {
          var a;
          return (
            t[1] === Symbol.for("react.memo_cache_sentinel")
              ? ((a = s.jsx(
                  o("WAWebWdsPictoTextFeedbackPositiveIcon.react")
                    .WdsPictoTextFeedbackPositiveIcon,
                  { width: u, height: u },
                )),
                (t[1] = a))
              : (a = t[1]),
            a
          );
        }
        case "FAIL": {
          var i;
          return (
            t[2] === Symbol.for("react.memo_cache_sentinel")
              ? ((i = s.jsx(
                  o("WAWebWdsPictoTextFeedbackNegativeIcon.react")
                    .WdsPictoTextFeedbackNegativeIcon,
                  { width: u, height: u },
                )),
                (t[2] = i))
              : (i = t[2]),
            i
          );
        }
        case "CONTENT_UNAVAILABLE": {
          var l;
          return (
            t[3] === Symbol.for("react.memo_cache_sentinel")
              ? ((l = s.jsx(
                  o("WAWebWdsPictoTextFeedbackWarningIcon.react")
                    .WdsPictoTextFeedbackWarningIcon,
                  { width: u, height: u },
                )),
                (t[3] = l))
              : (l = t[3]),
            l
          );
        }
        default:
          return null;
      }
    }
    l.default = c;
  },
  98,
);
