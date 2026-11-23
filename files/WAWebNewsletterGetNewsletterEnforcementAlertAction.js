__d(
  "WAWebNewsletterGetNewsletterEnforcementAlertAction",
  [
    "WAJobOrchestratorTypes",
    "WALogger",
    "WAWebGetNewsletterEnforcementAlertsJob",
    "WAWebL10N",
    "WAWebNewsletterBridgeApi",
    "WAWebNewsletterEnforcementAlertCollection",
    "WAWebNewsletterValidationUtils",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t, n) {
      n === void 0 && (n = o("WAJobOrchestratorTypes").JobPriority.HIGH);
      try {
        var a = o("WAWebNewsletterValidationUtils").toNewsletterJidOrThrow(
            t.toJid(),
          ),
          i = r("WAWebL10N").getLocale(),
          l = await o(
            "WAWebGetNewsletterEnforcementAlertsJob",
          ).getNewsletterEnforcementAlerts({
            locale: i,
            newsletterJid: a,
            priority: n,
          });
        if (l == null) return;
        var s = l.enforcementData,
          u = l.msgModelMap;
        (o(
          "WAWebNewsletterEnforcementAlertCollection",
        ).NewsletterEnforcementAlertCollection.setMsgModelMap(u),
          o(
            "WAWebNewsletterBridgeApi",
          ).NewsletterBridgeApi.updateNewsletterEnforcementAlerts({
            enforcementAlerts: s,
          }));
      } catch (t) {
        o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[getNewsletterEnforcementAlertAction] fetch failed",
              ])),
          )
          .tags("newsletter")
          .sendLogs("newsletter-failed-to-get-NewsletterEnforcement-alerts");
      }
    }
    l.getNewsletterEnforcementAlertAction = s;
  },
  98,
);
