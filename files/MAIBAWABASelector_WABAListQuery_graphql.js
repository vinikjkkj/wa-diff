__d(
  "MAIBAWABASelector_WABAListQuery.graphql",
  [],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = [
          { defaultValue: null, kind: "LocalArgument", name: "businessID" },
          { defaultValue: null, kind: "LocalArgument", name: "searchTerm" },
        ],
        t = [{ kind: "Variable", name: "id", variableName: "businessID" }],
        n = [
          { kind: "Literal", name: "first", value: 25 },
          { kind: "Variable", name: "search_term", variableName: "searchTerm" },
        ],
        r = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: e,
          kind: "Fragment",
          metadata: { throwOnFieldError: !0 },
          name: "MAIBAWABASelector_WABAListQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdBusiness",
              kind: "LinkedField",
              name: "business",
              plural: !1,
              selections: [
                {
                  args: null,
                  kind: "FragmentSpread",
                  name: "MAIBAWABASelector_business",
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
          argumentDefinitions: e,
          kind: "Operation",
          name: "MAIBAWABASelector_WABAListQuery",
          selections: [
            {
              alias: null,
              args: t,
              concreteType: "AdBusiness",
              kind: "LinkedField",
              name: "business",
              plural: !1,
              selections: [
                {
                  alias: null,
                  args: n,
                  concreteType:
                    "AdBusinessSupportWhatsappBusinessAccountsConnection",
                  kind: "LinkedField",
                  name: "support_whatsapp_business_accounts",
                  plural: !1,
                  selections: [
                    {
                      alias: null,
                      args: null,
                      concreteType:
                        "AdBusinessSupportWhatsappBusinessAccountsEdge",
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
                            r,
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
                {
                  alias: null,
                  args: n,
                  filters: ["search_term"],
                  handle: "connection",
                  key: "MAIBAWABASelector_support_whatsapp_business_accounts",
                  kind: "LinkedHandle",
                  name: "support_whatsapp_business_accounts",
                },
                r,
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "28545100785109151",
          metadata: {},
          name: "MAIBAWABASelector_WABAListQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
