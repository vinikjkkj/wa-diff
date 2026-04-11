__d(
  "WAWebNewsletterIsDomainPreviewableAction",
  [
    "WALogger",
    "WAWebMexFetchNewsletterIsDomainPreviewableJob",
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
            var n,
              r = yield o(
                "WAWebMexFetchNewsletterIsDomainPreviewableJob",
              ).mexFetchNewsletterIsDomainPreviewable([t]);
            return (n = r == null ? void 0 : r.get(t)) != null ? n : !1;
          } catch (t) {
            return (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "[newsletters] isDomainPreviewableAction failed",
                    ])),
                )
                .tags("newsletter")
                .sendLogs("newsletter-is-domain-previewable-action"),
              !1
            );
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.isDomainPreviewableAction = s;
  },
  98,
);
