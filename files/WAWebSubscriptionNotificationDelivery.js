__d(
  "WAWebSubscriptionNotificationDelivery",
  [
    "WALogger",
    "WAWebBackendApi",
    "WAWebSubscriptionsGatingUtils",
    "WAWebUserPrefsSubscription",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u;
    function c(t) {
      if (
        !o(
          "WAWebSubscriptionsGatingUtils",
        ).isMetaOneSubscriptionNotificationsEnabled()
      ) {
        o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[sub-notif] dropped: gate off, id=",
              ", type=",
              "",
            ])),
          t.stanzaId,
          t.notificationType,
        );
        return;
      }
      if (
        o("WAWebUserPrefsSubscription").getSubscriptionsEntryPointEligibility()
          .metaOne !== !0
      ) {
        o("WALogger").LOG(
          s ||
            (s = babelHelpers.taggedTemplateLiteralLoose([
              "[sub-notif] dropped: not eligible for Meta One on web, id=",
              ", type=",
              "",
            ])),
          t.stanzaId,
          t.notificationType,
        );
        return;
      }
      (o("WALogger").LOG(
        u ||
          (u = babelHelpers.taggedTemplateLiteralLoose([
            "[sub-notif] delivered, id=",
            ", type=",
            "",
          ])),
        t.stanzaId,
        t.notificationType,
      ),
        o("WAWebBackendApi").frontendFireAndForget(
          "showSubscriptionNotification",
          t,
        ));
    }
    l.deliverSubscriptionNotification = c;
  },
  98,
);
