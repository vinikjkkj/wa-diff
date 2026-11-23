__d(
  "adsSBGEngagementChannelsSelectors",
  [
    "AdsAccountStore",
    "AdsSBGEngagementProgramsChannelsProvider",
    "CurrentUser",
    "adsCreateIdentitySelector",
    "adsCreateSelector",
    "gkx",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e(e) {
      var t = r("adsCreateIdentitySelector")();
      return r("adsCreateSelector")(
        [
          r("AdsSBGEngagementProgramsChannelsProvider").toFluxSelector(),
          r("AdsAccountStore").getSelectedAccountID,
          t,
        ],
        function (n, o, a) {
          var t,
            i = { isEligible: !1, adAccountID: o, dynamicContentKey: null };
          if (o == null || !r("gkx")("22024")) return i;
          var l = {
              ad_account_id: o,
              advertiser_id: r("CurrentUser").getID(),
              source_tracking: babelHelpers.extends({}, e, {
                sub_lead_source: a,
              }),
            },
            s = (t = n.get(l).getValue()) != null ? t : {},
            u = s.adAccountID,
            c = s.advertiser_status,
            d = s.channels,
            m = s.connectionExists,
            p = s.dynamicContentKey,
            _ = s.experiment_group,
            f = s.experiment_identifier,
            g = s.experimentation_data,
            h = s.program,
            y = s.signal_source_key,
            C = s.subProgram,
            b = s.treatment_id;
          return c !== "ELIGIBLE" || !d || d.length === 0 || m === !0
            ? i
            : {
                isEligible: d.length > 0,
                channels: d,
                dynamicContentKey: p,
                program: h,
                subProgram: C,
                adAccountID: u,
                signal_source_key: y,
                experiment_identifier: f,
                experiment_group: _,
                treatment_id: b,
                experimentation_data: g,
              };
        },
        { name: i.id },
      );
    }
    function s() {
      var t = {
        surface: "ADS_MANAGER",
        entry_point: "ADS_MANAGER_MODAL",
        lead_source: "IOS_AdsMngr_CampaignsOverView_EntryPoint",
      };
      return e(t);
    }
    l.adsSBGEngagementChannelsCampaignTabSelector = s;
  },
  98,
);
