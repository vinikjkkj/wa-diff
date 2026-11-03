__d(
  "WAWebCallsTabReadinessSignals",
  [
    "Promise",
    "WALogger",
    "WAWebFtsMsgsCallLogCollection",
    "WAWebRegionReadinessSignals",
    "WAWebVoipCallsTabCallInfoUtils",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u,
      c = 30,
      d = !1,
      m = !1,
      p = !1,
      _ = function () {},
      f = new (u || (u = n("Promise")))(function (e) {
        _ = e;
      }),
      g = !1;
    function h() {
      g ||
        ((g = !0),
        o("WAWebRegionReadinessSignals")
          .raceReadinessSubscriptions(function (e) {
            return [
              f,
              o("WAWebRegionReadinessSignals")
                .waitForOfflineDeliveryEnd(e)
                .then(function () {
                  ((p = !0), b());
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
        v());
    }
    function y() {
      return d || (m && p);
    }
    var C = o("WAWebRegionReadinessSignals").createReadinessSignal(
      y,
      function () {
        return (h(), f);
      },
    );
    function b() {
      y() && _();
    }
    function v() {
      return S.apply(this, arguments);
    }
    function S() {
      return (
        (S = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = new (r("WAWebFtsMsgsCallLogCollection"))();
          try {
            (yield e.search({ count: c, searchTerm: "" }),
              (d = e
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
            (e.delete(!0), (m = !0), b());
          }
        })),
        S.apply(this, arguments)
      );
    }
    ((l.primeCallsTabReadiness = h),
      (l.isCallsTabReady = y),
      (l.callsTabReadySignal = C));
  },
  98,
);
