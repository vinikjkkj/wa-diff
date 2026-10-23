__d(
  "WAWebPrepareBusinessBroadcastHomeFlow",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProOnboardingStatus",
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
      m = d || (d = o("react")),
      p = r("JSResourceForInteraction")(
        "WAWebBusinessBroadcastHomeFlow.react",
      ).__setRef("WAWebPrepareBusinessBroadcastHomeFlow"),
      _ = r("JSResourceForInteraction")(
        "WAWebPrepareBusinessBroadcastProHomeFlow",
      ).__setRef("WAWebPrepareBusinessBroadcastHomeFlow"),
      f = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield _.load();
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
      g = r("WAWebLoadable")({
        loader: f,
        loading: function (t) {
          return m.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            retry: t.retry,
          });
        },
      });
    function h() {
      return y.apply(this, arguments);
    }
    function y() {
      return (
        (y = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
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
        y.apply(this, arguments)
      );
    }
    function C() {
      return b.apply(this, arguments);
    }
    function b() {
      return (
        (b = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            (o(
              "WAWebBizBroadcastDeviceCapabilityCommon",
            ).isBizBroadcastProExperimentCandidate() && h(),
            !o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled())
          )
            return (yield p.load(), v);
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
            ? (yield _.load(), v)
            : (yield p.load(), v);
        })),
        b.apply(this, arguments)
      );
    }
    function v(e) {
      var t = o("react-compiler-runtime").c(9),
        n = e.entryPoint,
        a = e.initialTab,
        i = e.onClose,
        l = e.openBroadcastSettings,
        s = e.openCustomerBasePanel,
        u = o(
          "useWAWebBizBroadcastProEligibilityState",
        ).useWAWebBizBroadcastProEligibilityState(),
        c = u.onboardingStatus,
        d;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== s
        ? ((d = {
            entryPoint: n,
            initialTab: a,
            onClose: i,
            openBroadcastSettings: l,
            openCustomerBasePanel: s,
          }),
          (t[0] = n),
          (t[1] = a),
          (t[2] = i),
          (t[3] = l),
          (t[4] = s),
          (t[5] = d))
        : (d = t[5]);
      var p = d;
      if (
        o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() &&
        c == null
      ) {
        var _;
        return (
          t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = m.jsx(r("WAWebLoadingDrawer.react"), { error: !1 })),
              (t[6] = _))
            : (_ = t[6]),
          _
        );
      }
      var f;
      return (
        t[7] !== p
          ? ((f =
              o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastProEnabled() &&
              o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser()
                ? m.jsx(g, babelHelpers.extends({}, p))
                : m.jsx(
                    o("WAWebBusinessBroadcastHomeFlowLoadable")
                      .WAWebBusinessBroadcastCoreHomeFlowLoadable,
                    babelHelpers.extends({}, p),
                  )),
            (t[7] = p),
            (t[8] = f))
          : (f = t[8]),
        f
      );
    }
    l.loadBusinessBroadcastHomeFlow = C;
  },
  98,
);
