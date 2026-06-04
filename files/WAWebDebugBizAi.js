__d(
  "WAWebDebugBizAi",
  [
    "WAWebBizAiHubDeeplinkScheme",
    "WAWebBizAiKnowledgeReviewDrawerLoadable.react",
    "WAWebDrawerManager",
    "WAWebOpenBizAiHubDeeplink",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      o("WAWebOpenBizAiHubDeeplink").openBizAiHubDeeplink(
        o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME + "/" + e,
      );
    }
    function c() {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        s.jsx(
          o("WAWebBizAiKnowledgeReviewDrawerLoadable.react")
            .WAWebBizAiKnowledgeReviewDrawerLoadable,
          {},
        ),
      );
    }
    ((c.doc =
      "biz-ai-hub deeplink: open Knowledge Review drawer (/review-knowledge)"),
      (c.paramsToExecute = []));
    function d() {
      u("ai-replies");
    }
    ((d.doc = "biz-ai-hub deeplink: open AI replies drawer (/ai-replies)"),
      (d.paramsToExecute = []));
    function m() {
      u("business-info");
    }
    ((m.doc =
      "biz-ai-hub deeplink: open Business info drawer (/business-info)"),
      (m.paramsToExecute = []));
    function p() {
      u("chat-history");
    }
    ((p.doc =
      "biz-ai-hub deeplink: open Knowledge drawer via chat history (/chat-history)"),
      (p.paramsToExecute = []));
    function _() {
      u("faq");
    }
    ((_.doc = "biz-ai-hub deeplink: open Knowledge drawer via FAQ (/faq)"),
      (_.paramsToExecute = []));
    function f() {
      u("instructions");
    }
    ((f.doc = "biz-ai-hub deeplink: open Instructions drawer (/instructions)"),
      (f.paramsToExecute = []));
    function g() {
      u("knowledge-center");
    }
    ((g.doc = "biz-ai-hub deeplink: open Knowledge drawer (/knowledge-center)"),
      (g.paramsToExecute = []));
    function h() {
      u("lead-gen-collect-info");
    }
    ((h.doc =
      "biz-ai-hub deeplink: open Lead gen drawer (/lead-gen-collect-info)"),
      (h.paramsToExecute = []));
    function y() {
      u("purchase-info");
    }
    ((y.doc =
      "biz-ai-hub deeplink: open Purchase info drawer (/purchase-info)"),
      (y.paramsToExecute = []));
    function C() {
      u("select-catalog");
    }
    ((C.doc = "biz-ai-hub deeplink: open Bestsellers drawer (/select-catalog)"),
      (C.paramsToExecute = []));
    var b = {
      maibaOpenAiReplies: d,
      maibaOpenBusinessInfo: m,
      maibaOpenChatHistory: p,
      maibaOpenFaq: _,
      maibaOpenInstructions: f,
      maibaOpenKnowledgeCenter: g,
      maibaOpenLeadGenCollectInfo: h,
      maibaOpenPurchaseInfo: y,
      maibaOpenReviewKnowledge: c,
      maibaOpenSelectCatalog: C,
    };
    l.default = b;
  },
  98,
);
