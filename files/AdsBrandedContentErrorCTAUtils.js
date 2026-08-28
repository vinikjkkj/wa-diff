__d(
  "AdsBrandedContentErrorCTAUtils",
  ["fbt", "AdsGraphAPI", "Promise", "URI", "XBizSuiteControllerRouteBuilder"],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u,
      c = s._(/*BTDS*/ "Notify"),
      d = s._(/*BTDS*/ "Get request link"),
      m = s._(/*BTDS*/ "Copy permission request link"),
      p = s._(/*BTDS*/ "Request partner permission"),
      _ = s._(/*BTDS*/ "Request permissions"),
      f = s._(/*BTDS*/ "Select identity");
    function g() {
      var e = r("XBizSuiteControllerRouteBuilder").buildURL({
        rest: "settings/business_ad_partnerships",
        nav_ref: "ads_manager_permission_resolution_button",
      });
      (u || (u = r("URI"))).goURIOnNewWindow(e);
    }
    var h = function (r, a, l) {
      return function (t, s, u, c, d, m, p, _) {
        return new (e || (e = n("Promise")))(function (e, n) {
          o("AdsGraphAPI")
            .get(i.id)
            .adaccount(t)
            .edge("branded_content_actionable_errors")
            .post({
              error_code: r,
              adgroup_id: u.id,
              adgroup_fragment_id: s,
              is_delivery_issue: a,
              action_type: l,
              business_id: c,
              primary_ig_user_id: d,
              secondary_ig_user_id: m,
              primary_fb_page_id: p,
              secondary_fb_page_id: _,
            })
            .then(function (t) {
              e(t);
            })
            .catch(function (e) {
              n(e);
            });
        });
      };
    };
    ((l.NOTIFY_CTA = c),
      (l.GET_DEEPLINK_CTA = d),
      (l.COPY_DEEPLINK_CTA = m),
      (l.REQUEST_PARTNER_PERMISSION_CTA = p),
      (l.REQUEST_PERMISSIONS_MBS_CTA = _),
      (l.SELECT_SECOND_IDENTITY_CTA = f),
      (l.openMBSAdPermissions = g),
      (l.getCTAOnClick = h));
  },
  226,
);
