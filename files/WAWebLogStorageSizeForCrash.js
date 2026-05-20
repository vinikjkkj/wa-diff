__d(
  "WAWebLogStorageSizeForCrash",
  [
    "WALogger",
    "WAStorageEstimator",
    "WAWebLogForCrash",
    "asyncToGeneratorRuntime",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = 1073741824,
      u = 300 * 1e3;
    function c() {
      o("WAWebLogForCrash").onLogForCrashReady(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          (yield d(), self.setInterval(d, u));
        }),
      );
    }
    function d() {
      return m.apply(this, arguments);
    }
    function m() {
      return (
        (m = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            var t = yield o("WAStorageEstimator").estimateStorage();
            if (!t.success) return;
            var n = t.value,
              r = n.quota,
              a = n.usage,
              i = n.usageDetails,
              l = i == null ? void 0 : i.indexedDB;
            o("WAWebLogForCrash").logForCrash(
              "wa:storageEstimate",
              JSON.stringify({
                usage: p(a),
                quota: p(r),
                idb: p(l),
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
        })),
        m.apply(this, arguments)
      );
    }
    function p(e) {
      return e == null ? null : Number((e / s).toFixed(4));
    }
    ((l.initStorageSizeCrashLogging = c), (l.logStorageSizeForCrash = d));
  },
  98,
);
