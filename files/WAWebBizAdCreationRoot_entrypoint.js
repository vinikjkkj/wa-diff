__d(
  "WAWebBizAdCreationRoot.entrypoint",
  ["JSResourceForInteraction", "WAWebBizAdCreationRootQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            creationRootQueryReference: {
              options: { fetchPolicy: "network-only" },
              parameters: r("WAWebBizAdCreationRootQuery$Parameters"),
              variables: {
                draftID: t.draft_id,
                input: {
                  ad_account_id: t.ad_account_id,
                  boost_id: t.boost_id,
                  flow_id: t.flow_id,
                  page_id: t.page_id,
                  product: "BOOSTED_MESSAGE",
                },
                isFBAccount: t.ad_account_type === "FB",
                isWAAccount: t.ad_account_type === "WAA",
                pageID: t.page_id,
              },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "WAWebBizAdCreationRoot.react",
      ).__setRef("WAWebBizAdCreationRoot.entrypoint"),
    };
    l.default = e;
  },
  98,
);
