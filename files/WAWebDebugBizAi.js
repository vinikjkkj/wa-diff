__d(
  "WAWebDebugBizAi",
  [
    "WAWebBizAiKnowledgeReviewDrawerLoadable.react",
    "WAWebDrawerManager",
    "WAWebOpenBizAiHubDeeplink",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = "whatsapp-smb://biz-ai-hub";
    function c(e) {
      o("WAWebOpenBizAiHubDeeplink").openBizAiHubDeeplink(u + "/" + e);
    }
    function d() {
      o("WAWebDrawerManager").DrawerManager.openDrawerRight(
        s.jsx(
          o("WAWebBizAiKnowledgeReviewDrawerLoadable.react")
            .WAWebBizAiKnowledgeReviewDrawerLoadable,
          {},
        ),
      );
    }
    ((d.doc =
      "biz-ai-hub deeplink: open Knowledge Review drawer (/review-knowledge)"),
      (d.paramsToExecute = []));
    function m() {
      c("ai-replies");
    }
    ((m.doc = "biz-ai-hub deeplink: open AI replies drawer (/ai-replies)"),
      (m.paramsToExecute = []));
    function p() {
      c("business-info");
    }
    ((p.doc =
      "biz-ai-hub deeplink: open Business info drawer (/business-info)"),
      (p.paramsToExecute = []));
    function _() {
      c("chat-history");
    }
    ((_.doc =
      "biz-ai-hub deeplink: open Knowledge drawer via chat history (/chat-history)"),
      (_.paramsToExecute = []));
    function f() {
      c("faq");
    }
    ((f.doc = "biz-ai-hub deeplink: open Knowledge drawer via FAQ (/faq)"),
      (f.paramsToExecute = []));
    function g() {
      c("instructions");
    }
    ((g.doc = "biz-ai-hub deeplink: open Instructions drawer (/instructions)"),
      (g.paramsToExecute = []));
    function h() {
      c("knowledge-center");
    }
    ((h.doc = "biz-ai-hub deeplink: open Knowledge drawer (/knowledge-center)"),
      (h.paramsToExecute = []));
    function y() {
      c("lead-gen-collect-info");
    }
    ((y.doc =
      "biz-ai-hub deeplink: open Lead gen drawer (/lead-gen-collect-info)"),
      (y.paramsToExecute = []));
    function C() {
      c("purchase-info");
    }
    ((C.doc =
      "biz-ai-hub deeplink: open Purchase info drawer (/purchase-info)"),
      (C.paramsToExecute = []));
    function b() {
      c("select-catalog");
    }
    ((b.doc = "biz-ai-hub deeplink: open Bestsellers drawer (/select-catalog)"),
      (b.paramsToExecute = []));
    var v = {
      maibaOpenAiReplies: m,
      maibaOpenBusinessInfo: p,
      maibaOpenChatHistory: _,
      maibaOpenFaq: f,
      maibaOpenInstructions: g,
      maibaOpenKnowledgeCenter: h,
      maibaOpenLeadGenCollectInfo: y,
      maibaOpenPurchaseInfo: C,
      maibaOpenReviewKnowledge: d,
      maibaOpenSelectCatalog: b,
    };
    l.default = v;
  },
  98,
);
