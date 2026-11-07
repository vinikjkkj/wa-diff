__d(
  "WAWebBizBroadcastProNewBroadcastAudienceSection_query.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "WAWebBizBroadcastProNewBroadcastAudienceSection_query",
      selections: [
        {
          alias: null,
          args: null,
          concreteType: "Viewer",
          kind: "LinkedField",
          name: "viewer",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "WhatsAppBusinessAccount",
              kind: "LinkedField",
              name: "backing_waba",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: [{ kind: "Literal", name: "first", value: 1 }],
                  concreteType:
                    "WhatsAppBusinessAccountWaBbProCustomAudiencesConnection",
                  kind: "LinkedField",
                  name: "wa_bb_pro_custom_audiences",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "WhatsAppBusinessAccountWaBbProCustomAudiencesEdge",
                      kind: "LinkedField",
                      name: "edges",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "AdCustomAudience",
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
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: "wa_bb_pro_custom_audiences(first:1)",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: null,
        },
      ],
      type: "Query",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
