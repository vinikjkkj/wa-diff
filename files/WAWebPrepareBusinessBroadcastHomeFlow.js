__d(
  "WAWebPrepareBusinessBroadcastHomeFlow",
  [
    "JSResourceForInteraction",
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
    "getErrorSafe",
    "react",
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
        async function () {
          var e = await _.load();
          return e.WAWebPrepareBusinessBroadcastProHomeFlow;
        },
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
    async function h() {
      try {
        (o(
          "WAWebBizBroadcastProOnboardingStatus",
        ).isBizBroadcastProNuxOnboardingStatusResolved() ||
          (await o(
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
    }
    async function y() {
      if (
        (o(
          "WAWebBizBroadcastDeviceCapabilityCommon",
        ).isBizBroadcastProExperimentCandidate() && h(),
        !o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled())
      )
        return (await p.load(), b);
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
          await o(
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
        ? (await _.load(), b)
        : (await Promise.all([p.load(), C()]), b);
    }
    async function C() {
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
        (await r("WAWebBizBroadcastProOnboardingHistoryQuery")());
    }
    function b(e) {
      var t = e.entryPoint,
        n = e.initialTab,
        a = e.onClose,
        i = e.openBroadcastSettings,
        l = e.openContactImport,
        s = e.openCustomerBasePanel,
        u = e.openDataSharingPanel,
        c = o(
          "useWAWebBizBroadcastProEligibilityState",
        ).useWAWebBizBroadcastProEligibilityState(),
        d = c.onboardingStatus,
        p = {
          entryPoint: t,
          initialTab: n,
          onClose: a,
          openBroadcastSettings: i,
          openCustomerBasePanel: s,
          openDataSharingPanel: u,
          openContactImport: l,
        };
      return o(
        "WAWebBusinessBroadcastsGatingUtils",
      ).isBizBroadcastProEnabled() && d == null
        ? m.jsx(r("WAWebLoadingDrawer.react"), { error: !1 })
        : o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() &&
            o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProUser()
          ? m.jsx(g, babelHelpers.extends({}, p))
          : m.jsx(
              o("WAWebBusinessBroadcastHomeFlowLoadable")
                .WAWebBusinessBroadcastCoreHomeFlowLoadable,
              babelHelpers.extends({}, p),
            );
    }
    ((b.displayName = b.name + " [from " + i.id + "]"),
      (l.loadBusinessBroadcastHomeFlow = y));
  },
  98,
);
