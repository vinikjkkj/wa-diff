__d(
  "AdsFakePageBackedInstagramAccount",
  ["fbt", "AdsLoadState_LEGACY"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = "fake_page_backed_ig_account",
      u = s._(/*BTDS*/ "Use Facebook Page"),
      c = s._(
        /*BTDS*/ "Your ad will use the Page name and profile picture. It will not click through to the actual Page on Facebook.",
      ),
      d = !1,
      m = !1,
      p = !1,
      _ = "",
      f = "not_eligible",
      g = {
        id: e,
        username: u,
        tooltip: c,
        is_business: d,
        is_private: m,
        is_published: p,
        profile_pic: _,
        shopping_review_status: f,
        loadState: r("AdsLoadState_LEGACY").LOADED,
      };
    l.default = g;
  },
  226,
);
