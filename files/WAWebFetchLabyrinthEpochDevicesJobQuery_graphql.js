__d(
  "WAWebFetchLabyrinthEpochDevicesJobQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
        {
          alias: null,
          args: null,
          concreteType: null,
          kind: "LinkedField",
          name: "wa_labyrinth_fetch_epoch_devices",
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
                  name: "epoch_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  concreteType: "WALabyrinthEpochDevice",
                  kind: "LinkedField",
                  name: "devices",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "device_id",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "device_public_key",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "epoch_storage_public_key",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "epoch_storage_public_key_sig",
                      storageKey: null,
                    },
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "device_epoch_hmac",
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              type: "WALabyrinthFetchEpochDevicesData",
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
              type: "WALabyrinthFetchEpochDevicesError",
              abstractKey: null,
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
          name: "WAWebFetchLabyrinthEpochDevicesJobQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebFetchLabyrinthEpochDevicesJobQuery",
          selections: e,
        },
        params: {
          id: "28943839351888604",
          metadata: {},
          name: "WAWebFetchLabyrinthEpochDevicesJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
