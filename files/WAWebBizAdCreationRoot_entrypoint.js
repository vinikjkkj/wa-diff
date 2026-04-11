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
                input: {
                  page_id: t.page_id,
                  flow_id: t.flow_id,
                  product: "BOOSTED_MESSAGE",
                  ad_account_id: t.ad_account_id,
                  boost_id: t.boost_id,
                },
                draftID: t.draft_id,
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
