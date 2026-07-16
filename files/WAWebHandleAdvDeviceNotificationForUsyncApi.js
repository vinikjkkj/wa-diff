__d(
  "WAWebHandleAdvDeviceNotificationForUsyncApi",
  ["invariant", "WAWebHandleAdvDeviceNotificationApi"],
  function (t, n, r, o, a, i, l, s) {
    function e(e, t, n, r, a, i) {
      var l = n.deviceList,
        u = n.keyIndex;
      (l != null || s(0, 75739, t), u != null || s(0, 75740, t));
      var c = u.signedKeyIndexBytes,
        d = u.ts;
      if (t === "add")
        return (
          c != null || s(0, 75741, t),
          o("WAWebHandleAdvDeviceNotificationApi").handleDeviceAddNotification(
            e,
            l,
            d,
            c,
            r,
            a,
            i,
          )
        );
      if (t === "remove")
        return o(
          "WAWebHandleAdvDeviceNotificationApi",
        ).handleDeviceRemoveNotification(l, u.ts, a);
    }
    l.handleDeviceNotification = e;
  },
  98,
);
