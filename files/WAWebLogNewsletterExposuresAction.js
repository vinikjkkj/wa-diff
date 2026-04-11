__d(
  "WAWebLogNewsletterExposuresAction",
  ["WALogger", "WAWebNewsletterLogExposuresJob", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          try {
            return o("WAWebNewsletterLogExposuresJob").logNewsletterExposures(
              t,
            );
          } catch (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[logNewsletterExposuresAction] log failed",
                  ])),
              )
              .tags("newsletter")
              .sendLogs("log-newsletter-exposures-failed");
          }
        })),
        u.apply(this, arguments)
      );
    }
    l.logNewsletterExposuresAction = s;
  },
  98,
);
