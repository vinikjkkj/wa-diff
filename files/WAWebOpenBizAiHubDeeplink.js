__d(
  "WAWebOpenBizAiHubDeeplink",
  [
    "WAWebBizAIDrawerLoadable.react",
    "WAWebBizAIDrawerStep",
    "WAWebBizAILargeScreensLogEvents",
    "WAWebBizAiAgentStatusUtils",
    "WAWebChatAssignmentGatingUtils",
    "WAWebDrawerManager",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "whatsapp-smb://biz-ai-hub",
      c = new Map([
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
    function d(e) {
      if (!e.startsWith(u)) return null;
      var t = e.slice(u.length),
        n = t.indexOf("?");
      return n === -1 ? t : t.slice(0, n);
    }
    function m(e) {
      var t = d(e);
      if (t == null) return !1;
      o("WAWebBizAILargeScreensLogEvents").logBizAiHubDeeplinkClick(e);
      var n = c.get(t);
      return n == null ||
        !o("WAWebChatAssignmentGatingUtils").isBizAIToolsSettingsEnabled() ||
        !o("WAWebBizAiAgentStatusUtils").hasOnboardedAiAgent()
        ? !1
        : (o("WAWebDrawerManager").DrawerManager.openDrawerRight(
            s.jsx(
              o("WAWebBizAIDrawerLoadable.react").WAWebBizAIDrawerLoadable,
              {
                initialStep: n,
                onBack: o("WAWebDrawerManager").closeDrawerRight,
              },
            ),
          ),
          !0);
    }
    l.openBizAiHubDeeplink = m;
  },
  98,
);
