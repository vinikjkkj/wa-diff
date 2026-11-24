__d(
  "WAWebMmsClientWaitForNetworkBeforeAttempt",
  ["WAPromiseDelays", "WAWebNetworkStatusStateManager", "gkx"],
  function (t, n, r, o, a, i, l) {
    var e = 5e3;
    async function s(t) {
      var n = t.failCount,
        a = t.networkStatus,
        i = t.uploadQpl;
      i == null ||
        i.addAnnotations({
          bool: {
            network_online: a.isOnline(),
            navigator_online: navigator.onLine,
          },
        });
      var l = o(
        "WAWebNetworkStatusStateManager",
      ).networkOfflineCauseStateManager.get();
      if (
        (l != null &&
          (i == null ||
            i.addAnnotations({
              string: { network_offline_source: l.source },
              int: { network_offline_age_ms: Date.now() - l.sinceMs },
            })),
        !a.isOnline())
      ) {
        if (!r("gkx")("28987")) {
          await a.waitIfOffline();
          return;
        }
        if (n !== 0) {
          var s = a.waitIfOffline();
          if (n === 1) {
            await Promise.race([s, o("WAPromiseDelays").delayMs(e)]);
            return;
          }
          await s;
        }
      }
    }
    l.waitForNetworkBeforeAttempt = s;
  },
  98,
);
