__d(
  "WAWebBizBroadcastProAudienceTableQuery.graphql",
  ["WAWebBizBroadcastProAudienceTableQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "first" }],
        t = [{ kind: "Variable", name: "first", variableName: "first" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          concreteType: "CustomAudienceOperationStatus",
          kind: "LinkedField",
          name: "operation_status",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "status_code",
              storageKey: null,
            },
          ],
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "subscriber_size",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProAudienceTableQuery",
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
                      args: t,
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
                                r,
                                o,
                                a,
                                {
                                  kind: "InlineDataFragmentSpread",
                                  name: "WAWebBizBroadcastProAudienceTableData_audience",
                                  selections: [r, i, a, o],
                                  args: null,
                                  argumentDefinitions: [],
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
              ],
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebBizBroadcastProAudienceTableQuery",
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
                      args: t,
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
                              selections: [r, o, a, i],
                              storageKey: null,
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                    r,
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastProAudienceTableQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProAudienceTableQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
