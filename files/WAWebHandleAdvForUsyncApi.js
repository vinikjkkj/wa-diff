__d(
  "WAWebHandleAdvForUsyncApi",
  [
    "invariant",
    "WAJids",
    "WALogger",
    "WAWebHandleAdvDeviceNotificationApi",
    "WAWebHandleAdvKeyIndexResultApi",
    "WAWebHandleAdvOmittedResultApi",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e;
    function u(t, n, r, a, i, l) {
      var s = n.deviceList,
        u = n.keyIndex;
      if (u == null || u.signedKeyIndexBytes == null) {
        if (
          s != null &&
          s.some(function (e) {
            return e.id !== o("WAJids").DEFAULT_DEVICE_ID;
          })
        ) {
          o("WALogger").LOG(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[processADVSyncResult] drop: has companion, no keyIndexBytes",
              ])),
          );
          return;
        }
        return o("WAWebHandleAdvOmittedResultApi").handleOmittedResult(
          u == null ? void 0 : u.ts,
          a,
          u == null ? void 0 : u.expectedTs,
          i,
        );
      }
      var c = u.expectedTs,
        d = u.signedKeyIndexBytes,
        m = u.ts;
      return o("WAWebHandleAdvKeyIndexResultApi").handleKeyIndexResultSync(
        t,
        s,
        m,
        d,
        r,
        a,
        i,
        c,
        l,
      );
    }
    function c(e, t, n, r, o, a) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, r, o, a) {
            return u(e, t, n, r, o, a);
          },
        )),
        d.apply(this, arguments)
      );
    }
    function m(e, t, n, r, a, i) {
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
    ((l.handleADVSyncResultSync = u),
      (l.handleADVSyncResult = c),
      (l.handleDeviceNotification = m));
  },
  98,
);
