__d(
  "MAIBABoostV2OnlineShadowEligibility",
  ["qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "MBS_ADS_POST_PICKER_BOOST_WITH_AI",
      "MBS_CONTENT_MANAGER_BOOST_WITH_AI",
      "MBS_CONTENT_MANAGER_TOFU_BOOST_WITH_AI",
      "MBS_HOME_RECENT_POSTS_BOOST_WITH_AI",
      "MAIBA_BOOST_POST_ACCOUNT_SWITCHER",
    ]);
    function s(t) {
      return t == null || !e.has(t) ? !1 : r("qex")._("792") === !0;
    }
    l.isMBSBoostOnlineShadowEligible = s;
  },
  98,
);
