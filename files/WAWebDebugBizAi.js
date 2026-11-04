__d(
  "WAWebDebugBizAi",
  [
    "Promise",
    "WAWebBizAILeadGenListDrawer.react",
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
      c = "mock-lead-gen-flow",
      d = "mock-lead-gen-response",
      m = "https://www.internalfb.com/mock-lead-gen-response.csv",
      p = "Name\nMock customer\n",
      _ = null;
    function f(e) {
      (r("vulture")("r7Jlb1ulf7rZZGpdqmcRwo8X8xw="),
        o("WAWebOpenBizAiHubDeeplink").openBizAiHubDeeplink(
          o("WAWebBizAiHubDeeplinkScheme").BIZ_AI_HUB_DEEPLINK_SCHEME + "/" + e,
        ));
    }
    function g() {
      (r("vulture")("IewoAA1fAv_cfsAPn0LjD4pdpFY="),
        o("WAWebDrawerManager").DrawerManager.openDrawerRight(
          u.jsx(r("WAWebBizAiKnowledgeReviewDrawerLoadable.react"), {}),
        ));
    }
    ((g.doc =
      "biz-ai-hub deeplink: open Knowledge Review drawer (/review-knowledge)"),
      (g.paramsToExecute = []));
    function h() {
      (r("vulture")("6XGZ_Qmr4QzsSROgI7SrWmnt1wI="), f("ai-replies"));
    }
    ((h.doc = "biz-ai-hub deeplink: open AI replies drawer (/ai-replies)"),
      (h.paramsToExecute = []));
    function y() {
      (r("vulture")("bY8evAVCsiOWUgyrIveSIg-4oaE="), f("appointments"));
    }
    ((y.doc = "biz-ai-hub deeplink: open Appointments drawer (/appointments)"),
      (y.paramsToExecute = []));
    function C() {
      (r("vulture")("_ZuIzajj_SarQ4pNeL8bTfUGHD4="), f("business-info"));
    }
    ((C.doc =
      "biz-ai-hub deeplink: open Business info drawer (/business-info)"),
      (C.paramsToExecute = []));
    function b() {
      (r("vulture")("tPgbCq3fvXcJVcWEbLH8207wsAA="), f("chat-history"));
    }
    ((b.doc =
      "biz-ai-hub deeplink: open Knowledge drawer via chat history (/chat-history)"),
      (b.paramsToExecute = []));
    function v() {
      (r("vulture")("9HkHlRxSIkNtIsKXNa6fwZMu-Tw="), f("faq"));
    }
    ((v.doc = "biz-ai-hub deeplink: open Knowledge drawer via FAQ (/faq)"),
      (v.paramsToExecute = []));
    function S() {
      (r("vulture")("KGF6jW424ylawRWXSuB8uxKTW5A="), f("instructions"));
    }
    ((S.doc = "biz-ai-hub deeplink: open Instructions drawer (/instructions)"),
      (S.paramsToExecute = []));
    function R() {
      (r("vulture")("p1wGGzqS8OvypYqhj5x8V48zen0="), f("knowledge-center"));
    }
    ((R.doc = "biz-ai-hub deeplink: open Knowledge drawer (/knowledge-center)"),
      (R.paramsToExecute = []));
    function L() {
      (r("vulture")("RSdUiqj01NPAABeeBqPvIjp3CM4="),
        f("lead-gen-collect-info"));
    }
    ((L.doc =
      "biz-ai-hub deeplink: open Lead gen drawer (/lead-gen-collect-info)"),
      (L.paramsToExecute = []));
    function E() {
      (r("vulture")("N1M_oDpWgnDR_HcIAI4getfquVI="), f("purchase-info"));
    }
    ((E.doc =
      "biz-ai-hub deeplink: open Purchase info drawer (/purchase-info)"),
      (E.paramsToExecute = []));
    function k() {
      (r("vulture")("-fWxDThty_CwTQuftPOihKJwUPY="), f("select-catalog"));
    }
    ((k.doc = "biz-ai-hub deeplink: open Bestsellers drawer (/select-catalog)"),
      (k.paramsToExecute = []));
    function I() {
      if (_ == null) {
        var t = self.fetch.bind(self),
          r = o("WAWebGraphQLConstants").generateFacebookGraphqlEndpoint();
        ((_ = function () {
          Reflect.set(self, "fetch", t);
        }),
          Reflect.set(self, "fetch", function (a, i) {
            var l,
              s,
              u = a instanceof Request ? a.url : String(a);
            if (u === m)
              return (e || (e = n("Promise"))).resolve(
                new Response(p, {
                  headers: { "Content-Type": "text/csv" },
                  status: 200,
                }),
              );
            var _ = i == null ? void 0 : i.body;
            if (u !== r || typeof _ != "string") return t(a, i);
            var f;
            try {
              f = JSON.parse(_);
            } catch (e) {
              return t(a, i);
            }
            return f.doc_id ===
              o("WAWebBizAILeadGenListDrawer.react").LeadGenListDrawerQuery
                .params.id
              ? (e || (e = n("Promise"))).resolve(
                  new Response(
                    JSON.stringify({
                      data: {
                        xfb_meta_ai_biz_agent_wa_lead_gen_flows: [
                          {
                            __typename: "XFBBizAIKnowledgeWALeadGenFlowData",
                            custom_moment: null,
                            fields: [
                              {
                                __typename:
                                  "XFBMetaAIBusinessAgentWhatsAppLeadGenFlowFields",
                                is_enabled: !0,
                                label: "Name",
                              },
                            ],
                            instruction_id: c,
                            leads: {
                              __typename: "XFBMetaAIBizAgentWALeadGenFlowLeads",
                              has_unseen_lead_data: !0,
                              lead_data: {
                                __typename:
                                  "XFBMetaAIBizAgentWALeadGenFlowLeadsLeadDataConnection",
                                edges: [
                                  {
                                    __typename:
                                      "XFBMetaAIBizAgentWALeadGenFlowLeadsLeadDataEdge",
                                    node: {
                                      __typename:
                                        "XFBMetaAIBusinessAgentWhatsAppLeadGenData",
                                      consumer_uid: { lid: null, pn: null },
                                      creation_time: 176e7,
                                      customer_info:
                                        '{"Name":"Mock customer","Delivery Address":"1 Test Street","Product or Service":"Test product"}',
                                      has_seen: !1,
                                      id: d,
                                    },
                                  },
                                ],
                              },
                              num_of_lead_data: 1,
                            },
                            moment_type: "READY_TO_BUY",
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
              : ((l = f.variables) == null || (l = l.input) == null
                    ? void 0
                    : l.lead_gen_data_id) === d
                ? (e || (e = n("Promise"))).resolve(
                    new Response(
                      JSON.stringify({
                        data: {
                          maiba_download_single_lead_gen_data_mutation: {
                            cdn_url: m,
                          },
                        },
                      }),
                      {
                        headers: { "Content-Type": "application/json" },
                        status: 200,
                      },
                    ),
                  )
                : ((s = f.variables) == null || (s = s.input) == null
                      ? void 0
                      : s.lead_gen_flow_id) === c
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
                  : t(a, i);
          }));
      }
    }
    ((I.doc = "Mock Lead Gen list and download responses (E2E)"),
      (I.paramsToExecute = []));
    function T() {
      (_ == null || _(), (_ = null));
    }
    ((T.doc = "Restore Facebook GraphQL after the Lead Gen E2E mock"),
      (T.paramsToExecute = []));
    var D = {
      maibaOpenAiReplies: h,
      maibaOpenAppointments: y,
      maibaOpenBusinessInfo: C,
      maibaOpenChatHistory: b,
      maibaOpenFaq: v,
      maibaOpenInstructions: S,
      maibaOpenKnowledgeCenter: R,
      maibaOpenLeadGenCollectInfo: L,
      maibaOpenPurchaseInfo: E,
      maibaOpenReviewKnowledge: g,
      maibaOpenSelectCatalog: k,
      mockLeadGenGraphQLResponses: I,
      restoreLeadGenGraphQLResponses: T,
    };
    l.default = D;
  },
  98,
);
