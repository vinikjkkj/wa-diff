__d(
  "WAWebLogStorageSizeForCrash",
  ["WALogger", "WAStorageEstimator", "WAWebLogForCrash"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1073741824,
      u = 300 * 1e3;
    function c() {
      o("WAWebLogForCrash").onLogForCrashReady(async function () {
        (await d(), self.setInterval(d, u));
      });
    }
    async function d() {
      try {
        var t = await o("WAStorageEstimator").estimateStorage();
        if (!t.success) return;
        var n = t.value,
          r = n.quota,
          a = n.usage,
          i = n.usageDetails,
          l = i == null ? void 0 : i.indexedDB;
        o("WAWebLogForCrash").logForCrash(
          "wa:storageEstimate",
          JSON.stringify({
            usage: m(a),
            quota: m(r),
            idb: m(l),
            pct: r > 0 ? Math.round((a / r) * 100) : null,
          }),
        );
      } catch (t) {
        o("WALogger").WARN(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "[storage-crash-log] Failed to log storage size: ",
              "",
            ])),
          t,
        );
      }
    }
    function m(e) {
      return e == null ? null : Number((e / s).toFixed(4));
    }
    ((l.initStorageSizeCrashLogging = c), (l.logStorageSizeForCrash = d));
  },
  98,
);
