__d(
  "WAWebNewsletterCreateReportAppealAction",
  [
    "WALogger",
    "WAWebCreateReportAppealJob",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterMetadataCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        var n = await o("WAWebCreateReportAppealJob").createReportAppeal(t);
        if (n.newsletterName == null) {
          var a;
          n.newsletterName =
            (a = r("WAWebNewsletterMetadataCollection").get(n.newsletterId)) ==
            null
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
    }
    l.createNewsletterReportAppealAction = s;
  },
  98,
);
