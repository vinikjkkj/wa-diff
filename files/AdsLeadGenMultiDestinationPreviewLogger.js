__d(
  "AdsLeadGenMultiDestinationPreviewLogger",
  ["AdCampaignDestination", "AdsInterfacesLogger"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = "f2_multi_destination_preview",
      u =
        ((e = {}),
        (e.campaign_destination_type = r(
          "AdCampaignDestination",
        ).WEBSITE_AND_LEAD_FORM),
        (e.view_surface = s),
        e);
    function c() {
      r("AdsInterfacesLogger").log({
        eventName:
          "lead_gen_multi_destination_preview_disclaimer_info_icon_clicked",
        data: u,
      });
    }
    function d(e, t, n) {
      var o,
        a = [];
      (t && a.push(r("AdCampaignDestination").FACEBOOK),
        n && a.push(r("AdCampaignDestination").INSTAGRAM_DIRECT),
        r("AdsInterfacesLogger").log({
          eventName: "lead_gen_multi_destination_preview_impression",
          data: babelHelpers.extends(
            {},
            u,
            ((o = {}), (o.message = a.join(",")), (o.new_value = e), o),
          ),
        }));
    }
    function m(e) {
      var t;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_multi_destination_preview_platform_preview_viewed",
        data: babelHelpers.extends({}, u, ((t = {}), (t.new_value = e), t)),
      });
    }
    function p(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName:
          "lead_gen_multi_destination_preview_platform_comparison_completed",
        data: babelHelpers.extends(
          {},
          u,
          ((n = {}), (n.old_value = e), (n.new_value = t), n),
        ),
      });
    }
    function _(e) {
      var t;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_multi_destination_preview_footer_reached",
        data: babelHelpers.extends({}, u, ((t = {}), (t.new_value = e), t)),
      });
    }
    function f(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_multi_destination_preview_edit_after_inspection",
        data: babelHelpers.extends(
          {},
          u,
          ((n = {}), (n.old_value = e), (n.new_value = t), n),
        ),
      });
    }
    function g(e) {
      var t;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_multi_destination_preview_revisited_after_edit",
        data: babelHelpers.extends({}, u, ((t = {}), (t.new_value = e), t)),
      });
    }
    function h(e, t) {
      var n;
      r("AdsInterfacesLogger").log({
        eventName: "lead_gen_multi_destination_preview_platform_changed",
        data: babelHelpers.extends(
          {},
          u,
          ((n = {}), (n.old_value = e), (n.new_value = t), n),
        ),
      });
    }
    ((l.logMultiDestinationPreviewDisclaimerInfoIconClicked = c),
      (l.logMultiDestinationPreviewImpression = d),
      (l.logMultiDestinationPreviewPlatformPreviewViewed = m),
      (l.logMultiDestinationPreviewPlatformComparisonCompleted = p),
      (l.logMultiDestinationPreviewFooterReached = _),
      (l.logMultiDestinationPreviewEditAfterInspection = f),
      (l.logMultiDestinationPreviewRevisitedAfterEdit = g),
      (l.logMultiDestinationPreviewPlatformChanged = h));
  },
  98,
);
