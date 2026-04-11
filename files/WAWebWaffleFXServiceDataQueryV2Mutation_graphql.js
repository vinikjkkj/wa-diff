__d(
  "WAWebWaffleFXServiceDataQueryV2Mutation.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: "WaffleFXServiceDataResponse",
          kind: "LinkedField",
          name: "waffle_fx_service_data",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "WaffleFXServiceData",
              kind: "LinkedField",
              name: "services",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "WaffleCAL",
                  kind: "LinkedField",
                  name: "waffle_sxs",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "waffle_di",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "waffle_da",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      concreteType: "WaffleXSetting",
                      kind: "LinkedField",
                      name: "waffle_xss",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "waffle_iaxe",
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "waffle_x_surface",
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
                  concreteType: "WaffleAfsEligibility",
                  kind: "LinkedField",
                  name: "waffle_afs",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "waffle_wes",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "WhatsAppFoaToWaLinkEligibility",
                  kind: "LinkedField",
                  name: "foa_to_wa_link_eligibility",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_eligible_to_link_to_unlinked_fb",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_eligible_to_link_to_linked_fb",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_eligible_to_link_to_unlinked_ig",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_eligible_to_link_to_linked_ig",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_eligible_to_link_to_unlinked_rl",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "is_eligible_to_link_to_linked_rl",
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
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebWaffleFXServiceDataQueryV2Mutation",
          selections: e,
          type: "Mutation",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebWaffleFXServiceDataQueryV2Mutation",
          selections: e,
        },
        params: {
          id: "9475021792620702",
          metadata: {},
          name: "WAWebWaffleFXServiceDataQueryV2Mutation",
          operationKind: "mutation",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
