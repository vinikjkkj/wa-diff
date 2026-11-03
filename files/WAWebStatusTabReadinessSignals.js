__d(
  "WAWebStatusTabReadinessSignals",
  [
    "Promise",
    "WALogger",
    "WAWebCallsOnlyGating",
    "WAWebEventsWaitForBbEvent",
    "WAWebRegionReadinessSignals",
    "WAWebStatusCollection",
    "WAWebStatusVisibilityUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = !1,
      c = "pending",
      d = function () {},
      m = new (s || (s = n("Promise")))(function (e) {
        d = e;
      });
    function p() {
      if (!(u || o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled())) {
        if (((u = !0), g())) {
          d();
          return;
        }
        o("WAWebRegionReadinessSignals")
          .raceReadinessSubscriptions(function (e) {
            return [
              m,
              r("WAWebEventsWaitForBbEvent")(
                o("WAWebStatusCollection").StatusCollection,
                "add change remove reset sync bulk_add sort",
                g,
                e,
              ),
            ];
          })
          .then(d)
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "status-tab:readiness status wait failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("status-tab-readiness-wait-failed");
          });
      }
    }
    function _() {
      ((c = "complete"), d());
    }
    function f() {
      c === "pending" && ((c = "failed"), d());
    }
    function g() {
      return (
        o("WAWebCallsOnlyGating").isCallsOnlyModeEnabled() ||
        c !== "pending" ||
        o("WAWebStatusCollection")
          .StatusCollection.getValidStatus()
          .some(
            o("WAWebStatusVisibilityUtils")
              .isUserOrTrustedGroupOrNewsletterStatus,
          )
      );
    }
    var h = o("WAWebRegionReadinessSignals").createReadinessSignal(
      g,
      function () {
        return (p(), m);
      },
    );
    ((l.primeStatusTabReadiness = p),
      (l.markStatusStartupSyncComplete = _),
      (l.markStatusStartupSyncFailed = f),
      (l.isStatusTabReady = g),
      (l.statusTabReadySignal = h));
  },
  98,
);
