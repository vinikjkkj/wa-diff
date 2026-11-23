__d(
  "WAWebBizBroadcastProAudienceStatusQueryQuery.graphql",
  [
    "WAWebBizBroadcastProAudienceStatusQueryQuery_facebookRelayOperation",
    "relay-runtime",
  ],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "audienceId" },
          { defaultValue: null, kind: "LocalArgument", name: "first" },
        ],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: [
            { kind: "Variable", name: "find", variableName: "audienceId" },
            { kind: "Variable", name: "first", variableName: "first" },
          ],
          concreteType:
            "WhatsAppBusinessAccountWaBbProCustomAudiencesConnection",
          kind: "LinkedField",
          name: "wa_bb_pro_custom_audiences",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "WhatsAppBusinessAccountWaBbProCustomAudiencesEdge",
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
                    t,
                    {
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
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "subscriber_size",
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
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizBroadcastProAudienceStatusQueryQuery",
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
                  selections: [r],
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
          name: "WAWebBizBroadcastProAudienceStatusQueryQuery",
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
                  selections: [r, t],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n(
            "WAWebBizBroadcastProAudienceStatusQueryQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizBroadcastProAudienceStatusQueryQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    (n("relay-runtime").PreloadableQueryRegistry.set(e.params.id, e),
      (a.exports = e));
  },
  null,
);
