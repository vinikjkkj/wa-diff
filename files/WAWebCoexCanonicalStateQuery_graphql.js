__d(
  "WAWebCoexCanonicalStateQuery.graphql",
  ["WAWebCoexCanonicalStateQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "request" }],
        t = [
          {
            alias: null,
            args: [
              { kind: "Variable", name: "request", variableName: "request" },
            ],
            concreteType: "XFBWhatsAppCoexistenceBSPInfoResponse",
            kind: "LinkedField",
            name: "xfb_whatsapp_coexistence_bsp_info_query",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "XFBWhatsAppCoexistenceProductStates",
                kind: "LinkedField",
                name: "product_states",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "XFBWhatsAppCoexistenceProductState",
                    kind: "LinkedField",
                    name: "states",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        concreteType: "XFBWACoexConnectionDescriptor",
                        kind: "LinkedField",
                        name: "coex_connection_descriptor",
                        plural: !1,
                        selections: [
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "provider_id",
                            storageKey: null,
                          },
                          {
                            alias: null,
                            args: null,
                            kind: "ScalarField",
                            name: "product",
                            storageKey: null,
                          },
                        ],
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "onboarding_status",
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
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebCoexCanonicalStateQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebCoexCanonicalStateQuery",
          selections: t,
        },
        params: {
          id: n("WAWebCoexCanonicalStateQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebCoexCanonicalStateQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
