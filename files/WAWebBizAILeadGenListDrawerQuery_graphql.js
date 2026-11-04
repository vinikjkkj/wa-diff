__d(
  "WAWebBizAILeadGenListDrawerQuery.graphql",
  ["WAWebBizAILeadGenListDrawerQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "instruction_id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "custom_moment",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "moment_type",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "has_unseen_lead_data",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "num_of_lead_data",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAILeadGenListDrawerQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBBizAIKnowledgeWALeadGenFlowData",
              kind: "LinkedField",
              name: "xfb_meta_ai_biz_agent_wa_lead_gen_flows",
              plural: !0,
              selections: [
                e,
                t,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMetaAIBizAgentWALeadGenFlowLeads",
                  kind: "LinkedField",
                  name: "leads",
                  plural: !1,
                  selections: [o, a],
                  storageKey: null,
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "WAWebBizAILeadGenEditFieldsModal_flow",
                },
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "WAWebBizAILeadGenResponsesDrawer_flow",
                },
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAILeadGenListDrawerQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "XFBBizAIKnowledgeWALeadGenFlowData",
              kind: "LinkedField",
              name: "xfb_meta_ai_biz_agent_wa_lead_gen_flows",
              plural: !0,
              selections: [
                e,
                t,
                r,
                {
                  alias: null,
                  args: null,
                  concreteType: "XFBMetaAIBizAgentWALeadGenFlowLeads",
                  kind: "LinkedField",
                  name: "leads",
                  plural: !1,
                  selections: [
                    o,
                    a,
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "XFBMetaAIBizAgentWALeadGenFlowLeadsLeadDataConnection",
                      kind: "LinkedField",
                      name: "lead_data",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType:
                            "XFBMetaAIBizAgentWALeadGenFlowLeadsLeadDataEdge",
                          kind: "LinkedField",
                          name: "edges",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType:
                                "XFBMetaAIBusinessAgentWhatsAppLeadGenData",
                              kind: "LinkedField",
                              name: "node",
                              plural: !1,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "id",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "has_seen",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  concreteType:
                                    "XFBMaibaAiBizAgentWAConsumerUIDOutput",
                                  kind: "LinkedField",
                                  name: "consumer_uid",
                                  plural: !1,
                                  selections: [
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "pn",
                                      storageKey: null,
                                    },
                                    {
                                      alias: null,
                                      args: null,
                                      kind: "ScalarField",
                                      name: "lid",
                                      storageKey: null,
                                    },
                                  ],
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "creation_time",
                                  storageKey: null,
                                },
                                {
                                  alias: null,
                                  args: null,
                                  kind: "ScalarField",
                                  name: "customer_info",
                                  storageKey: null,
                                },
                              ],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType:
                    "XFBMetaAIBusinessAgentWhatsAppLeadGenFlowFields",
                  kind: "LinkedField",
                  name: "fields",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "label",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_enabled",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("WAWebBizAILeadGenListDrawerQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAILeadGenListDrawerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
