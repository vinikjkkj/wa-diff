__d(
  "AdsPromotablePageListStoreSourceServerQuery.graphql",
  ["Page-promotable_page_list_spec-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = (function () {
      var e = { defaultValue: null, kind: "LocalArgument", name: "after" },
        t = { defaultValue: null, kind: "LocalArgument", name: "filter" },
        r = { defaultValue: null, kind: "LocalArgument", name: "limit" },
        o = { defaultValue: null, kind: "LocalArgument", name: "userId" },
        a = [{ kind: "Variable", name: "id", variableName: "userId" }],
        i = {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        l = [
          { kind: "Variable", name: "after", variableName: "after" },
          { kind: "Variable", name: "first", variableName: "limit" },
          { kind: "Literal", name: "is_promotable", value: !0 },
          {
            kind: "Variable",
            name: "name_or_id_contains",
            variableName: "filter",
          },
        ],
        s = {
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
              name: "has_next_page",
              storageKey: null,
            },
            {
              alias: null,
              args: null,
              kind: "ScalarField",
              name: "end_cursor",
              storageKey: null,
            },
          ],
          storageKey: null,
        };
      return {
        fragment: {
          argumentDefinitions: [e, t, r, o],
          kind: "Fragment",
          metadata: null,
          name: "AdsPromotablePageListStoreSourceServerQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                i,
                {
                  alias: null,
                  args: l,
                  concreteType: "UserFacebookPagesConnection",
                  kind: "LinkedField",
                  name: "facebook_pages",
                  plural: !1,
                  selections: [
                    s,
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
                          path: "user.facebook_pages.nodes.promotablepagelist_spec",
                        },
                      ],
                      storageKey: null,
                    },
                  ],
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
          argumentDefinitions: [o, t, r, e],
          kind: "Operation",
          name: "AdsPromotablePageListStoreSourceServerQuery",
          selections: [
            {
              alias: null,
              args: a,
              concreteType: "User",
              kind: "LinkedField",
              name: "user",
              plural: !1,
              selections: [
                i,
                {
                  alias: null,
                  args: l,
                  concreteType: "UserFacebookPagesConnection",
                  kind: "LinkedField",
                  name: "facebook_pages",
                  plural: !1,
                  selections: [
                    s,
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
                              i,
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
                        i,
                      ],
                      storageKey: null,
                    },
                  ],
                  storageKey: null,
                },
              ],
              storageKey: null,
            },
          ],
        },
        params: {
          id: "26138679029145319",
          metadata: {},
          name: "AdsPromotablePageListStoreSourceServerQuery",
          operationKind: "query",
          text: null,
        },
      };
    })();
    a.exports = e;
  },
  null,
);
