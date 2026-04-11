__d(
  "WAWebBizAdCreationResolveVideoURLQuery.graphql",
  ["WAWebBizAdCreationResolveVideoURLQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "videoID" }],
        t = [{ kind: "Variable", name: "id", variableName: "videoID" }],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "playable_url",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAdCreationResolveVideoURLQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Video",
              kind: "LinkedField",
              name: "fetch__Video",
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
          name: "WAWebBizAdCreationResolveVideoURLQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "Video",
              kind: "LinkedField",
              name: "fetch__Video",
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
          id: n(
            "WAWebBizAdCreationResolveVideoURLQuery_facebookRelayOperation",
          ),
          metadata: {},
          name: "WAWebBizAdCreationResolveVideoURLQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
