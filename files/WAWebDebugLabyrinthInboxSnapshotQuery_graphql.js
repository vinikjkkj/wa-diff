__d(
  "WAWebDebugLabyrinthInboxSnapshotQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "messageFirst",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "threadFirst" },
        n = [{ kind: "Variable", name: "first", variableName: "threadFirst" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        o = [{ kind: "Variable", name: "first", variableName: "messageFirst" }],
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encrypted_payload",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "encryption_version",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
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
                  args: n,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "threads",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [
                        r,
                        {
                          alias: null,
                          args: o,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "messages",
                          plural: !1,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [a, i, r],
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
              storageKey: null,
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
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
                l,
                {
                  alias: null,
                  args: n,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "threads",
                  plural: !1,
                  selections: [
                    l,
                    {
                      alias: null,
                      args: null,
                      concreteType: null,
                      kind: "LinkedField",
                      name: "nodes",
                      plural: !0,
                      selections: [
                        l,
                        r,
                        {
                          alias: null,
                          args: o,
                          concreteType: null,
                          kind: "LinkedField",
                          name: "messages",
                          plural: !1,
                          selections: [
                            l,
                            {
                              alias: null,
                              args: null,
                              concreteType: null,
                              kind: "LinkedField",
                              name: "edges",
                              plural: !0,
                              selections: [
                                l,
                                {
                                  alias: null,
                                  args: null,
                                  concreteType: null,
                                  kind: "LinkedField",
                                  name: "node",
                                  plural: !1,
                                  selections: [l, a, i, r],
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
                  kind: "InlineFragment",
                  selections: [r],
                  type: "WALabyrinthAccount",
                  abstractKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27702565322674924",
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
