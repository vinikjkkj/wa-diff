__d(
  "MAIBABoostPostAdPreviewPopover.entrypoint",
  [
    "JSResourceForInteraction",
    "MAIBABoostPostAdPreviewPopoverQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            MAIBABoostPostAdPreviewPopoverQueryReference: {
              parameters: r("MAIBABoostPostAdPreviewPopoverQuery$Parameters"),
              variables: { campaign_group_draft_id: t.campaign_group_draft_id },
              options: { fetchPolicy: "network-only" },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBABoostPostAdPreviewPopover.react",
      ).__setRef("MAIBABoostPostAdPreviewPopover.entrypoint"),
    };
    l.default = e;
  },
  98,
);
