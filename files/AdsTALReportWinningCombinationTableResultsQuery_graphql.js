__d(
  "AdsTALReportWinningCombinationTableResultsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "adgroup_ids",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "skip_query" },
        n = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "thumbnail_size",
        },
        r = [{ kind: "Variable", name: "ids", variableName: "adgroup_ids" }],
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        a = {
          alias: null,
          args: [
            {
              kind: "Variable",
              name: "height",
              variableName: "thumbnail_size",
            },
            { kind: "Variable", name: "width", variableName: "thumbnail_size" },
          ],
          concreteType: "Image",
          kind: "LinkedField",
          name: "preview_image",
          plural: !1,
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "uri",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n],
          kind: "Fragment",
          metadata: {
            throwOnFieldError: !0,
            vultureHash: "eNWqZvoto1KMewmIuAxpNRr4vAk=",
          },
          name: "AdsTALReportWinningCombinationTableResultsQuery",
          selections: [
            {
              condition: "skip_query",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: r,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [
                    {
                      kind: "InlineFragment",
                      selections: [o, a],
                      type: "Adgroup",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [e, n, t],
          kind: "Operation",
          name: "AdsTALReportWinningCombinationTableResultsQuery",
          selections: [
            {
              condition: "skip_query",
              kind: "Condition",
              passingValue: !1,
              selections: [
                {
                  alias: null,
                  args: r,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      kind: "ScalarField",
                      name: "__typename",
                      storageKey: null,
                    },
                    o,
                    {
                      kind: "InlineFragment",
                      selections: [a],
                      type: "Adgroup",
                      abstractKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          id: "26523865580565320",
          metadata: { vultureHash: "eNWqZvoto1KMewmIuAxpNRr4vAk=" },
          name: "AdsTALReportWinningCombinationTableResultsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
