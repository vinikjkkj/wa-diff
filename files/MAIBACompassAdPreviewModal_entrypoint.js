__d(
  "MAIBACompassAdPreviewModal.entrypoint",
  ["JSResourceForInteraction", "MAIBACompassAdPreviewModalQuery$Parameters"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
      getPreloadProps: function (t) {
        return {
          queries: {
            adQueryRef: {
              parameters: r("MAIBACompassAdPreviewModalQuery$Parameters"),
              variables: { adgroupID: t.adgroupID },
            },
          },
        };
      },
      root: r("JSResourceForInteraction")(
        "MAIBACompassAdPreviewModal.react",
      ).__setRef("MAIBACompassAdPreviewModal.entrypoint"),
    };
    l.default = e;
  },
  98,
);
