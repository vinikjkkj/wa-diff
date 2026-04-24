__d(
  "WAWebBizAiLeadGenFormsQuery.graphql",
  ["WAWebBizAiLeadGenFormsQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = [
          {
            alias: null,
            args: null,
            concreteType: "XFBMetaAIBusinessAgentWhatsAppLeadGenFlow",
            kind: "LinkedField",
            name: "xfb_maiba_gen_lead_gen_flow",
            plural: !0,
            selections: [
              e,
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "custom_moment",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "moment_type",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "XFBMetaAIBusinessAgentWhatsAppLeadGenFlowFields",
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
              {
                alias: null,
                args: null,
                concreteType:
                  "XFBMetaAIBusinessAgentWhatsAppLeadGenFlowLeadDataConnection",
                kind: "LinkedField",
                name: "lead_data",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType:
                      "XFBMetaAIBusinessAgentWhatsAppLeadGenFlowLeadDataEdge",
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
                          e,
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
                            kind: "ScalarField",
                            name: "customer_info",
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
                kind: "ScalarField",
                name: "has_unseen_lead_data",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "num_of_lead_data",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiLeadGenFormsQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiLeadGenFormsQuery",
          selections: t,
        },
        params: {
          id: n("WAWebBizAiLeadGenFormsQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiLeadGenFormsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
