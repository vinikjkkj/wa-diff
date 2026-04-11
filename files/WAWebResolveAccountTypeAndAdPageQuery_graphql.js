__d(
  "WAWebResolveAccountTypeAndAdPageQuery.graphql",
  ["WAWebResolveAccountTypeAndAdPageQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "pageId" }],
        t = [{ kind: "Variable", name: "id", variableName: "pageId" }],
        r = {
          alias: null,
          args: [{ kind: "Literal", name: "actions", value: ["CREATE_ADS"] }],
          kind: "ScalarField",
          name: "can_viewer_do_actions",
          storageKey: 'can_viewer_do_actions(actions:["CREATE_ADS"])',
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebResolveAccountTypeAndAdPageQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "WAWebResolveAccountTypeAndAdPageQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Page",
              kind: "LinkedField",
              name: "page",
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
        },
        params: {
          id: n("WAWebResolveAccountTypeAndAdPageQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebResolveAccountTypeAndAdPageQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
