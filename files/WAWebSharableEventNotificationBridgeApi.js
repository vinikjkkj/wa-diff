__d(
  "WAWebSharableEventNotificationBridgeApi",
  [
    "WALogger",
    "WAWebSharableEventNotification",
    "WAWebSharableEventNotificationConstants",
    "asyncToGeneratorRuntime",
    "err",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return o(
        "WAWebSharableEventNotificationConstants",
      ).SharableEventNotificationType.cast(e);
    }
    var u = {
      showSharableEventNotification: (function () {
        var t = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = t.payload,
            a = t.typeRaw,
            i = s(a);
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
          yield l.triggerNotification(null);
        });
        function a(e) {
          return t.apply(this, arguments);
        }
        return a;
      })(),
    };
    l.SharableEventNotificationBridgeApi = u;
  },
  98,
);
