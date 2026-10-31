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
      p = "https://www.internalfb.com/mock-lead-gen-response.csv",
      _ = "Name\nMock customer\n",
      f = null;
    function g(e) {
      (r("vulture")("r7Jlb1ulf7rZZGpdqmcRwo8X8xw="),
        o("WAWebOpenBizAiHubDeeplink").openBizAiHubDeeplink(
          o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME + "/" + e,
        ));
    }
    function h() {
      (r("vulture")("IewoAA1fAv_cfsAPn0LjD4pdpFY="),
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          u.jsx(r("WAWebBizAiKnowledgeReviewDrawerLoadable.react"), {}),
        ));
    }
    ((h.doc =
      "biz-ai-hub deeplink: open Knowledge Review drawer (/review-knowledge)"),
      (h.paramsToExecute = []));
    function y() {
      (r("vulture")("6XGZ_Qmr4QzsSROgI7SrWmnt1wI="), g("ai-replies"));
    }
    ((y.doc = "biz-ai-hub deeplink: open AI replies drawer (/ai-replies)"),
      (y.paramsToExecute = []));
    function C() {
      (r("vulture")("bY8evAVCsiOWUgyrIveSIg-4oaE="), g("appointments"));
    }
    ((C.doc = "biz-ai-hub deeplink: open Appointments drawer (/appointments)"),
      (C.paramsToExecute = []));
    function b() {
      (r("vulture")("_ZuIzajj_SarQ4pNeL8bTfUGHD4="), g("business-info"));
    }
    ((b.doc =
      "biz-ai-hub deeplink: open Business info drawer (/business-info)"),
      (b.paramsToExecute = []));
    function v() {
      (r("vulture")("tPgbCq3fvXcJVcWEbLH8207wsAA="), g("chat-history"));
    }
    ((v.doc =
      "biz-ai-hub deeplink: open Knowledge drawer via chat history (/chat-history)"),
      (v.paramsToExecute = []));
    function S() {
      (r("vulture")("9HkHlRxSIkNtIsKXNa6fwZMu-Tw="), g("faq"));
    }
    ((S.doc = "biz-ai-hub deeplink: open Knowledge drawer via FAQ (/faq)"),
      (S.paramsToExecute = []));
    function R() {
      (r("vulture")("KGF6jW424ylawRWXSuB8uxKTW5A="), g("instructions"));
    }
    ((R.doc = "biz-ai-hub deeplink: open Instructions drawer (/instructions)"),
      (R.paramsToExecute = []));
    function L() {
      (r("vulture")("p1wGGzqS8OvypYqhj5x8V48zen0="), g("knowledge-center"));
    }
    ((L.doc = "biz-ai-hub deeplink: open Knowledge drawer (/knowledge-center)"),
      (L.paramsToExecute = []));
    function E() {
      (r("vulture")("RSdUiqj01NPAABeeBqPvIjp3CM4="),
        g("lead-gen-collect-info"));
    }
    ((E.doc =
      "biz-ai-hub deeplink: open Lead gen drawer (/lead-gen-collect-info)"),
      (E.paramsToExecute = []));
    function k() {
      (r("vulture")("N1M_oDpWgnDR_HcIAI4getfquVI="), g("purchase-info"));
    }
    ((k.doc =
      "biz-ai-hub deeplink: open Purchase info drawer (/purchase-info)"),
      (k.paramsToExecute = []));
    function I() {
      (r("vulture")("-fWxDThty_CwTQuftPOihKJwUPY="), g("select-catalog"));
    }
    ((I.doc = "biz-ai-hub deeplink: open Bestsellers drawer (/select-catalog)"),
      (I.paramsToExecute = []));
    function T() {
      if (f == null) {
        var t = self.fetch.bind(self),
          r = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        ((f = function () {
          Reflect.set(self, "fetch", t);
        }),
          Reflect.set(self, "fetch", function (o, a) {
            var i,
              l,
              s = o instanceof Request ? o.url : String(o);
            if (s === p)
              return (e || (e = n("Promise"))).resolve(
                new Response(_, {
                  headers: { "Content-Type": "text/csv" },
                  status: 200,
                }),
              );
            var u = a == null ? void 0 : a.body;
            if (s !== r || typeof u != "string") return t(o, a);
            var f;
            try {
              f = JSON.parse(u);
            } catch (e) {
              return t(o, a);
            }
            return f.doc_id === c
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
              : ((i = f.variables) == null || (i = i.input) == null
                    ? void 0
                    : i.lead_gen_data_id) === m
                ? (e || (e = n("Promise"))).resolve(
                    new Response(
                      JSON.stringify({
                        data: {
                          maiba_download_single_lead_gen_data_mutation: {
                            cdn_url: p,
                          },
                        },
                      }),
                      {
                        headers: { "Content-Type": "application/json" },
                        status: 200,
                      },
                    ),
                  )
                : ((l = f.variables) == null || (l = l.input) == null
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
    ((T.doc = "Mock Lead Gen list and download responses (E2E)"),
      (T.paramsToExecute = []));
    function D() {
      (f == null || f(), (f = null));
    }
    ((D.doc = "Restore Facebook GraphQL after the Lead Gen E2E mock"),
      (D.paramsToExecute = []));
    var x = {
      maibaOpenAiReplies: y,
      maibaOpenAppointments: C,
      maibaOpenBusinessInfo: b,
      maibaOpenChatHistory: v,
      maibaOpenFaq: S,
      maibaOpenInstructions: R,
      maibaOpenKnowledgeCenter: L,
      maibaOpenLeadGenCollectInfo: E,
      maibaOpenPurchaseInfo: k,
      maibaOpenReviewKnowledge: h,
      maibaOpenSelectCatalog: I,
      mockLeadGenGraphQLResponses: T,
      restoreLeadGenGraphQLResponses: D,
    };
    l.default = x;
  },
  98,
);
