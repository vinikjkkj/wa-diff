__d(
  "WASmaxInUsyncDevicesNotification",
  [
    "WAResultOrError",
    "WASmaxInUsyncNotificationAddDevicesNotificationMixin",
    "WASmaxInUsyncNotificationRemoveDevicesNotificationMixin",
    "WASmaxInUsyncNotificationUpdateDevicesNotificationMixin",
    "WASmaxParseUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = o(
        "WASmaxInUsyncNotificationAddDevicesNotificationMixin",
      ).parseNotificationAddDevicesNotificationMixin(e);
      if (t.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationAddDevicesNotification",
          value: t.value,
        });
      var n = o(
        "WASmaxInUsyncNotificationRemoveDevicesNotificationMixin",
      ).parseNotificationRemoveDevicesNotificationMixin(e);
      if (n.success)
        return o("WAResultOrError").makeResult({
          name: "NotificationRemoveDevicesNotification",
          value: n.value,
        });
      var r = o(
        "WASmaxInUsyncNotificationUpdateDevicesNotificationMixin",
      ).parseNotificationUpdateDevicesNotificationMixin(e);
      return r.success
        ? o("WAResultOrError").makeResult({
            name: "NotificationUpdateDevicesNotification",
            value: r.value,
          })
        : o("WASmaxParseUtils").errorMixinDisjunction(
            e,
            [
              "AddDevicesNotification",
              "RemoveDevicesNotification",
              "UpdateDevicesNotification",
            ],
            [t, n, r],
          );
    }
    l.parseDevicesNotification = e;
  },
  98,
);
