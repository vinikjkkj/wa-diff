__d(
  "AdsPageStoreSourceFragment.graphql",
  ["Page-base_page_spec-resolver"],
  function (t, n, r, o, a, i) {
    "use strict";
    var e = {
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "AdsPageStoreSourceFragment",
      selections: [
        {
          alias: null,
          args: [],
          fragment: {
            args: [
              {
                kind: "Literal",
                name: "gk_nawfal_pages_page_store_overfetch_launch",
                value: !1,
              },
            ],
            kind: "FragmentSpread",
            name: "PageBasePageSpecResolver",
          },
          kind: "RelayResolver",
          name: "basepage_spec",
          resolverModule: n("Page-base_page_spec-resolver").basepage_spec,
          path: "basepage_spec",
        },
      ],
      type: "Page",
      abstractKey: null,
    };
    a.exports = e;
  },
  null,
);
