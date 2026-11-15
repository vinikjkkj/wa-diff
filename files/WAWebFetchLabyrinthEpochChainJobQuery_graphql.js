__d(
  "WAWebFetchLabyrinthEpochChainJobQuery.graphql",
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
          name: "wa_labyrinth_fetch_epoch_chain",
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
                  name: "backup_id",
                  storageKey: null,
                },
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "active_epoch_id",
                  storageKey: null,
                },
              ],
              type: "WALabyrinthFetchEpochChainData",
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
              type: "WALabyrinthFetchEpochChainError",
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
          name: "WAWebFetchLabyrinthEpochChainJobQuery",
          selections: e,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebFetchLabyrinthEpochChainJobQuery",
          selections: e,
        },
        params: {
          id: "28763143453350226",
          metadata: {},
          name: "WAWebFetchLabyrinthEpochChainJobQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
