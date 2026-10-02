__d(
  "WASmaxInAccountSyncDevicesNotificationType",
  [
    "WAResultOrError",
    "WASmaxInAccountSyncNotificationDevicesMixin",
    "WASmaxInAccountSyncNotificationDevicesNoPayloadMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInAccountSyncNotificationDevicesMixin",
      ).parseNotificationDevicesMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationDevices",
          value: t.value,
        });
      var n = o(
        "WASmaxInAccountSyncNotificationDevicesNoPayloadMixin",
      ).parseNotificationDevicesNoPayloadMixin(e);
      return n.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationDevicesNoPayload",
            value: n.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            ["Devices", "DevicesNoPayload"],
            [t, n],
          );
    }
    l.parseDevicesNotificationType = e;
  },
  98,
);
