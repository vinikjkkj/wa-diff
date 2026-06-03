__d(
  "WAWebNewsletterGetReportsAction",
  [
    "WALogger",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterGetNewsletterReportsJob",
    "WAWebNewsletterMetadataCollection",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s() {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o(
                "WAWebNewsletterGetNewsletterReportsJob",
              ).getNewsletterReports(),
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
        })),
        u.apply(this, arguments)
      );
    }
    l.getNewsletterReportsAction = s;
  },
  98,
);
