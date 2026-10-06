__d(
  "WAWebSubscriptionNotificationDelivery",
  ["WALogger", "WAWebBackendApi", "WAWebSubscriptionsGatingUtils"],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t) {
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
      (o("WALogger").LOG(
        s ||
          (s = babelHelpers.taggedTemplateLiteralLoose([
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
    l.deliverSubscriptionNotification = u;
  },
  98,
);
