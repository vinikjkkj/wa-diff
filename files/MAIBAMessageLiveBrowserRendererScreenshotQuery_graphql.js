__d(
  "MAIBAMessageLiveBrowserRendererScreenshotQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = {
          defaultValue: null,
          kind: "LocalArgument",
          name: "click_selector",
        },
        t = { defaultValue: null, kind: "LocalArgument", name: "initial_url" },
        n = [
          {
            alias: null,
            args: [
              {
                kind: "Variable",
                name: "click_selector",
                variableName: "click_selector",
              },
              {
                kind: "Variable",
                name: "initial_url",
                variableName: "initial_url",
              },
            ],
            concreteType: "XFBMAIBABrowserScreenshotPayload",
            kind: "LinkedField",
            name: "xfb_maiba_browser_screenshot",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "screenshot_url",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "screenshot_data",
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                kind: "ScalarField",
                name: "status",
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: [e, t],
          kind: "Fragment",
          metadata: null,
          name: "MAIBAMessageLiveBrowserRendererScreenshotQuery",
          selections: n,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [t, e],
          kind: "Operation",
          name: "MAIBAMessageLiveBrowserRendererScreenshotQuery",
          selections: n,
        },
        params: {
          id: "26819206974436266",
          metadata: {},
          name: "MAIBAMessageLiveBrowserRendererScreenshotQuery",
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
