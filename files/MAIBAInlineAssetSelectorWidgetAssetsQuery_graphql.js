__d(
  "MAIBAInlineAssetSelectorWidgetAssetsQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [{ defaultValue: null, kind: "LocalArgument", name: "input" }],
        t = [{ kind: "Variable", name: "input", variableName: "input" }],
        n = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "name",
          storageKey: null,
        },
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "asset_id",
          storageKey: null,
        },
        o = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "type",
          storageKey: null,
        },
        a = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "image_url",
          storageKey: null,
        },
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pill_label",
          storageKey: null,
        },
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "pill_status",
          storageKey: null,
        },
        s = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "platform",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAInlineAssetSelectorWidgetAssetsQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBMAIBASupportAIAssetAPIAsset",
              kind: "LinkedField",
              name: "xfb_maiba_support_ai_asset_api",
              plural: !0,
              selections: [
                n,
                r,
                { kind: "RequiredField", field: o, action: "LOG" },
                a,
                i,
                l,
                s,
              ],
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
          name: "MAIBAInlineAssetSelectorWidgetAssetsQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "XFBMAIBASupportAIAssetAPIAsset",
              kind: "LinkedField",
              name: "xfb_maiba_support_ai_asset_api",
              plural: !0,
              selections: [
                n,
                r,
                o,
                a,
                i,
                l,
                s,
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
          id: "35544094851905356",
          metadata: {},
          name: "MAIBAInlineAssetSelectorWidgetAssetsQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
