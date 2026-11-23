__d(
  "AdsPETypeAheadAutoSuggestedLabelFilterSearchSourceQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "accountID" },
        t = { defaultValue: null, kind: "LocalArgument", name: "activeOnly" },
        n = { defaultValue: null, kind: "LocalArgument", name: "limit" },
        r = { defaultValue: null, kind: "LocalArgument", name: "searchText" },
        o = [
          {
            kind: "Variable",
            name: "legacy_account_id",
            variableName: "accountID",
          },
        ],
        a = [
          { kind: "Variable", name: "active_only", variableName: "activeOnly" },
          { kind: "Variable", name: "limit", variableName: "limit" },
          { kind: "Variable", name: "search_text", variableName: "searchText" },
        ],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, n, r],
          kind: "Fragment",
          metadata: null,
          name: "AdsPETypeAheadAutoSuggestedLabelFilterSearchSourceQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: a,
                  concreteType: "AdLabel",
                  kind: "LinkedField",
                  name: "ad_labels",
                  plural: !0,
                  selections: [
                    { kind: "RequiredField", field: i, action: "THROW" },
                    { kind: "RequiredField", field: l, action: "THROW" },
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
          argumentDefinitions: [e, r, n, t],
          kind: "Operation",
          name: "AdsPETypeAheadAutoSuggestedLabelFilterSearchSourceQuery",
          selections: [
            {
              alias: null,
              args: o,
              concreteType: "AdAccount",
              kind: "LinkedField",
              name: "ad_account",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: a,
                  concreteType: "AdLabel",
                  kind: "LinkedField",
                  name: "ad_labels",
                  plural: !0,
                  selections: [i, l],
                  storageKey: null,
                },
                i,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "24630536786587887",
          metadata: {},
          name: "AdsPETypeAheadAutoSuggestedLabelFilterSearchSourceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
