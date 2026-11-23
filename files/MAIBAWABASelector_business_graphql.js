__d(
  "MAIBAWABASelector_business.graphql",
  ["MAIBAWABASelectorPaginationQuery.graphql"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = ["support_whatsapp_business_accounts"],
        t = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        argumentDefinitions: [
          { defaultValue: 25, kind: "LocalArgument", name: "count" },
          { defaultValue: null, kind: "LocalArgument", name: "cursor" },
          { kind: "RootArgument", name: "searchTerm" },
        ],
        kind: "Fragment",
        metadata: {
          connection: [
            { count: "count", cursor: "cursor", direction: "forward", path: e },
          ],
          refetch: {
            connection: {
              forward: { count: "count", cursor: "cursor" },
              backward: null,
              path: e,
            },
            fragmentPathInResult: ["node"],
            operation: n("MAIBAWABASelectorPaginationQuery.graphql"),
            identifierInfo: {
              identifierField: "id",
              identifierQueryVariableName: "id",
            },
          },
          throwOnFieldError: !0,
        },
        name: "MAIBAWABASelector_business",
        selections: [
          {
            alias: "support_whatsapp_business_accounts",
            args: [
              {
                kind: "Variable",
                name: "search_term",
                variableName: "searchTerm",
              },
            ],
            concreteType: "AdBusinessSupportWhatsappBusinessAccountsConnection",
            kind: "LinkedField",
            name: "__MAIBAWABASelector_support_whatsapp_business_accounts_connection",
            plural: !1,
            selections: [
              {
                alias: null,
                args: null,
                concreteType: "AdBusinessSupportWhatsappBusinessAccountsEdge",
                kind: "LinkedField",
                name: "edges",
                plural: !0,
                selections: [
                  {
                    alias: null,
                    args: null,
                    concreteType: "WhatsAppBusinessAccount",
                    kind: "LinkedField",
                    name: "node",
                    plural: !1,
                    selections: [
                      t,
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
                        name: "__typename",
                        storageKey: null,
                      },
                    ],
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "cursor",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
              {
                alias: null,
                args: null,
                concreteType: "PageInfo",
                kind: "LinkedField",
                name: "page_info",
                plural: !1,
                selections: [
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "end_cursor",
                    storageKey: null,
                  },
                  {
                    alias: null,
                    args: null,
                    kind: "ScalarField",
                    name: "has_next_page",
                    storageKey: null,
                  },
                ],
                storageKey: null,
              },
            ],
            storageKey: null,
          },
          t,
        ],
        type: "AdBusiness",
        abstractKey: null,
      };
    })();
    a.exports = e;
  },
  null,
);
