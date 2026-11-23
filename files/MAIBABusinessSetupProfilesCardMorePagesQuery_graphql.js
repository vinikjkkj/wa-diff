__d(
  "MAIBABusinessSetupProfilesCardMorePagesQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "input" },
        t = { defaultValue: null, kind: "LocalArgument", name: "otid" },
        n = [
          { kind: "Variable", name: "input", variableName: "input" },
          { kind: "Variable", name: "otid", variableName: "otid" },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "result",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "MAIBABusinessSetupProfilesCardMorePagesQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_get_business_context",
              plural: !1,
              selections: [r],
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
          name: "MAIBABusinessSetupProfilesCardMorePagesQuery",
          selections: [
            {
              alias: null,
              args: n,
              concreteType: null,
              kind: "LinkedField",
              name: "xfb_get_business_context",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  kind: "ScalarField",
                  name: "__typename",
                  storageKey: null,
                },
                r,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "27664227383187356",
          metadata: {},
          name: "MAIBABusinessSetupProfilesCardMorePagesQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
