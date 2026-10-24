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
        p;
      t[0] !== n ||
      t[1] !== a ||
      t[2] !== i ||
      t[3] !== l ||
      t[4] !== s ||
      t[5] !== u
        ? ((p = {
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
          (t[6] = p))
        : (p = t[6]);
      var _ = p;
      if (
        o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() &&
        d == null
      ) {
        var f;
        return (
          t[7] === Symbol.for("react.memo_cache_sentinel")
            ? ((f = m.jsx(r("WAWebLoadingDrawer.react"), { error: !1 })),
              (t[7] = f))
            : (f = t[7]),
          f
        );
      }
      var h;
      return (
        t[8] !== _
          ? ((h =
              o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastProEnabled() &&
              o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser()
                ? m.jsx(g, babelHelpers.extends({}, _))
                : m.jsx(
                    o("WAWebBusinessBroadcastHomeFlowLoadable")
                      .WAWebBusinessBroadcastCoreHomeFlowLoadable,
                    babelHelpers.extends({}, _),
                  )),
            (t[8] = _),
            (t[9] = h))
          : (h = t[9]),
        h
      );
    }
    l.loadBusinessBroadcastHomeFlow = C;
  },
  98,
);
