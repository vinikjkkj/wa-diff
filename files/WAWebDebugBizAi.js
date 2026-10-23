__d(
  "WAWebDebugBizAi",
  [
    "WAWebBizAiHubDeeplinkScheme",
    "WAWebBizAiKnowledgeReviewDrawerLoadable.react",
    "WAWebDrawerManager",
    "WAWebOpenBizAiHubDeeplink",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      (r("vulture")("r7Jlb1ulf7rZZGpdqmcRwo8X8xw="),
        o("WAWebOpenBizAiHubDeeplink").openBizAiHubDeeplink(
          o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME + "/" + e,
        ));
    }
    function c() {
      (r("vulture")("IewoAA1fAv_cfsAPn0LjD4pdpFY="),
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          s.jsx(
            o("WAWebBizAiKnowledgeReviewDrawerLoadable.react")
              .WAWebBizAiKnowledgeReviewDrawerLoadable,
            {},
          ),
        ));
    }
    ((c.doc =
      "biz-ai-hub deeplink: open Knowledge Review drawer (/review-knowledge)"),
      (c.paramsToExecute = []));
    function d() {
      (r("vulture")("6XGZ_Qmr4QzsSROgI7SrWmnt1wI="), u("ai-replies"));
    }
    ((d.doc = "biz-ai-hub deeplink: open AI replies drawer (/ai-replies)"),
      (d.paramsToExecute = []));
    function m() {
      (r("vulture")("bY8evAVCsiOWUgyrIveSIg-4oaE="), u("appointments"));
    }
    ((m.doc = "biz-ai-hub deeplink: open Appointments drawer (/appointments)"),
      (m.paramsToExecute = []));
    function p() {
      (r("vulture")("_ZuIzajj_SarQ4pNeL8bTfUGHD4="), u("business-info"));
    }
    ((p.doc =
      "biz-ai-hub deeplink: open Business info drawer (/business-info)"),
      (p.paramsToExecute = []));
    function _() {
      (r("vulture")("tPgbCq3fvXcJVcWEbLH8207wsAA="), u("chat-history"));
    }
    ((_.doc =
      "biz-ai-hub deeplink: open Knowledge drawer via chat history (/chat-history)"),
      (_.paramsToExecute = []));
    function f() {
      (r("vulture")("9HkHlRxSIkNtIsKXNa6fwZMu-Tw="), u("faq"));
    }
    ((f.doc = "biz-ai-hub deeplink: open Knowledge drawer via FAQ (/faq)"),
      (f.paramsToExecute = []));
    function g() {
      (r("vulture")("KGF6jW424ylawRWXSuB8uxKTW5A="), u("instructions"));
    }
    ((g.doc = "biz-ai-hub deeplink: open Instructions drawer (/instructions)"),
      (g.paramsToExecute = []));
    function h() {
      (r("vulture")("p1wGGzqS8OvypYqhj5x8V48zen0="), u("knowledge-center"));
    }
    ((h.doc = "biz-ai-hub deeplink: open Knowledge drawer (/knowledge-center)"),
      (h.paramsToExecute = []));
    function y() {
      (r("vulture")("RSdUiqj01NPAABeeBqPvIjp3CM4="),
        u("lead-gen-collect-info"));
    }
    ((y.doc =
      "biz-ai-hub deeplink: open Lead gen drawer (/lead-gen-collect-info)"),
      (y.paramsToExecute = []));
    function C() {
      (r("vulture")("N1M_oDpWgnDR_HcIAI4getfquVI="), u("purchase-info"));
    }
    ((C.doc =
      "biz-ai-hub deeplink: open Purchase info drawer (/purchase-info)"),
      (C.paramsToExecute = []));
    function b() {
      (r("vulture")("-fWxDThty_CwTQuftPOihKJwUPY="), u("select-catalog"));
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
