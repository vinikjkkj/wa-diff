__d(
  "WAWebOpenBizAiHubDeeplink",
  [
    "WAWebBizAIDrawerLoadable.react",
    "WAWebBizAIDrawerStep",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebBizAiAgentStatusUtils",
    "WAWebBizAiHubDeeplinkScheme",
    "WAWebChatAssignmentGatingUtils",
    "WAWebDrawerManager",
    "WAWebWamEnumEntryPoint",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = new Map([
        ["/ai-replies", o("WAWebBizAIDrawerStep").BizAIStep.ResponseSettings],
        ["/business-info", o("WAWebBizAIDrawerStep").BizAIStep.BusinessInfo],
        ["/chat-history", o("WAWebBizAIDrawerStep").BizAIStep.Knowledge],
        ["/faq", o("WAWebBizAIDrawerStep").BizAIStep.Knowledge],
        ["/instructions", o("WAWebBizAIDrawerStep").BizAIStep.Instructions],
        ["/knowledge-center", o("WAWebBizAIDrawerStep").BizAIStep.Knowledge],
        [
          "/lead-gen-collect-info",
          o("WAWebBizAIDrawerStep").BizAIStep.LeadGenList,
        ],
        ["/purchase-info", o("WAWebBizAIDrawerStep").BizAIStep.PurchaseInfo],
        ["/select-catalog", o("WAWebBizAIDrawerStep").BizAIStep.Bestsellers],
      ]);
    function c(e) {
      if (
        !e.startsWith(
          o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME,
        )
      )
        return null;
      var t = e.slice(
          o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME.length,
        ),
        n = t.indexOf("?");
      return n === -1 ? t : t.slice(0, n);
    }
    function d(e) {
      var t = c(e);
      if (t == null) return !1;
      o("WAWebBizAILargeScreensLogEvents").logBizAiHubDeeplinkClick(e);
      var n = u.get(t);
      return n == null ||
        !o("WAWebChatAssignmentGatingUtils").isBizAIToolsSettingsEnabled() ||
        !o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()
        ? !1
        : (o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            s.jsx(
              o("WAWebBizAIDrawerLoadable.react").WAWebBizAIDrawerLoadable,
              {
                entryPoint: o("WAWebWamEnumEntryPoint").ENTRY_POINT.CHATS_LIST,
                initialStep: n,
                onBack: o("WAWebDrawerManager").closeDrawerRight,
              },
            ),
          ),
          !0);
    }
    l.openBizAiHubDeeplink = d;
  },
  98,
);
