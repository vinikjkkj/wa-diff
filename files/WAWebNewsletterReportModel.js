__d(
  "WAWebNewsletterReportModel",
  ["WAWebBaseModel"],
  function (t, n, r, o, a, i, l) {
    var e = (function (e) {
      function t() {
        for (var t, n = arguments.length, r = new Array(n), a = 0; a < n; a++)
          r[a] = arguments[a];
        return (
          (t = e.call.apply(e, [this].concat(r)) || this),
          (t.id = o("WAWebBaseModel").prop()),
          (t.reportStatus = o("WAWebBaseModel").prop()),
          (t.creationTime = o("WAWebBaseModel").prop()),
          (t.newsletterName = o("WAWebBaseModel").prop()),
          (t.newsletterId = o("WAWebBaseModel").prop()),
          (t.reportContentData = o("WAWebBaseModel").prop()),
          (t.appeal = o("WAWebBaseModel").prop()),
          babelHelpers.assertThisInitialized(t) ||
            babelHelpers.assertThisInitialized(t)
        );
      }
      return (babelHelpers.inheritsLoose(t, e), t);
    })(o("WAWebBaseModel").BaseModel);
    e.Proxy = "newsletter_report";
    var s = o("WAWebBaseModel").defineModel(e);
    l.NewsletterReport = s;
  },
  98,
);
