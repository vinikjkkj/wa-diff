__d(
  "WAWebSharableEventNotificationBridgeApi",
  [
    "WALogger",
    "WAWebNotificationController",
    "WAWebSharableEventNotification",
    "WAWebSharableEventNotificationConstants",
    "asyncToGeneratorRuntime",
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
      showSharableEventNotification: (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.payload,
            a = t.typeRaw,
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
              r("err")(
                "[sharable_event][notification] unrecognized typeRaw=" + a,
              )
            );
          var l = new (o(
            "WAWebSharableEventNotification",
          ).WAWebSharableEventNotification)({ payload: n, type: i });
          (yield o(
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
              n.eventId,
            ));
        });
        function a(e) {
          return t.apply(this, arguments);
        }
        return a;
      })(),
    };
    l.SharableEventNotificationBridgeApi = c;
  },
  98,
);
