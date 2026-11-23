__d(
  "WAWebCallsTabReadinessSignals",
  [
    "WALogger",
    "WAWebFtsMsgsCallLogCollection",
    "WAWebRegionReadinessSignals",
    "WAWebVoipCallsTabCallInfoUtils",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = 30,
      c = !1,
      d = !1,
      m = !1,
      p = function () {},
      _ = new Promise(function (e) {
        p = e;
      }),
      f = !1;
    function g() {
      f ||
        ((f = !0),
        o("WAWebRegionReadinessSignals")
          .raceReadinessSubscriptions(function (e) {
            return [
              _,
              o("WAWebRegionReadinessSignals")
                .waitForOfflineDeliveryEnd(e)
                .then(function () {
                  ((m = !0), C());
                }),
            ];
          })
          .catch(function (t) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "calls-tab:readiness offline completion wait failed",
                  ])),
              )
              .catching(r("getErrorSafe")(t))
              .sendLogs("calls-tab-readiness-wait-failed");
          }),
        b());
    }
    function h() {
      return c || (d && m);
    }
    var y = o("WAWebRegionReadinessSignals").createReadinessSignal(
      h,
      function () {
        return (g(), _);
      },
    );
    function C() {
      h() && p();
    }
    async function b() {
      var e = new (r("WAWebFtsMsgsCallLogCollection"))();
      try {
        (await e.search({ count: u, searchTerm: "" }),
          (c = e
            .getModelsArray()
            .some(
              o("WAWebVoipCallsTabCallInfoUtils")
                .getShouldShowInCallsTabCallLog,
            )));
      } catch (e) {
        o("WALogger")
          .ERROR(
            s ||
              (s = babelHelpers.taggedTemplateLiteralLoose([
                "calls-tab:readiness persisted Recents read failed",
              ])),
          )
          .catching(r("getErrorSafe")(e))
          .sendLogs("calls-tab-recents-read-failed");
      } finally {
        (e.delete(!0), (d = !0), C());
      }
    }
    ((l.primeCallsTabReadiness = g),
      (l.isCallsTabReady = h),
      (l.callsTabReadySignal = y));
  },
  98,
);
