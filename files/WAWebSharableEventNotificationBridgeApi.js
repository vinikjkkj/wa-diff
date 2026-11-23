__d(
  "WAWebSharableEventNotificationBridgeApi",
  [
    "WALogger",
    "WAWebNotificationController",
    "WAWebSharableEventNotification",
    "WAWebSharableEventNotificationConstants",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(e) {
      return o(
        "WAWebSharableEventNotificationConstants",
      ).SharableEventNotificationType.cast(e);
    }
    var c = {
      showSharableEventNotification: async function (n) {
        var t = n.payload,
          a = n.typeRaw,
          i = u(a);
        if (i == null)
          throw (
            o("WALogger")
              .WARN(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "[sharable_event][notification] unrecognized typeRaw=",
                    "",
                  ])),
                a,
              )
              .sendLogs("sharable-event-notification-unknown-type"),
            r("err")("[sharable_event][notification] unrecognized typeRaw=" + a)
          );
        var l = new (o(
          "WAWebSharableEventNotification",
        ).WAWebSharableEventNotification)({ payload: t, type: i });
        (await o(
          "WAWebNotificationController",
        ).WANotificationController.triggerNotification(l),
          o("WALogger").LOG(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[sharable_event][notification] ",
                " type=",
                " eventId=",
                "",
              ])),
            l.notificationBanner == null ? "not shown" : "shown",
            a,
            t.eventId,
          ));
      },
    };
    l.SharableEventNotificationBridgeApi = c;
  },
  98,
);
