__d(
  "WAWebSharableEventShowNotificationBridge",
  ["WAWebBackendApi", "asyncToGeneratorRuntime"],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      return s.apply(this, arguments);
    }
    function s() {
      return (
        (s = n("asyncToGeneratorRuntime").asyncToGenerator(function* (e, t) {
          yield o("WAWebBackendApi").frontendSendAndReceive(
            "showSharableEventNotification",
            { payload: e, typeRaw: t },
          );
        })),
        s.apply(this, arguments)
      );
    }
    l.showSharableEventNotificationFromBackend = e;
  },
  98,
);
