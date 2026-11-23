__d(
  "WAWebSharableEventShowNotificationBridge",
  ["WAWebBackendApi"],
  function (t, n, r, o, a, i, l) {
    async function e(e, t) {
      await o("WAWebBackendApi").frontendSendAndReceive(
        "showSharableEventNotification",
        { payload: e, typeRaw: t },
      );
    }
    l.showSharableEventNotificationFromBackend = e;
  },
  98,
);
