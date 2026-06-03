__d(
  "WAWebDeviceSyncManager",
  [
    "WALogger",
    "WAWebAdvSyncDeviceListApi",
    "WAWebApiDeviceList",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(e) {
      return u.apply(this, arguments);
    }
    function u() {
      return (
        (u = n("asyncToGeneratorRuntime").asyncToGenerator(function* (t) {
          var n = yield o("WAWebApiDeviceList").bulkGetDeviceRecord(t),
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
            yield o("WAWebAdvSyncDeviceListApi").syncDeviceList({
              wids: r,
              context: "message",
              phash: null,
            }));
        })),
        u.apply(this, arguments)
      );
    }
    l.maybeSyncDeviceList = s;
  },
  98,
);
