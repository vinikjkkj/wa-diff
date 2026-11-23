__d(
  "MAIBABoostV2OnlineShadowEligibility",
  ["justknobx", "qex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = new Set([
      "MBS_ADS_EDIT_BOOST_DRAFT_WITH_AI",
      "MBS_ADS_POST_PICKER_BOOST_WITH_AI",
      "MBS_CONTENT_MANAGER_BOOST_WITH_AI",
      "MBS_CONTENT_MANAGER_TOFU_BOOST_WITH_AI",
      "MBS_HOME_RECENT_POSTS_BOOST_WITH_AI",
      "MAIBA_BOOST_POST_ACCOUNT_SWITCHER",
    ]);
    function s(t) {
      return t == null || !e.has(t)
        ? !1
        : r("qex")._("792") === !0 || r("qex")._("4899") === !0;
    }
    function u(t, n) {
      return (
        n === "MBS" &&
        t != null &&
        e.has(t) &&
        r("qex")._("792") === !0 &&
        r("qex")._("4075") === !0 &&
        r("qex")._("18") === !0
      );
    }
    function c() {
      var e =
        r("qex")._("792") === !0 &&
        r("qex")._("4075") === !0 &&
        r("qex")._("18") === !0;
      return e
        ? !0
        : r("qex")._("4899") === !0 &&
            r("qex")._("4961") === !0 &&
            r("qex")._("5051") === !0;
    }
    function d(t, n) {
      if (n !== "MBS" || t == null || !e.has(t)) return !1;
      var o = !1;
      try {
        o = r("justknobx")._("5094");
      } catch (e) {
        o = !1;
      }
      return o ? !1 : c();
    }
    ((l.isMBSBoostOnlineShadowEligible = s),
      (l.isMBSR23BoostConversation = u),
      (l.isMBSBoostAxonOptimisticPreambleEnabled = d));
  },
  98,
);
