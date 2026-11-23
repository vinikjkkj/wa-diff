__d(
  "MAIBASettingsModal.entrypoint",
  ["JSResourceForInteraction", "MAIBASettingsModalQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            MAIBASettingsModalQueryReference: {
              parameters: r("MAIBASettingsModalQuery$Parameters"),
              variables: {
                ad_account_id: t.ad_account_id,
                client_context: t.client_context,
                organization_id: t.organization_id,
              },
              options: { fetchPolicy: "network-only" },
            },
          },
          extraProps: { isMobileWebview: t.isMobileWebview },
        };
      },
      root: r("JSResourceForInteraction")("MAIBASettingsModal.react").__setRef(
        "MAIBASettingsModal.entrypoint",
      ),
    };
    l.default = e;
  },
  98,
);
