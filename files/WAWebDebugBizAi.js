__d(
  "WAWebDebugBizAi",
  [
    "Promise",
    "WAWebBizAiHubDeeplinkScheme",
    "WAWebBizAiKnowledgeReviewDrawerLoadable.react",
    "WAWebDrawerManager",
    "WAWebGraphQLConstants",
    "WAWebOpenBizAiHubDeeplink",
    "react",
    "vulture",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = "28842015168716468",
      d = "mock-lead-gen-flow",
      m = "mock-lead-gen-response",
      p = null;
    function _(e) {
      (r("vulture")("r7Jlb1ulf7rZZGpdqmcRwo8X8xw="),
        o("WAWebOpenBizAiHubDeeplink").openBizAiHubDeeplink(
          o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME + "/" + e,
        ));
    }
    function f() {
      (r("vulture")("IewoAA1fAv_cfsAPn0LjD4pdpFY="),
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          u.jsx(
            o("WAWebBizAiKnowledgeReviewDrawerLoadable.react")
              .WAWebBizAiKnowledgeReviewDrawerLoadable,
            {},
          ),
        ));
    }
    ((f.doc =
      "biz-ai-hub deeplink: open Knowledge Review drawer (/review-knowledge)"),
      (f.paramsToExecute = []));
    function g() {
      (r("vulture")("6XGZ_Qmr4QzsSROgI7SrWmnt1wI="), _("ai-replies"));
    }
    ((g.doc = "biz-ai-hub deeplink: open AI replies drawer (/ai-replies)"),
      (g.paramsToExecute = []));
    function h() {
      (r("vulture")("bY8evAVCsiOWUgyrIveSIg-4oaE="), _("appointments"));
    }
    ((h.doc = "biz-ai-hub deeplink: open Appointments drawer (/appointments)"),
      (h.paramsToExecute = []));
    function y() {
      (r("vulture")("_ZuIzajj_SarQ4pNeL8bTfUGHD4="), _("business-info"));
    }
    ((y.doc =
      "biz-ai-hub deeplink: open Business info drawer (/business-info)"),
      (y.paramsToExecute = []));
    function C() {
      (r("vulture")("tPgbCq3fvXcJVcWEbLH8207wsAA="), _("chat-history"));
    }
    ((C.doc =
      "biz-ai-hub deeplink: open Knowledge drawer via chat history (/chat-history)"),
      (C.paramsToExecute = []));
    function b() {
      (r("vulture")("9HkHlRxSIkNtIsKXNa6fwZMu-Tw="), _("faq"));
    }
    ((b.doc = "biz-ai-hub deeplink: open Knowledge drawer via FAQ (/faq)"),
      (b.paramsToExecute = []));
    function v() {
      (r("vulture")("KGF6jW424ylawRWXSuB8uxKTW5A="), _("instructions"));
    }
    ((v.doc = "biz-ai-hub deeplink: open Instructions drawer (/instructions)"),
      (v.paramsToExecute = []));
    function S() {
      (r("vulture")("p1wGGzqS8OvypYqhj5x8V48zen0="), _("knowledge-center"));
    }
    ((S.doc = "biz-ai-hub deeplink: open Knowledge drawer (/knowledge-center)"),
      (S.paramsToExecute = []));
    function R() {
      (r("vulture")("RSdUiqj01NPAABeeBqPvIjp3CM4="),
        _("lead-gen-collect-info"));
    }
    ((R.doc =
      "biz-ai-hub deeplink: open Lead gen drawer (/lead-gen-collect-info)"),
      (R.paramsToExecute = []));
    function L() {
      (r("vulture")("N1M_oDpWgnDR_HcIAI4getfquVI="), _("purchase-info"));
    }
    ((L.doc =
      "biz-ai-hub deeplink: open Purchase info drawer (/purchase-info)"),
      (L.paramsToExecute = []));
    function E() {
      (r("vulture")("-fWxDThty_CwTQuftPOihKJwUPY="), _("select-catalog"));
    }
    ((E.doc = "biz-ai-hub deeplink: open Bestsellers drawer (/select-catalog)"),
      (E.paramsToExecute = []));
    function k() {
      if (p == null) {
        var t = self.fetch.bind(self),
          r = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        ((p = function () {
          Reflect.set(self, "fetch", t);
        }),
          Reflect.set(self, "fetch", function (o, a) {
            var i,
              l,
              s = o instanceof Request ? o.url : String(o),
              u = a == null ? void 0 : a.body;
            if (s !== r || typeof u != "string") return t(o, a);
            var p;
            try {
              p = JSON.parse(u);
            } catch (e) {
              return t(o, a);
            }
            return p.doc_id === c
              ? (e || (e = n("Promise"))).resolve(
                  new Response(
                    JSON.stringify({
                      data: {
                        xfb_maiba_gen_lead_gen_flow: [
                          {
                            __typename:
                              "XFBMetaAIBusinessAgentWhatsAppLeadGenFlow",
                            custom_moment: null,
                            fields: [
                              {
                                __typename:
                                  "XFBMetaAIBusinessAgentWhatsAppLeadGenFlowFields",
                                is_enabled: !0,
                                label: "Name",
                              },
                            ],
                            has_unseen_lead_data: !0,
                            id: d,
                            lead_data: {
                              __typename:
                                "XFBMetaAIBusinessAgentWhatsAppLeadGenFlowLeadDataConnection",
                              edges: [
                                {
                                  __typename:
                                    "XFBMetaAIBusinessAgentWhatsAppLeadGenFlowLeadDataEdge",
                                  node: {
                                    __typename:
                                      "XFBMetaAIBusinessAgentWhatsAppLeadGenData",
                                    consumer_uid: { lid: null, pn: null },
                                    creation_time: 176e7,
                                    customer_info:
                                      '{"Name":"Mock customer","Delivery Address":"1 Test Street","Product or Service":"Test product"}',
                                    has_seen: !1,
                                    id: m,
                                  },
                                },
                              ],
                            },
                            moment_type: "READY_TO_BUY",
                            num_of_lead_data: 1,
                          },
                        ],
                      },
                    }),
                    {
                      headers: { "Content-Type": "application/json" },
                      status: 200,
                    },
                  ),
                )
              : ((i = p.variables) == null || (i = i.input) == null
                    ? void 0
                    : i.lead_gen_data_id) === m
                ? (e || (e = n("Promise"))).resolve(
                    new Response(
                      JSON.stringify({
                        data: {
                          maiba_download_single_lead_gen_data_mutation: {
                            cdn_url: "https://www.internalfb.com/",
                          },
                        },
                      }),
                      {
                        headers: { "Content-Type": "application/json" },
                        status: 200,
                      },
                    ),
                  )
                : ((l = p.variables) == null || (l = l.input) == null
                      ? void 0
                      : l.lead_gen_flow_id) === d
                  ? (e || (e = n("Promise"))).resolve(
                      new Response(
                        JSON.stringify({
                          data: {
                            meta_ai_biz_agent_wa_request_lead_gen_data_export: {
                              success: !0,
                            },
                          },
                        }),
                        {
                          headers: { "Content-Type": "application/json" },
                          status: 200,
                        },
                      ),
                    )
                  : t(o, a);
          }));
      }
    }
    ((k.doc = "Mock Lead Gen list and download responses (E2E)"),
      (k.paramsToExecute = []));
    function I() {
      (p == null || p(), (p = null));
    }
    ((I.doc = "Restore Facebook GraphQL after the Lead Gen E2E mock"),
      (I.paramsToExecute = []));
    var T = {
      maibaOpenAiReplies: g,
      maibaOpenAppointments: h,
      maibaOpenBusinessInfo: y,
      maibaOpenChatHistory: C,
      maibaOpenFaq: b,
      maibaOpenInstructions: v,
      maibaOpenKnowledgeCenter: S,
      maibaOpenLeadGenCollectInfo: R,
      maibaOpenPurchaseInfo: L,
      maibaOpenReviewKnowledge: f,
      maibaOpenSelectCatalog: E,
      mockLeadGenGraphQLResponses: k,
      restoreLeadGenGraphQLResponses: I,
    };
    l.default = T;
  },
  98,
);
