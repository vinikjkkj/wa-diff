__d(
  "WAWebHandleAdvDeviceNotificationForUsyncApi",
  ["invariant", "WAWebHandleAdvDeviceNotificationApi"],
  function (t, n, r, o, a, i, l, s) {
    function e(e) {
      var t = e.deviceNotification,
        n = e.lastDeviceJobTs,
        r = e.localDeviceRecord,
        a = e.localPrimaryIdentity,
        i = e.type,
        l = e.userWid,
        u = t.deviceList,
        c = t.keyIndex;
      (u != null || s(0, 75739, i), c != null || s(0, 75740, i));
      var d = c.signedKeyIndexBytes,
        m = c.ts;
      if (i === "add")
        return (
          d != null || s(0, 75741, i),
          o("WAWebHandleAdvDeviceNotificationApi").handleDeviceAddNotification({
            addDeviceList: u,
            keyIndexTs: m,
            lastDeviceJobTs: n,
            localDeviceRecord: r,
            localPrimaryIdentity: a,
            signedKeyIndexBytes: d,
            wid: l,
          })
        );
      if (i === "remove")
        return o(
          "WAWebHandleAdvDeviceNotificationApi",
        ).handleDeviceRemoveNotification(u, c.ts, r);
    }
    l.handleDeviceNotification = e;
  },
  98,
);
