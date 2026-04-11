__d(
  "WAWebNewsletterInsightUtils",
  ["$InternalEnum", "WALogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = n("$InternalEnum").Mirrored(["Available", "Missing"]);
    function u(t) {
      switch (t) {
        case "OK":
          return s.Available;
        case "MISSING":
          return s.Missing;
        default:
          return (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Encountered unexpected status",
                  ])),
              )
              .tags("newsletter-admin-insights"),
            s.Missing
          );
      }
    }
    ((l.NewsletterInsightDataStatus = s),
      (l.getNewsletterInsightsDataStatus = u));
  },
  98,
);
