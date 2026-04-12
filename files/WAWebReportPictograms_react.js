__d(
  "WAWebReportPictograms.react",
  [
    "WAWebWdsPictoDocumentFeedbackWarningIcon.react",
    "WAWebWdsPictoTextFeedbackNegativeIcon.react",
    "WAWebWdsPictoTextFeedbackPositiveIcon.react",
    "WAWebWdsPictoTextFeedbackWarningIcon.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = 88;
    function c(e) {
      var t = e.reportOutcome;
      switch (t) {
        case "PENDING":
          return s.jsx(
            o("WAWebWdsPictoDocumentFeedbackWarningIcon.react")
              .WdsPictoDocumentFeedbackWarningIcon,
            { width: u, height: u },
          );
        case "SUCCESS":
          return s.jsx(
            o("WAWebWdsPictoTextFeedbackPositiveIcon.react")
              .WdsPictoTextFeedbackPositiveIcon,
            { width: u, height: u },
          );
        case "FAIL":
          return s.jsx(
            o("WAWebWdsPictoTextFeedbackNegativeIcon.react")
              .WdsPictoTextFeedbackNegativeIcon,
            { width: u, height: u },
          );
        case "CONTENT_UNAVAILABLE":
          return s.jsx(
            o("WAWebWdsPictoTextFeedbackWarningIcon.react")
              .WdsPictoTextFeedbackWarningIcon,
            { width: u, height: u },
          );
        default:
          return null;
      }
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
