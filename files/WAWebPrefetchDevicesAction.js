__d(
  "WAWebPrefetchDevicesAction",
  ["WALogger", "WAWebChatGetters", "WAWebDeviceSyncManager"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = new Map();
    async function c(e) {
      if (!e.id.isBot() && !o("WAWebChatGetters").getIsGroup(e)) {
        var t = String(e.id),
          n = u.get(t);
        return (n || ((n = d(e)), u.set(t, n)), n);
      }
    }
    async function d(t) {
      try {
        var n;
        if (o("WAWebChatGetters").getIsUser(t)) n = [t.id];
        else if (o("WAWebChatGetters").getIsGroup(t)) {
          var r;
          n =
            (r = t.groupMetadata) == null
              ? void 0
              : r.participants.map(function (e) {
                  return e.id;
                });
        }
        if (n == null || n.length === 0) {
          o("WALogger").WARN(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "prefetchDevices: no wids to sync",
              ])),
          );
          return;
        }
        await o("WAWebDeviceSyncManager").maybeSyncDeviceList(n);
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "[prefetchDevices] failed: ",
                "",
              ])),
            e,
          )
          .sendLogs("device-sync-manager-prefetch-devices-failed");
      }
    }
    l.prefetchDevices = c;
  },
  98,
);
