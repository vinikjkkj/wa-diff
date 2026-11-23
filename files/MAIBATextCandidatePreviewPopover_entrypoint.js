__d(
  "MAIBATextCandidatePreviewPopover.entrypoint",
  [
    "JSResourceForInteraction",
    "MAIBATextCandidatePreviewPopoverQuery$Parameters",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            queryReference: {
              parameters: r("MAIBATextCandidatePreviewPopoverQuery$Parameters"),
              variables: babelHelpers.extends({}, t),
              options: { fetchPolicy: "store-or-network" },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBATextCandidatePreviewPopover.react",
      ).__setRef("MAIBATextCandidatePreviewPopover.entrypoint"),
    };
    l.default = e;
  },
  98,
);
