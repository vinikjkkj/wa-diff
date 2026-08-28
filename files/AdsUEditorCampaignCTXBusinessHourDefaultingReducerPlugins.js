__d(
  "AdsUEditorCampaignCTXBusinessHourDefaultingReducerPlugins",
  [
    "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
    "adsDraftIsApplicationIDPowerEditor",
    "requireDeferred",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = r("requireDeferred")(
        "AdsUEditorCampaignCTXBusinessHourDefaultingDeferredHandler",
      ).__setRef("AdsUEditorCampaignCTXBusinessHourDefaultingReducerPlugins"),
      s = {
        reduce: function (n, a) {
          if (
            !r("adsDraftIsApplicationIDPowerEditor")(a.adsApplicationID) ||
            !o(
              "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
            ).enableCTXAMBusinessHourDaypartingDefaulting(!1)
          )
            return n;
          var t = Array.from(a.fragments.values()).flatMap(function (e) {
            return e.ad_object_type === "ad_set" && e.ad_object_id != null
              ? [e.ad_object_id]
              : [];
          });
          return (
            t.length === 0 ||
              e.onReady(function (e) {
                return e.applyCTXBusinessHourCreationDefault(t);
              }),
            n
          );
        },
      },
      u = {
        reduce: function (n, r) {
          var t,
            a = r.data,
            i = a.changedParamKeys,
            l = a.params,
            s = Array.from((t = l.selected_adset_ids) != null ? t : []);
          return (
            i.section !== !0 ||
              l.section !== "L2" ||
              s.length === 0 ||
              !o(
                "AdsUEditorCampaignBasicSectionCTXBusinessHourDaypartingUtils",
              ).enableCTXAMBusinessHourDaypartingDefaulting(!1) ||
              e.onReady(function (e) {
                return e.applyCTXBusinessHourCreationDefaultForNewCampaigns(s);
              }),
            n
          );
        },
      };
    ((l.AdsUEditorCampaignCTXBusinessHourDraftFragmentCreatedReducerPlugin = s),
      (l.AdsUEditorCampaignCTXBusinessHourRouteUpdateReducerPlugin = u));
  },
  98,
);
