__d(
  "AdsCampaignGroupDraftFragmentsReplaceInReducerPlugin",
  ["AdsMutators", "AdsRegexp", "adsCampaignGroupDraftFragmentCreateReducer"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = {
        reduce: r("adsCampaignGroupDraftFragmentCreateReducer")(
          function (e) {
            return e;
          },
          function (e, t) {
            var n = t.path,
              r = t.replaceWith,
              a = t.toFind;
            return o("AdsMutators").mutateEach(e, t.ids, function (e) {
              return e.updateIn(n, function (e) {
                return e && o("AdsRegexp").getReplacedText(e, a, r, "ig");
              });
            });
          },
          function (e) {
            return e;
          },
          function (e) {
            return e;
          },
        ),
      },
      s = e;
    l.default = s;
  },
  98,
);
