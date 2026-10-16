__d(
  "WAWebBizAiMetaOneDialogLauncherQuery.graphql",
  ["WAWebBizAiMetaOneDialogLauncherQuery_facebookRelayOperation"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        t = {
          alias: null,
          args: null,
          concreteType: "AdBusiness",
          kind: "LinkedField",
          name: "owner_business",
          plural: !1,
          selections: [e],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "WAWebBizAiMetaOneDialogLauncherQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "WhatsAppBusinessAccount",
                  kind: "LinkedField",
                  name: "backing_waba",
                  plural: !1,
                  selections: [t],
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
          argumentDefinitions: [],
          kind: "Operation",
          name: "WAWebBizAiMetaOneDialogLauncherQuery",
          selections: [
            {
              alias: null,
              args: null,
              concreteType: "Viewer",
              kind: "LinkedField",
              name: "viewer",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "WhatsAppBusinessAccount",
                  kind: "LinkedField",
                  name: "backing_waba",
                  plural: !1,
                  selections: [t, e],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: n("WAWebBizAiMetaOneDialogLauncherQuery_facebookRelayOperation"),
          metadata: {},
          name: "WAWebBizAiMetaOneDialogLauncherQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
