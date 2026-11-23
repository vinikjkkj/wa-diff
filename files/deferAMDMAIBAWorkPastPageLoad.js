__d(
  "deferAMDMAIBAWorkPastPageLoad",
  [
    "AdsMgmtPreloadingUtils",
    "maibaDeferToBackground",
    "promiseDone",
    "promiseWithTimeout",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = 3e4,
      s = 5e3;
    function u(t) {
      var n = !0,
        a = null,
        i = function () {
          n &&
            (a = r("maibaDeferToBackground")(
              function () {
                ((a = null), n && ((n = !1), t()));
              },
              { timeout: s },
            ));
        };
      return (
        o("AdsMgmtPreloadingUtils").isScenarioOngoing()
          ? r("promiseDone")(
              r("promiseWithTimeout")(
                o("AdsMgmtPreloadingUtils").onPreloadingDone(),
                { timeout: e },
              ),
              i,
            )
          : i(),
        function () {
          ((n = !1), a == null || a(), (a = null));
        }
      );
    }
    l.default = u;
  },
  98,
);
