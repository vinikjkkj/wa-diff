__d(
  "openLWIBizWebProductPicker",
  ["XBizWebCometLWIProductPickerControllerRouteBuilder"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e, t, n, o, a, i, l, s) {
      var u =
          (a == null ? void 0 : a.includes("BOOSTED_IG_STORY")) ||
          (a == null ? void 0 : a.includes("BOOSTED_INSTAGRAM_MEDIA")),
        c = r("XBizWebCometLWIProductPickerControllerRouteBuilder").buildURL({
          ad_account_id: n != null ? n : void 0,
          asset_id: e,
          client_spec_override: o != null ? o : void 0,
          entry_point: t,
          exclude_ig: u,
          has_scheduled_start_time: i != null ? i : void 0,
          is_ads_drafts_expanded: l === !0,
          nav_ref: "internal_nav",
        });
      s(c);
    }
    function s(e, t, n, o) {
      var a =
        (o == null ? void 0 : o.includes("BOOSTED_IG_STORY")) ||
        (o == null ? void 0 : o.includes("BOOSTED_INSTAGRAM_MEDIA"));
      return r("XBizWebCometLWIProductPickerControllerRouteBuilder").buildURL({
        ad_account_id: n != null ? n : void 0,
        asset_id: e,
        client_spec_override: void 0,
        entry_point: t,
        exclude_ig: a,
        has_scheduled_start_time: void 0,
        is_ads_drafts_expanded: !1,
        nav_ref: "internal_nav",
      });
    }
    ((l.openLWIBizWebProductPicker = e),
      (l.buildLWIBizWebProductPickerURI = s));
  },
  98,
);
