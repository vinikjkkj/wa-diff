__d(
  "adsCreateSelectorsByLevel",
  ["adsCreateSelector", "adsNotImplementedSelector"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t, n;
      return (
        (t = {}),
        (t.campaign = e("campaign")),
        (t.ad_set = e("ad_set")),
        (t.ad = e("ad")),
        (t.privacy_info_center = n = r("adsNotImplementedSelector")),
        (t.opportunities = n),
        (t.topline = n),
        (t.ad_account = n),
        (t.unique_adcreative = n),
        (t.product = n),
        t
      );
    }
    function s(t) {
      var n = r("adsCreateSelector")(
        [],
        function () {
          return t;
        },
        { name: i.id + ".valueSelector" },
      );
      return e(function (e) {
        return n;
      });
    }
    ((e.withValue = s), (l.default = e));
  },
  98,
);
