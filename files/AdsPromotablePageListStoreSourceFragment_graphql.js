__d(
  "AdsPromotablePageListStoreSourceFragment.graphql",
  ["Page-promotable_page_list_spec-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsPromotablePageListStoreSourceFragment",
      selections: [
        {
          alias: null,
          args: null,
          kind: "ScalarField",
          name: "id",
          storageKey: null,
        },
        {
          alias: null,
          args: [{ kind: "Literal", name: "is_promotable", value: !0 }],
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
                  resolverModule: n("Page-promotable_page_list_spec-resolver")
                    .promotablepagelist_spec,
                  path: "facebook_pages.nodes.promotablepagelist_spec",
                },
              ],
              storageKey: null,
            },
          ],
          storageKey: "facebook_pages(is_promotable:true)",
        },
      ],
      type: "User",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
