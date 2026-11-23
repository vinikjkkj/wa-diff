__d(
  "WAWebPrepareNewChatFlowBroadcastContainer",
  [
    "WALogger",
    "WAWebBizBroadcastCreationAttempt",
    "WAWebBizBroadcastCreationState",
    "WAWebBizBroadcastNewChatAudienceFlowResources",
    "WAWebBizBroadcastNewChatAudienceFlowRouter.react",
    "WAWebBizBroadcastPreparedProNewChatAudienceFlow.react",
    "WAWebBizBroadcastProOnboardingStatus",
    "WAWebBusinessBroadcastsGatingUtils",
    "WAWebRefreshBusinessEligibility",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    async function s() {
      var t = new (r("WAWebBizBroadcastCreationAttempt"))(null);
      t.incObservers();
      try {
        if (
          o("WAWebBusinessBroadcastsGatingUtils").isBizBroadcastProEnabled() &&
          !o(
            "WAWebBizBroadcastProOnboardingStatus",
          ).isBizBroadcastProNuxOnboardingStatusResolved()
        )
          try {
            await o(
              "WAWebRefreshBusinessEligibility",
            ).refreshBusinessEligibilityIfNeeded({ rethrowOnFailure: !0 });
          } catch (t) {
            throw (
              o("WALogger")
                .ERROR(
                  e ||
                    (e = babelHelpers.taggedTemplateLiteralLoose([
                      "Failed to resolve New Chat audience-management tier",
                    ])),
                )
                .catching(r("getErrorSafe")(t))
                .sendLogs("new-chat-audience-tier-resolution-failed"),
              t
            );
          }
        var n = t.getSnapshot(),
          a = n.state;
        return (
          a ===
          o("WAWebBizBroadcastCreationState").BizBroadcastCreationState.CORE
            ? await o(
                "WAWebBizBroadcastNewChatAudienceFlowResources",
              ).coreContainerResource.load()
            : a ===
                o("WAWebBizBroadcastCreationState").BizBroadcastCreationState
                  .PRO &&
              (await o(
                "WAWebBizBroadcastNewChatAudienceFlowResources",
              ).proContainerResource.load()),
          t.hasProContext()
            ? r("WAWebBizBroadcastPreparedProNewChatAudienceFlow.react")
            : r("WAWebBizBroadcastNewChatAudienceFlowRouter.react")
        );
      } finally {
        t.decObservers();
      }
    }
    l.loadNewChatFlowBroadcastContainer = s;
  },
  98,
);
