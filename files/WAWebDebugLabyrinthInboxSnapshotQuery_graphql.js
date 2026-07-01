__d(
  "WAWebDebugLabyrinthInboxSnapshotQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "params" }],
        t = [{ kind: "Variable", name: "params", variableName: "params" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        r = [n],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_payload",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encryption_version",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebDebugLabyrinthInboxSnapshotQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "get_wa_mailbox",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: t,
                  concreteType: "WAMailboxSnapshotResponse",
                  kind: "LinkedField",
                  name: "snapshot_threads_with_messages",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "WAMailboxSnapshotItemWithMessages",
                      kind: "LinkedField",
                      name: "items_with_messages",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "item",
                          plural: !1,
                          selections: r,
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "messages",
                          plural: !0,
                          selections: [o, a, n],
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
          name: "WAWebDebugLabyrinthInboxSnapshotQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: null,
              kind: "LinkedField",
              name: "get_wa_mailbox",
              plural: !1,
              selections: [
                i,
                {
                  alias: null,
                  args: t,
                  concreteType: "WAMailboxSnapshotResponse",
                  kind: "LinkedField",
                  name: "snapshot_threads_with_messages",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: "WAMailboxSnapshotItemWithMessages",
                      kind: "LinkedField",
                      name: "items_with_messages",
                      plural: !0,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "item",
                          plural: !1,
                          selections: [
                            i,
                            {
                              kind: "TypeDiscriminator",
                              abstractKey: "__isWAMessagingViewerThread",
                            },
                            n,
                          ],
                          storageKey: null,
                        },
                        {
                          alias: null,
                          args: null,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "messages",
                          plural: !0,
                          selections: [i, o, a, n],
                          storageKey: null,
                        },
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
                {
                  kind: "InlineFragment",
                  selections: r,
                  type: "WALabyrinthAccount",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27416732057922291",
          metadata: {},
          name: "WAWebDebugLabyrinthInboxSnapshotQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
