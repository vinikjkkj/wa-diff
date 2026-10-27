__d(
  "WAWebBizBroadcastCreationState",
  [
    "$InternalEnum",
    "WAWebBizBroadcastDeviceCapabilityCommon",
    "WAWebBizBroadcastProChatUtils",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBizBroadcastProOnboardingStatusType",
    "WAWebBusinessBroadcastsGatingUtils",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = n("$InternalEnum").Mirrored([
      "CORE",
      "PRO",
      "LOADING",
      "RECONNECT",
      "BLOCKED",
    ]);
    function s(e, t) {
      return (
        t === void 0 &&
          (t = o(
            "WAWebBizBroadcastProOnboardingStatus",
          ).getBizBroadcastProNuxOnboardingStatus()),
        (e != null &&
          o("WAWebBizBroadcastProChatUtils").getIsBizBroadcastProChat(e)) ||
          (t ===
            o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus
              .ONBOARDED &&
            o(
              "WAWebBusinessBroadcastsGatingUtils",
            ).isBizBroadcastProEnabled()) ||
          (t ===
            o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus
              .ELIGIBLE_TO_ONBOARD &&
            o(
              "WAWebBizBroadcastDeviceCapabilityCommon",
            ).isBizBroadcastProEntrypointEnabledForStatus(t))
      );
    }
    function u(t, n) {
      return (
        t === void 0 && (t = !1),
        n === void 0 &&
          (n = o(
            "WAWebBizBroadcastProOnboardingStatus",
          ).getBizBroadcastProNuxOnboardingStatus()),
        t || s(null, n)
          ? c(n)
          : n == null &&
              o(
                "WAWebBizBroadcastDeviceCapabilityCommon",
              ).getPrimarySupportsBusinessBroadcastPro() &&
              o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled()
            ? e.LOADING
            : o(
                  "WAWebBizBroadcastDeviceCapabilityCommon",
                ).isBizBroadcastEnabledAndDeviceSupported(!1)
              ? e.CORE
              : e.BLOCKED
      );
    }
    function c(t) {
      return !o(
        "WAWebBizBroadcastDeviceCapabilityCommon",
      ).getPrimarySupportsBusinessBroadcastPro() ||
        !o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled()
        ? e.BLOCKED
        : t ===
            o("WAWebBizBroadcastProOnboardingStatusType").BBProOnboardingStatus
              .ONBOARDED
          ? e.PRO
          : t ===
              o("WAWebBizBroadcastProOnboardingStatusType")
                .BBProOnboardingStatus.ELIGIBLE_TO_ONBOARD
            ? e.RECONNECT
            : t === null
              ? e.LOADING
              : e.BLOCKED;
    }
    ((l.BizBroadcastCreationState = e),
      (l.hasBizBroadcastProCreationContext = s),
      (l.getBizBroadcastCreationState = u));
  },
  98,
);
