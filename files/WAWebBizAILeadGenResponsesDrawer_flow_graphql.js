__d(
  "WAWebBizAILeadGenResponsesDrawer_flow.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
        alias: null,
        args: null,
        kind: "ScalarField",
        name: "id",
        storageKey: null,
      };
      return {
        argumentDefinitions: [],
        kind: "Fragment",
        metadata: null,
        name: "WAWebBizAILeadGenResponsesDrawer_flow",
        selections: [
          e,
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
                    concreteType: "XFBMetaAIBusinessAgentWhatsAppLeadGenData",
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
                        concreteType: "XFBMaibaAiBizAgentWAConsumerUIDOutput",
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
            args: null,
            kind: "FragmentSpread",
            name: "WAWebBizAILeadGenEditFieldsModal_flow",
          },
        ],
        type: "XFBMetaAIBusinessAgentWhatsAppLeadGenFlow",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
