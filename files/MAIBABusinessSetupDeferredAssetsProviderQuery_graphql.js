__d(
  "MAIBABusinessSetupDeferredAssetsProviderQuery.graphql",
  ["relay-runtime"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "businessContextInput",
          },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "includeAdAccounts",
          },
          { defaultValue: null, kind: "LocalArgument", name: "includePages" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "instagramAssetIDs",
          },
          { defaultValue: null, kind: "LocalArgument", name: "otid" },
          {
            defaultValue: null,
            kind: "LocalArgument",
            name: "pagesContextInput",
          },
        ],
        t = { kind: "Variable", name: "otid", variableName: "otid" },
        n = [
          {
            kind: "Variable",
            name: "input",
            variableName: "businessContextInput",
          },
          t,
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "result",
          storageKey: null,
        },
        o = [r],
        a = [
          {
            kind: "Variable",
            name: "input",
            variableName: "pagesContextInput",
          },
          t,
        ],
        i = [
          { kind: "Variable", name: "ids", variableName: "instagramAssetIDs" },
        ],
        l = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "__typename",
          storageKey: null,
        },
        s = {
          kind: "InlineFragment",
          selections: [
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "ig_asset_id",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "name",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "profile_pic_uri",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "username",
              storageKey: null,
            },
          ],
          type: "XFBInstagramBusinessAsset",
          abstractKey: null,
        },
        u = [l, r];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "MAIBABusinessSetupDeferredAssetsProviderQuery",
          selections: [
            {
              condition: "includeAdAccounts",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  kind: "CatchField",
                  field: {
                    alias: "adAccountsContext",
                    args: n,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "xfb_get_business_context",
                    plural: !1,
                    selections: o,
                    storageKey: null,
                  },
                  to: "NULL",
                },
              ],
            },
            {
              condition: "includePages",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  kind: "CatchField",
                  field: {
                    alias: "pagesContext",
                    args: a,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "xfb_get_business_context",
                    plural: !1,
                    selections: o,
                    storageKey: null,
                  },
                  to: "NULL",
                },
                {
                  kind: "CatchField",
                  field: {
                    alias: "instagramAssets",
                    args: i,
                    concreteType: null,
                    kind: "LinkedField",
                    name: "nodes",
                    plural: !0,
                    selections: [l, s],
                    storageKey: null,
                  },
                  to: "NULL",
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBABusinessSetupDeferredAssetsProviderQuery",
          selections: [
            {
              condition: "includeAdAccounts",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "adAccountsContext",
                  args: n,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "xfb_get_business_context",
                  plural: !1,
                  selections: u,
                  storageKey: null,
                },
              ],
            },
            {
              condition: "includePages",
              kind: "Condition",
              passingValue: !0,
              selections: [
                {
                  alias: "pagesContext",
                  args: a,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "xfb_get_business_context",
                  plural: !1,
                  selections: u,
                  storageKey: null,
                },
                {
                  alias: "instagramAssets",
                  args: i,
                  concreteType: null,
                  kind: "LinkedField",
                  name: "nodes",
                  plural: !0,
                  selections: [
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
          ],
        },
        params: {
          id: "27705488742486298",
          metadata: {},
          name: "MAIBABusinessSetupDeferredAssetsProviderQuery",
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
