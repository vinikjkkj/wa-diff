__d(
  "AdsDraftRealtimeSubscription.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "data", variableName: "input" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "ad_draft_id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "event_type",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "message",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsDraftRealtimeSubscription",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdDraftPublishSubscribeResponsePayload",
              kind: "LinkedField",
              name: "ad_draft_publish_subscribe",
              plural: !1,
              selections: [
                n,
                r,
                o,
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
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [a],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
          type: "Subscription",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "AdsDraftRealtimeSubscription",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdDraftPublishSubscribeResponsePayload",
              kind: "LinkedField",
              name: "ad_draft_publish_subscribe",
              plural: !1,
              selections: [
                n,
                r,
                o,
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
                      concreteType: null,
                      kind: "LinkedField",
                      name: "actor",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          kind: "ScalarField",
                          name: "__typename",
                          storageKey: null,
                        },
                        a,
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
        },
        params: {
          id: "9629535650464174",
          metadata: { subscriptionName: "ad_draft_publish_subscribe" },
          name: "AdsDraftRealtimeSubscription",
          operationKind: "subscription",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
