__d(
  "WAWebCleanAssets",
  [
    "WAStorageEstimator",
    "WAWebAssetLoaderDpiChangeDispatch",
    "WAWebFeatureDetectionDetectWebpSupport",
    "WAWebFeatureDetectionSwSupport",
    "WAWebNoop",
    "WAWebSWBus",
    "WAWebSWBusActions",
    "WAWebWebcStorageStatWamEvent",
    "lodash",
  ],
  function (t, n, r, o, a, i, l) {
    var e = { DEFAULT: "default", WEBP: "webp" };
    function s(t) {
      if (r("WAWebFeatureDetectionSwSupport").supported) {
        var n = t.estimateStorage === !0,
          a = navigator.serviceWorker;
        o("WAWebFeatureDetectionDetectWebpSupport")
          .detectWebpSupport()
          .then(function (n) {
            var o = r("lodash")
              .flatMap(t.keep, function (e) {
                return [
                  e[r("WAWebAssetLoaderDpiChangeDispatch").RES.LOW],
                  e[r("WAWebAssetLoaderDpiChangeDispatch").RES.HIGH],
                ];
              })
              .map(function (t) {
                var r,
                  o = n && t[e.WEBP] ? e.WEBP : e.DEFAULT,
                  a = (r = t[o]) == null ? void 0 : r.split("/");
                return a != null ? a[a.length - 1] : null;
              });
            a != null &&
              a.controller &&
              r("WAWebSWBus")
                .request(a.controller, r("WAWebSWBusActions").CLEAN_ASSETS, o)
                .catch(r("WAWebNoop"));
          })
          .then(function () {
            return n ? o("WAStorageEstimator").estimateStorage() : null;
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
