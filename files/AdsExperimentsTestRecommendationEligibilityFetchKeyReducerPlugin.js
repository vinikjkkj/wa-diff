__d(
  "AdsExperimentsTestRecommendationEligibilityFetchKeyReducerPlugin",
  ["AdDraftPublishStatuses"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: function (t, n) {
          var e = n.response.status === r("AdDraftPublishStatuses").SUCCEEDED;
          return babelHelpers.extends({}, t, { shouldRefetchEligibility: e });
        },
      },
      s = e;
    l.default = s;
  },
  98,
);
