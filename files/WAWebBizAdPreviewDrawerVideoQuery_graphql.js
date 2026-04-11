__d(
  "WAWebBizAdPreviewDrawerVideoQuery.graphql",
  ["WAWebBizAdPreviewDrawerVideoQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "videoId" }],
        t = [{ kind: "Variable", name: "id", variableName: "videoId" }],
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
          name: "WAWebBizAdPreviewDrawerVideoQuery",
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
          name: "WAWebBizAdPreviewDrawerVideoQuery",
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
          id: n("WAWebBizAdPreviewDrawerVideoQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAdPreviewDrawerVideoQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
