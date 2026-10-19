__d(
  "WAWebCleanAssets",
  [
    "Promise",
    "WAStorageEstimator",
    "WAWebAssetLoaderDpiChangeDispatch",
    "WAWebFeatureDetectionSwSupport",
    "WAWebLoadAssetUrl",
    "WAWebNoop",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebWebcStorageStatWamEvent",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t) {
      if (r("WAWebFeatureDetectionSwSupport").supported) {
        var a = t.estimateStorage === !0,
          i = navigator.serviceWorker;
        (e || (e = n("Promise")))
          .all(
            t.keep
              .flatMap(function (e) {
                return [
                  e[r("WAWebAssetLoaderDpiChangeDispatch").RES.LOW],
                  e[r("WAWebAssetLoaderDpiChangeDispatch").RES.HIGH],
                ];
              })
              .map(o("WAWebLoadAssetUrl").getSupportedFormatUrl),
          )
          .then(function (e) {
            var t = e.map(function (e) {
              var t = e == null ? void 0 : e.split("/");
              return t != null ? t[t.length - 1] : null;
            });
            i != null &&
              i.controller &&
              r("WAWebSWBus")
                .request(i.controller, r("WAWebSWBusActions").CLEAN_ASSETS, t)
                .catch(r("WAWebNoop"));
          })
          .then(function () {
            return a ? o("WAStorageEstimator").estimateStorage() : null;
          })
          .then(function (e) {
            if (e != null && e.success) {
              var t = e.value,
                n = t.quota,
                r = t.usage;
              new (o("WAWebWebcStorageStatWamEvent").WebcStorageStatWamEvent)({
                webcStorageUsage: r,
                webcStorageQuota: n,
              }).commit();
            }
          });
      }
    }
    l.default = s;
  },
  98,
);
