__d(
  "MAIBAPreviewPublishTargetingResolver",
  ["MAIBAPreviewPublishReviewUtils", "useMAIBAPreviewPublishTargetingNames"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t) {
      var n = r("useMAIBAPreviewPublishTargetingNames")(e, t),
        o = n.isLoading,
        a = n.names;
      return { isLoading: o, slice: a };
    }
    var s = {
        blocksTable: !0,
        collect: o("MAIBAPreviewPublishReviewUtils").collectRawTargetingSpecs,
        key: "targeting_names",
        useResolve: e,
      },
      u = s;
    l.default = u;
  },
  98,
);
