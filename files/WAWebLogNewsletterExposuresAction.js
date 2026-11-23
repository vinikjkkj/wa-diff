__d(
  "WAWebLogNewsletterExposuresAction",
  ["WALogger", "WAWebNewsletterLogExposuresJob"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      try {
        return o("WAWebNewsletterLogExposuresJob").logNewsletterExposures(t);
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
    }
    l.logNewsletterExposuresAction = s;
  },
  98,
);
