__d(
  "WAWebAppealPictograms.react",
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
      var t = e.appealOutcome,
        n;
      switch (t) {
        case "PENDING": {
          n = s.jsx(
            o("WAWebWdsPictoDocumentFeedbackWarningIcon.react")
              .WdsPictoDocumentFeedbackWarningIcon,
            { width: u, height: u },
          );
          break;
        }
        case "CONTENT_UNAVAILABLE": {
          n = s.jsx(
            o("WAWebWdsPictoTextFeedbackWarningIcon.react")
              .WdsPictoTextFeedbackWarningIcon,
            { width: u, height: u },
          );
          break;
        }
        case "SUCCESS": {
          n = s.jsx(
            o("WAWebWdsPictoTextFeedbackPositiveIcon.react")
              .WdsPictoTextFeedbackPositiveIcon,
            { width: u, height: u },
          );
          break;
        }
        case "REJECT": {
          n = s.jsx(
            o("WAWebWdsPictoTextFeedbackNegativeIcon.react")
              .WdsPictoTextFeedbackNegativeIcon,
            { width: u, height: u },
          );
          break;
        }
        case "NOT_APPEALED":
        case "NON_APPEALABLE": {
          n = s.jsx(
            o("WAWebWdsPictoTextFeedbackWarningIcon.react")
              .WdsPictoTextFeedbackWarningIcon,
            { width: u, height: u },
          );
          break;
        }
      }
      return n;
    }
    ((c.displayName = c.name + " [from " + i.id + "]"), (l.default = c));
  },
  98,
);
