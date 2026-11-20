__d(
  "WAWebDebugLabyrinthFetchVirtualDeviceInfoJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [
          {
            alias: null,
            args: [{ kind: "Variable", name: "input", variableName: "input" }],
            concreteType: null,
            kind: "LinkedField",
            name: "wa_labyrinth_fetch_virtual_device_info",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "__typename",
                storageKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "encrypted_secret_values",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "mailbox_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "active_epoch_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "vd_base_epoch_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    concreteType: "WALabyrinthSyncEpoch",
                    kind: "LinkedField",
                    name: "sync_epochs",
                    plural: !0,
                    selections: [
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "epoch_id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "encrypted_epoch_key",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "epoch_anon_id",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "sender_auth_pub_key",
                        storageKey: null,
                      },
                      {
                        alias: null,
                        args: null,
                        kind: "ScalarField",
                        name: "next_epoch_id",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                ],
                type: "WALabyrinthFetchVirtualDeviceInfoData",
                abstractKey: null,
              },
              {
                kind: "InlineFragment",
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "error_code",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "message",
                    storageKey: null,
                  },
                ],
                type: "WALabyrinthFetchVirtualDeviceInfoError",
                abstractKey: null,
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
          name: "WAWebDebugLabyrinthFetchVirtualDeviceInfoJobQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebDebugLabyrinthFetchVirtualDeviceInfoJobQuery",
          selections: t,
        },
        params: {
          id: "28519588807706310",
          metadata: {},
          name: "WAWebDebugLabyrinthFetchVirtualDeviceInfoJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
