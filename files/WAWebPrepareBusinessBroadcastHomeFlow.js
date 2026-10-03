__d(
  "WAWebPrepareBusinessBroadcastHomeFlow",
  [
    "JSResourceForInteraction",
    "WALogger",
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
      d = c || (c = o("react")),
      m = r("JSResourceForInteraction")(
        "WAWebBusinessBroadcastHomeFlow.react",
      ).__setRef("WAWebPrepareBusinessBroadcastHomeFlow"),
      p = r("JSResourceForInteraction")(
        "WAWebPrepareBusinessBroadcastProHomeFlow",
      ).__setRef("WAWebPrepareBusinessBroadcastHomeFlow"),
      _ = r("WAWebLazyLoadedRetriable")(
        n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          var e = yield p.load();
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
      f = r("WAWebLoadable")({
        loader: _,
        loading: function (t) {
          return d.jsx(r("WAWebLoadingDrawer.react"), {
            error: !!t.error,
            retry: t.retry,
          });
        },
      });
    function g() {
      return h.apply(this, arguments);
    }
    function h() {
      return (
        (h = n("asyncToGeneratorRuntime").asyncToGenerator(function* () {
          if (
            !o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled()
          )
            return (yield m.load(), y);
          var e = o(
            "WAWebBizBroadcastProOnboardingStatus",
          ).isBizBroadcastProNuxOnboardingStatusResolved();
          if (e)
            o("useWAWebBizBroadcastProEligibilityState")
              .forceRefreshWAWebBizBroadcastProEligibility()
              .catch(function (e) {
                o("WALogger")
                  .ERROR(
                    s ||
                      (s = babelHelpers.taggedTemplateLiteralLoose([
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
                    u ||
                      (u = babelHelpers.taggedTemplateLiteralLoose([
                        "Failed to resolve BB Home product tier",
                      ])),
                  )
                  .catching(r("getErrorSafe")(e))
                  .sendLogs("bb-home-tier-resolution-failed"),
                e
              );
            }
          return o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser()
            ? (yield p.load(), y)
            : (yield m.load(), y);
        })),
        h.apply(this, arguments)
      );
    }
    function y(e) {
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
        m;
      t[0] !== n || t[1] !== a || t[2] !== i || t[3] !== l || t[4] !== s
        ? ((m = {
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
          (t[5] = m))
        : (m = t[5]);
      var p = m;
      if (
        o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() &&
        c == null
      ) {
        var _;
        return (
          t[6] === Symbol.for("react.memo_cache_sentinel")
            ? ((_ = d.jsx(r("WAWebLoadingDrawer.react"), { error: !1 })),
              (t[6] = _))
            : (_ = t[6]),
          _
        );
      }
      var g;
      return (
        t[7] !== p
          ? ((g =
              o(
                "WAWebBusinessBroadcastsGatingUtils",
              ).isBizBroadcastProEnabled() &&
              o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser()
                ? d.jsx(f, babelHelpers.extends({}, p))
                : d.jsx(
                    o("WAWebBusinessBroadcastHomeFlowLoadable")
                      .WAWebBusinessBroadcastCoreHomeFlowLoadable,
                    babelHelpers.extends({}, p),
                  )),
            (t[7] = p),
            (t[8] = g))
          : (g = t[8]),
        g
      );
    }
    l.loadBusinessBroadcastHomeFlow = g;
  },
  98,
);
