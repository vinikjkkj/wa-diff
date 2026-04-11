__d(
  "WAWebAppealPictograms.react",
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
      var t = o("react-compiler-runtime").c(5),
        n = e.appealOutcome,
        r;
      e: switch (n) {
        case "PENDING": {
          var a;
          (t[0] === Symbol.for("react.memo_cache_sentinel")
            ? ((a = s.jsx(
                o("WAWebWdsPictoDocumentFeedbackWarningIcon.react")
                  .WdsPictoDocumentFeedbackWarningIcon,
                { width: u, height: u },
              )),
              (t[0] = a))
            : (a = t[0]),
            (r = a));
          break e;
        }
        case "CONTENT_UNAVAILABLE": {
          var i;
          (t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((i = s.jsx(
                o("WAWebWdsPictoTextFeedbackWarningIcon.react")
                  .WdsPictoTextFeedbackWarningIcon,
                { width: u, height: u },
              )),
              (t[1] = i))
            : (i = t[1]),
            (r = i));
          break e;
        }
        case "SUCCESS": {
          var l;
          (t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((l = s.jsx(
                o("WAWebWdsPictoTextFeedbackPositiveIcon.react")
                  .WdsPictoTextFeedbackPositiveIcon,
                { width: u, height: u },
              )),
              (t[2] = l))
            : (l = t[2]),
            (r = l));
          break e;
        }
        case "REJECT": {
          var c;
          (t[3] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = s.jsx(
                o("WAWebWdsPictoTextFeedbackNegativeIcon.react")
                  .WdsPictoTextFeedbackNegativeIcon,
                { width: u, height: u },
              )),
              (t[3] = c))
            : (c = t[3]),
            (r = c));
          break e;
        }
        case "NOT_APPEALED":
        case "NON_APPEALABLE": {
          var d;
          (t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = s.jsx(
                o("WAWebWdsPictoTextFeedbackWarningIcon.react")
                  .WdsPictoTextFeedbackWarningIcon,
                { width: u, height: u },
              )),
              (t[4] = d))
            : (d = t[4]),
            (r = d));
        }
      }
      return r;
    }
    l.default = c;
  },
  98,
);
