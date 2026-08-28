__d(
  "AdsPromotablePageListStoreSourceLoadedQuery.graphql",
  ["Page-promotable_page_list_spec-resolver"],
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
        t = [{ kind: "Literal", name: "is_promotable", value: !0 }];
      return {
        fragment: {
          argumentDefinitions: [],
          kind: "Fragment",
          metadata: null,
          name: "AdsPromotablePageListStoreSourceLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "loaded_pages_for_users",
                  plural: !0,
                  selections: [
                    e,
                    {
                      alias: null,
                      args: t,
                      concreteType: "UserFacebookPagesConnection",
                      kind: "LinkedField",
                      name: "facebook_pages",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Page",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            {
                              alias: null,
                              args: null,
                              fragment: {
                                args: null,
                                kind: "FragmentSpread",
                                name: "PagePromotablePageListSpecResolver",
                              },
                              kind: "RelayResolver",
                              name: "promotablepagelist_spec",
                              resolverModule: n(
                                "Page-promotable_page_list_spec-resolver",
                              ).promotablepagelist_spec,
                              path: "loaded_pages_for_users.facebook_pages.nodes.promotablepagelist_spec",
                            },
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: "facebook_pages(is_promotable:true)",
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
          type: "Query",
          abstractKey: null,
        },
        kind: "Request",
        operation: {
          argumentDefinitions: [],
          kind: "Operation",
          name: "AdsPromotablePageListStoreSourceLoadedQuery",
          selections: [
            {
              kind: "ClientExtension",
              selections: [
                {
                  alias: null,
                  args: null,
                  concreteType: "User",
                  kind: "LinkedField",
                  name: "loaded_pages_for_users",
                  plural: !0,
                  selections: [
                    e,
                    {
                      alias: null,
                      args: t,
                      concreteType: "UserFacebookPagesConnection",
                      kind: "LinkedField",
                      name: "facebook_pages",
                      plural: !1,
                      selections: [
                        {
                          alias: null,
                          args: null,
                          concreteType: "Page",
                          kind: "LinkedField",
                          name: "nodes",
                          plural: !0,
                          selections: [
                            {
                              name: "promotablepagelist_spec",
                              args: null,
                              fragment: {
                                kind: "InlineFragment",
                                selections: [
                                  e,
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "is_instagram_account_backed_page",
                                    storageKey: null,
                                  },
                                  {
                                    alias: null,
                                    args: null,
                                    kind: "ScalarField",
                                    name: "is_whatsapp_ads_identity",
                                    storageKey: null,
                                  },
                                ],
                                type: "Page",
                                abstractKey: null,
                              },
                              kind: "RelayResolver",
                              storageKey: null,
                              isOutputType: !0,
                            },
                            e,
                          ],
                          storageKey: null,
                        },
                      ],
                      storageKey: "facebook_pages(is_promotable:true)",
                    },
                  ],
                  storageKey: null,
                },
              ],
            },
          ],
        },
        params: {
          cacheID: "fed0955132d2c12c9bd0c2b5b0b2ec17",
          id: null,
          metadata: {},
          name: "AdsPromotablePageListStoreSourceLoadedQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
