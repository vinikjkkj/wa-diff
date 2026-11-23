__d(
  "MAIBABusinessSetupAddExistingPageModalAvatarsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "pageIDs" }],
        t = [{ kind: "Variable", name: "ids", variableName: "pageIDs" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "node_id",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          concreteType: "Image",
          kind: "LinkedField",
          name: "profile_picture",
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
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBABusinessSetupAddExistingPageModalAvatarsQuery",
          selections: [
            {
              kind: "CatchField",
              field: {
                alias: "pages",
                args: t,
                concreteType: "PageMultifetchEdge",
                kind: "LinkedField",
                name: "multifetch__Page",
                plural: !0,
                selections: [
                  n,
                  {
                    alias: null,
                    args: null,
                    concreteType: "Page",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [r],
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              to: "NULL",
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBABusinessSetupAddExistingPageModalAvatarsQuery",
          selections: [
            {
              alias: "pages",
              args: t,
              concreteType: "PageMultifetchEdge",
              kind: "LinkedField",
              name: "multifetch__Page",
              plural: !0,
              selections: [
                n,
                {
                  alias: null,
                  args: null,
                  concreteType: "Page",
                  kind: "LinkedField",
                  name: "node",
                  plural: !1,
                  selections: [
                    r,
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
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27391502383823756",
          metadata: {},
          name: "MAIBABusinessSetupAddExistingPageModalAvatarsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
