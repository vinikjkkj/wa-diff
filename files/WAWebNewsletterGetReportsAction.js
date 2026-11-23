__d(
  "WAWebNewsletterGetReportsAction",
  [
    "WALogger",
    "WAWebL10N",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterGetNewsletterReportsJob",
    "WAWebNewsletterMetadataCollection",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s() {
      try {
        var t = await o(
            "WAWebNewsletterGetNewsletterReportsJob",
          ).getNewsletterReports(r("WAWebL10N").getLocale()),
          n = t.map(function (e) {
            var t;
            return (
              e.newsletterName != null ||
                (e.newsletterName =
                  (t = r("WAWebNewsletterMetadataCollection").get(
                    e.newsletterId,
                  )) == null
                    ? void 0
                    : t.name),
              e
            );
          });
        o(
          "WAWebNewsletterBridgeApi",
        ).NewsletterBridgeApi.updateNewsletterReports({ reports: n });
      } catch (t) {
        throw (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[newsletter][DSAR][getNewsletterReportsAction] failed",
                ])),
            )
            .tags("newsletter", "wa-ice", "DSAR")
            .sendLogs("newsletter-get-reports-action"),
          t
        );
      }
    }
    l.getNewsletterReportsAction = s;
  },
  98,
);
