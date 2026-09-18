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
      u("appointments");
    }
    ((m.doc = "biz-ai-hub deeplink: open Appointments drawer (/appointments)"),
      (m.paramsToExecute = []));
    function p() {
      u("business-info");
    }
    ((p.doc =
      "biz-ai-hub deeplink: open Business info drawer (/business-info)"),
      (p.paramsToExecute = []));
    function _() {
      u("chat-history");
    }
    ((_.doc =
      "biz-ai-hub deeplink: open Knowledge drawer via chat history (/chat-history)"),
      (_.paramsToExecute = []));
    function f() {
      u("faq");
    }
    ((f.doc = "biz-ai-hub deeplink: open Knowledge drawer via FAQ (/faq)"),
      (f.paramsToExecute = []));
    function g() {
      u("instructions");
    }
    ((g.doc = "biz-ai-hub deeplink: open Instructions drawer (/instructions)"),
      (g.paramsToExecute = []));
    function h() {
      u("knowledge-center");
    }
    ((h.doc = "biz-ai-hub deeplink: open Knowledge drawer (/knowledge-center)"),
      (h.paramsToExecute = []));
    function y() {
      u("lead-gen-collect-info");
    }
    ((y.doc =
      "biz-ai-hub deeplink: open Lead gen drawer (/lead-gen-collect-info)"),
      (y.paramsToExecute = []));
    function C() {
      u("purchase-info");
    }
    ((C.doc =
      "biz-ai-hub deeplink: open Purchase info drawer (/purchase-info)"),
      (C.paramsToExecute = []));
    function b() {
      u("select-catalog");
    }
    ((b.doc = "biz-ai-hub deeplink: open Bestsellers drawer (/select-catalog)"),
      (b.paramsToExecute = []));
    var v = {
      maibaOpenAiReplies: d,
      maibaOpenAppointments: m,
      maibaOpenBusinessInfo: p,
      maibaOpenChatHistory: _,
      maibaOpenFaq: f,
      maibaOpenInstructions: g,
      maibaOpenKnowledgeCenter: h,
      maibaOpenLeadGenCollectInfo: y,
      maibaOpenPurchaseInfo: C,
      maibaOpenReviewKnowledge: c,
      maibaOpenSelectCatalog: b,
    };
    l.default = v;
  },
  98,
);
