__d(
  "AdsOffsiteCLOUtil",
  [
    "fbt",
    "AdsAPIObjectives",
    "AdsAPIOptimizationGoals",
    "AdsInterfacesLogger",
    "AdsPromotedObjectTypes",
    "gkx",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react"));
    function c(e) {
      return e != null && e !== "offsite" ? !1 : r("gkx")("3637") === !0;
    }
    function d() {
      return r("gkx")("12128");
    }
    var m = [
        "Lead",
        "Contact",
        "SubmitApplication",
        "FindLocation",
        "Schedule",
      ],
      p = 0.9,
      _ = 28,
      f = 2,
      g = 4,
      h = 5;
    function y(e) {
      var t,
        n = e == null ? void 0 : e.event_quality_flag,
        r = (t = e == null ? void 0 : e.event_quality_group) != null ? t : 0;
      return {
        groupId: r,
        shouldShowSuccessIcon: n === "OPTIMAL",
        shouldShowWarningIcon: n === "BAD",
      };
    }
    function C() {
      return c()
        ? s._(
            /*BTDS*/ "This dataset isn't eligible for Maximize Number of Qualified Leads performance goal because it doesn't have an active Lead event or it doesn't have enough qualifying events. {link}",
            [
              s._param(
                "link",
                u.jsx("a", {
                  href: "https://www.facebook.com/business/help/777099232674791?id=1205376682832142m",
                  target: "_blank",
                  children: "About the Facebook event setup tool for web",
                }),
              ),
            ],
          )
        : s._(
            /*BTDS*/ "This dataset isn't eligible for Find quality leads because it doesn't have an active Lead event or it doesn't have enough qualifying events. {link}",
            [
              s._param(
                "link",
                u.jsx("a", {
                  href: "https://www.facebook.com/business/help/777099232674791?id=1205376682832142m",
                  target: "_blank",
                  children: "About the Facebook event setup tool for web",
                }),
              ),
            ],
          );
    }
    function b(e, t, n) {
      return (
        t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
        e === o("AdsAPIObjectives").OUTCOME_LEADS &&
        n === r("AdsPromotedObjectTypes").PIXEL &&
        c()
      );
    }
    function v(e, t, n) {
      return (
        t === r("AdsAPIOptimizationGoals").OFFSITE_CONVERSIONS &&
        e === o("AdsAPIObjectives").OUTCOME_LEADS &&
        n === r("AdsPromotedObjectTypes").PIXEL &&
        c()
      );
    }
    function S() {
      return s._(
        /*BTDS*/ "Cost per result goal is not available with Maximize number of qualified leads.",
      );
    }
    S.displayName = S.name + " [from " + i.id + "]";
    function R(e) {
      return e === "clo";
    }
    function L(e, t, n, o, a, i, l, s, u, c) {
      var d;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_offsite_campaign_published",
        data:
          ((d = {}),
          (d.campaign_id = t),
          (d.campaign_group_id = e),
          (d.is_edit = !n),
          (d.pixel_id = o),
          (d.custom_event_type = a),
          (d.custom_metric_name = i),
          (d.accountid = l),
          (d.rf_is_conversion_goal = s === "clo" ? 1 : 0),
          (d.source = u),
          (d.error_name = c),
          d),
      });
    }
    function E(e, t, n, o, a) {
      var i;
      a != null &&
        r("AdsInterfacesLogger").log({
          eventName: "lead_ads_quality_volume_setting_published",
          data:
            ((i = {}),
            (i.campaign_id = t),
            (i.campaign_group_id = e),
            (i.accountid = o),
            (i.is_edit = !n),
            (i.new_value = a),
            i),
        });
    }
    function k(e, t, n) {}
    function I(e, t, n, o, a, i, l, s) {
      var u;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_offsite_CLO_event_selected",
        data:
          ((u = {}),
          (u.campaign_id = t),
          (u.campaign_group_id = e),
          (u.accountid = n),
          (u.pixel_id = o),
          (u.custom_event_type = a),
          (u.custom_metric_name = i),
          (u.conversion_event_cvr = l),
          (u.message = s),
          u),
      });
    }
    function T(e, t, n) {
      var o;
      r("AdsInterfacesLogger").logOnce({
        eventName: "lead_gen_offsite_CLO_no_pixel_toast_is_visible",
        data:
          ((o = {}),
          (o.campaign_id = t),
          (o.campaign_group_id = e),
          (o.accountid = n),
          o),
      });
    }
    function D(e, t, n, o) {
      var a;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_offsite_CLO_pixel_selected",
        data:
          ((a = {}),
          (a.campaign_id = t),
          (a.campaign_group_id = e),
          (a.accountid = n),
          (a.pixel_id = o),
          a),
      });
    }
    function x(e, t) {
      var n;
      r("AdsInterfacesLogger").logOnce({
        eventName: "lead_gen_offsite_CLO_default",
        data: ((n = {}), (n.campaign_id = e), (n.accountid = t), n),
      });
    }
    ((l.canSeeOffsiteCLO = c),
      (l.canSeeOffsiteCLODisabledConversionEventsMessage = d),
      (l.disabledConversionEvents = m),
      (l.OFFSITE_CLO_MAX_EVENT_CVR = p),
      (l.OFFSITE_CLO_EVENTS_LOOKBACK_WINDOW_DAYS = _),
      (l.HighCvrEventGroupId = f),
      (l.VeryLowCvrEventGroupId = g),
      (l.EventMismatchGroupId = h),
      (l.getConversionEventQualityGroup = y),
      (l.getDisabledMessageForOffsitePixels = C),
      (l.isOffsiteCLOEligible = b),
      (l.isOffsiteGACLOEligible = v),
      (l.getOffsiteCLOBidDisabledHelpText = S),
      (l.isOffsiteCLOSelected = R),
      (l.logOffsiteCampaignPublished = L),
      (l.logLeadAdsQualityVolumeSettingPublished = E),
      (l.logOffsiteCLOCheckboxRendered = k),
      (l.logOffsiteCLOEventSelected = I),
      (l.logOffsiteCLONoPixelToastRendered = T),
      (l.logOffsiteCLOPixelSelected = D),
      (l.logOffsiteCLODefault = x));
  },
  226,
);
