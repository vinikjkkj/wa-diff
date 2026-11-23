__d(
  "AdsUEditorAdgroupMessageDestinationPageCategoryQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "pageID" }],
        t = [{ kind: "Variable", name: "id", variableName: "pageID" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "category_name",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "AdsUEditorAdgroupMessageDestinationPageCategoryQuery",
          selections: [
            {
              alias: "local_page",
              args: t,
              concreteType: "Page",
              kind: "LinkedField",
              name: "fetch__Page",
              plural: !1,
              selections: [{ kind: "CatchField", field: n, to: "NULL" }],
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
          name: "AdsUEditorAdgroupMessageDestinationPageCategoryQuery",
          selections: [
            {
              alias: "local_page",
              args: t,
              concreteType: "Page",
              kind: "LinkedField",
              name: "fetch__Page",
              plural: !1,
              selections: [
                n,
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
        },
        params: {
          id: "28806077382335746",
          metadata: {},
          name: "AdsUEditorAdgroupMessageDestinationPageCategoryQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
