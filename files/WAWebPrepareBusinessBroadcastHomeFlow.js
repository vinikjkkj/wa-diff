__d(
  "WAWebPrepareBusinessBroadcastHomeFlow",
  [
    "JSResourceForInteraction",
    "Promise",
    "WALogger",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProOnboardingHistoryQuery",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizBroadcastProOnboardingStatusType",
    "WAWebBusinessBroadcastHomeFlowLoadable",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebLazyLoadedRetriable",
    "WAWebLoadable",
    "WAWebLoadingDrawer.react",
    "WAWebRefreshBusinessEligibility",
    "asyncToGeneratorRuntime",
    "getErrorSafe",
    "react",
    "react-compiler-runtime",
    "useWAWebBizBroadcastProEligibilityState",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s,
      u,
      c,
      d,
      m,
      p = m || (m = o("react")),
      _ = r("JSResourceForInteraction")(
        "WAWebBusinessBroadcastHomeFlow.react",
      ).__setRef("WAWebPrepareBusinessBroadcastHomeFlow"),
      f = r("JSResourceForInteraction")(
        "WAWebPrepareBusinessBroadcastProHomeFlow",
      ).__setRef("WAWebPrepareBusinessBroadcastHomeFlow"),
      g = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield f.load();
          return e.WAWebPrepareBusinessBroadcastProHomeFlow;
        }),
        "BusinessBroadcastProHomeFlow",
        {
          onFinalFailure: function (n) {
            o("WALogger")
              .ERROR(
                e ||
                  (e = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to load BB Pro Home",
                  ])),
              )
              .catching(r("getErrorSafe")(n))
              .sendLogs("bb-pro-home-load-failed");
          },
        },
      ),
      h = r("WAWebLoadable")({
        loader: g,
        loading: function (t) {
          return p.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            retry: t.retry,
          });
        },
      });
    function y() {
      return C.apply(this, arguments);
    }
    function C() {
      return (
        (C = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          try {
            (o(
              "WAWebBizBroadcastProOnboardingStatus",
            ).isBizBroadcastProNuxOnboardingStatusResolved() ||
              (yield o(
                "WAWebRefreshBusinessEligibility",
              ).refreshBusinessEligibilityIfNeeded({
                force: !1,
                rethrowOnFailure: !0,
              })),
              o(
                "WAWebBizBroadcastDeviceCapabilityCommon",
              ).isBizBroadcastProEntrypointEnabledForStatus(
                o(
                  "WAWebBizBroadcastProOnboardingStatus",
                ).getBizBroadcastProNuxOnboardingStatus(),
                !0,
              ));
          } catch (e) {
            o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to log BB Pro exposure",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("bb-pro-exposure-failed");
          }
        })),
        C.apply(this, arguments)
      );
    }
    function b() {
      return v.apply(this, arguments);
    }
    function v() {
      return (
        (v = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (o(
              "WAWebBizBroadcastDeviceCapabilityCommon",
            ).isBizBroadcastProExperimentCandidate() && y(),
            !o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled())
          )
            return (yield _.load(), L);
          var e = o(
            "WAWebBizBroadcastProOnboardingStatus",
          ).isBizBroadcastProNuxOnboardingStatusResolved();
          if (e)
            o("useWAWebBizBroadcastProEligibilityState")
              .forceRefreshWAWebBizBroadcastProEligibility()
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to refresh resolved BB Home product tier",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("bb-home-tier-refresh-failed");
              });
          else
            try {
              yield o(
                "WAWebRefreshBusinessEligibility",
              ).refreshBusinessEligibilityIfNeeded({
                force: !1,
                rethrowOnFailure: !0,
              });
            } catch (e) {
              throw (
                o("WALogger")
                  .ERROR(
                    c ||
                      (c = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to resolve BB Home product tier",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("bb-home-tier-resolution-failed"),
                e
              );
            }
          return o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser()
            ? (yield f.load(), L)
            : (yield (d || (d = n("Promise"))).all([_.load(), S()]), L);
        })),
        v.apply(this, arguments)
      );
    }
    function S() {
      return R.apply(this, arguments);
    }
    function R() {
      return (
        (R = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = o(
            "WAWebBizBroadcastProOnboardingStatus",
          ).getBizBroadcastProNuxOnboardingStatus();
          e !==
            o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus
              .ELIGIBLE_TO_ONBOARD ||
            !o(
              "WAWebBizBroadcastDeviceCapabilityCommon",
            ).isBizBroadcastProEntrypointEnabledForStatus(e) ||
            o(
              "WAWebBizBroadcastProOnboardingStatus",
            ).getBizBroadcastProHasOnboardingHistory() != null ||
            (yield r("WAWebBizBroadcastProOnboardingHistoryQuery")());
        })),
        R.apply(this, arguments)
      );
    }
    function L(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.entryPoint,
        a = e.initialTab,
        i = e.onClose,
        l = e.openBroadcastSettings,
        s = e.openContactImport,
        u = e.openCustomerBasePanel,
        c = o(
          "useWAWebBizBroadcastProEligibilityState",
        ).useWAWebBizBroadcastProEligibilityState(),
        d = c.onboardingStatus,
        m;
      t[0] !== n ||
      t[1] !== a ||
      t[2] !== i ||
      t[3] !== l ||
      t[4] !== s ||
      t[5] !== u
        ? ((m = {
            entryPoint: n,
            initialTab: a,
            onClose: i,
            openBroadcastSettings: l,
            openCustomerBasePanel: u,
            openContactImport: s,
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s),
          (t[5] = u),
          (t[6] = m))
        : (m = t[6]);
      var _ = m;
      if (
        o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() &&
        d == null
      ) {
        var f;
        return (
          t[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = p.jsx(r("WAWebLoadingDrawer.react"), { error: !1 })),
              (t[7] = f))
            : (f = t[7]),
          f
        );
      }
      var g;
      return (
        t[8] !== _
          ? ((g =
              o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastProEnabled() &&
              o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser()
                ? p.jsx(h, babelHelpers.extends({}, _))
                : p.jsx(
                    o("WAWebBusinessBroadcastHomeFlowLoadable")
                      .WAWebBusinessBroadcastCoreHomeFlowLoadable,
                    babelHelpers.extends({}, _),
                  )),
            (t[8] = _),
            (t[9] = g))
          : (g = t[9]),
        g
      );
    }
    l.loadBusinessBroadcastHomeFlow = b;
  },
  98,
);
