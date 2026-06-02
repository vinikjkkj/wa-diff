__d(
  "WAWebDeviceSyncManager",
  ["WALogger", "WAWebAdvSyncDeviceListApi", "WAWebApiDeviceList"],
  function (t, n, r, o, a, i, l) {
    var e;
    async function s(t) {
      var n = await o("WAWebApiDeviceList").bulkGetDeviceRecord(t),
        r = t.filter(function (e, t) {
          var r;
          return n[t] == null || ((r = n[t]) == null ? void 0 : r.deleted);
        });
      r.length > 0 &&
        (o("WALogger").LOG(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "maybeSyncDeviceList: syncing ",
              "/",
              " wids",
            ])),
          r.length,
          t.length,
        ),
        await o("WAWebAdvSyncDeviceListApi").syncDeviceList({
          wids: r,
          context: "message",
          phash: null,
        }));
    }
    l.maybeSyncDeviceList = s;
  },
  98,
);
