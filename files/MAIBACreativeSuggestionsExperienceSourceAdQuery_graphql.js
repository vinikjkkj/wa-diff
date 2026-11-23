__d(
  "MAIBACreativeSuggestionsExperienceSourceAdQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adgroupID" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "adgroupID" }],
        n = {
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
          metadata: { throwOnFieldError: !0 },
          name: "MAIBACreativeSuggestionsExperienceSourceAdQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAAdgroupData",
              kind: "LinkedField",
              name: "maiba_adgroup",
              plural: !1,
              selections: [n],
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
          name: "MAIBACreativeSuggestionsExperienceSourceAdQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "MAIBAAdgroupData",
              kind: "LinkedField",
              name: "maiba_adgroup",
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
          id: "39462947759985795",
          metadata: {},
          name: "MAIBACreativeSuggestionsExperienceSourceAdQuery",
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
