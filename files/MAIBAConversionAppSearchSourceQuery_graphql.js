__d(
  "MAIBAConversionAppSearchSourceQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "adAccountID" },
          { defaultValue: null, kind: "LocalArgument", name: "country" },
          { defaultValue: null, kind: "LocalArgument", name: "query" },
        ],
        t = [
          {
            alias: null,
            args: null,
            concreteType: "LWIAPI",
            kind: "LinkedField",
            name: "lwi",
            plural: !1,
            selections: [
              {
                alias: null,
                args: [
                  {
                    kind: "Variable",
                    name: "ad_account_id",
                    variableName: "adAccountID",
                  },
                  { kind: "Literal", name: "allow_incomplete_app", value: !0 },
                  {
                    kind: "Literal",
                    name: "app_store",
                    value: "ALL_APP_STORES_FOR_ANDROID_AND_IOS",
                  },
                  {
                    kind: "Variable",
                    name: "country",
                    variableName: "country",
                  },
                  { kind: "Variable", name: "query", variableName: "query" },
                ],
                concreteType: "AppSearchResult",
                kind: "LinkedField",
                name: "app_store_applications",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "app_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "digital_content_store",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "icon_url",
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
                    name: "search_source_store",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "unique_id",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "url",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
        ];
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: null,
          name: "MAIBAConversionAppSearchSourceQuery",
          selections: t,
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAConversionAppSearchSourceQuery",
          selections: t,
        },
        params: {
          id: "28997485953248409",
          metadata: {},
          name: "MAIBAConversionAppSearchSourceQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
