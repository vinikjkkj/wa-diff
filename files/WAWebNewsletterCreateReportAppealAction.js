__d(
  "WAWebNewsletterCreateReportAppealAction",
  [
    "WALogger",
    "WAWebCreateReportAppealJob",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterMetadataCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            var n = yield o("WAWebCreateReportAppealJob").createReportAppeal(t);
            if (n.newsletterName == null) {
              var a;
              n.newsletterName =
                (a = r("WAWebNewsletterMetadataCollection").get(
                  n.newsletterId,
                )) == null
                  ? void 0
                  : a.name;
            }
            o(
              "WAWebNewsletterBridgeApi",
            ).NewsletterBridgeApi.updateNewsletterReport({ report: n });
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[DSAR] createNewsletterReportAppealAction failed",
                    ])),
                )
                .tags("newsletter", "wa-ice", "DSAR")
                .sendLogs("newsletter-create-report-appeal-action"),
              t
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.createNewsletterReportAppealAction = s;
  },
  98,
);
