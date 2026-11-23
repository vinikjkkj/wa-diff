__d(
  "AdsMgmtCampaignTableInspectSidePanelExplanationsConfig",
  [
    "fbt",
    "AdsMgmtDrawerActions",
    "AdsShowAdsStatusChangeDialogAction",
    "AdsToggleSource",
    "AdsUnificationContentUtils",
    "XBusinessSettingsControllerRouteBuilder",
    "goURI",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e = {
      AD_CREATIVE_CHANGED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "ad",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function () {
            return s._(/*BTDS*/ "");
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "ad",
      },
      AD_SET_BUDGET_CHANGED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "ad_set",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function () {
            return s._(/*BTDS*/ "");
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "ad_set",
      },
      AD_SET_CREATED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "ad_set",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "ad_set",
      },
      AD_SET_ENDED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "ad_set",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "ad_set",
      },
      AD_SET_PAUSED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            r("AdsShowAdsStatusChangeDialogAction").dispatch(
              { ids: t, targetStatus: "ACTIVE", level: "ad_set" },
              {
                line: "207",
                module:
                  "AdsMgmtCampaignTableInspectSidePanelExplanationsConfig.js",
                moduleID: i.id,
              },
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "ad_set",
      },
      AD_SET_TARGETING_CHANGED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "ad_set",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function () {
            return s._(/*BTDS*/ "");
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "ad_set",
      },
      CBO_TURNED_OFF: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "campaign",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function (t) {
            return o(
              "AdsUnificationContentUtils",
            ).getAUOSUpdateACBNewNameOrDefault(
              s._(/*BTDS*/ ""),
              s._(/*BTDS*/ ""),
            );
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "campaign",
      },
      CBO_TURNED_ON: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "campaign",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function (t) {
            return o(
              "AdsUnificationContentUtils",
            ).getAUOSUpdateACBNewNameOrDefault(
              s._(/*BTDS*/ ""),
              s._(/*BTDS*/ ""),
            );
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "campaign",
      },
      AD_SET_BID_CHANGED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "ad_set",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function (t) {
            return s._(/*BTDS*/ "");
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "ad_set",
      },
      CREATIVE_FATIGUE: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "ad",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function (t) {
            return s._(/*BTDS*/ "");
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "ad",
      },
      ACCOUNT_PAUSED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "");
          },
          onClick: function (t, n) {
            var e = function () {
              var e;
              return (e = r("XBusinessSettingsControllerRouteBuilder")
                .buildUri({ business_id: n != null ? n : "" })
                .setSubDomain("business")) != null
                ? e
                : "";
            };
            r("goURI")(e());
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function () {
            return s._(/*BTDS*/ "");
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "ad_account",
      },
      CAMPAIGN_PAUSED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            r("AdsShowAdsStatusChangeDialogAction").dispatch(
              { ids: t, targetStatus: "ACTIVE", level: "campaign" },
              {
                line: "463",
                module:
                  "AdsMgmtCampaignTableInspectSidePanelExplanationsConfig.js",
                moduleID: i.id,
              },
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "campaign",
      },
      CAMPAIGN_CREATED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "campaign",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "campaign",
      },
      CAMPAIGN_BUDGET_CHANGED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "campaign",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function () {
            return s._(/*BTDS*/ "");
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "campaign",
      },
      AD_PAUSED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            r("AdsShowAdsStatusChangeDialogAction").dispatch(
              { ids: t, targetStatus: "ACTIVE", level: "ad" },
              {
                line: "571",
                module:
                  "AdsMgmtCampaignTableInspectSidePanelExplanationsConfig.js",
                moduleID: i.id,
              },
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "ad",
      },
      AD_CREATED: {
        buttonConfig: {
          getButtonLabel: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
          onClick: function (t) {
            o("AdsMgmtDrawerActions").openTarget(
              "EDITOR_DRAWER",
              t,
              "ad",
              r("AdsToggleSource").dcp_side_panel,
            );
          },
          getVariant: function (t) {
            return u(t);
          },
        },
        title: {
          getTitle: function (t) {
            return s._(/*BTDS*/ "", [s._plural(t)]);
          },
        },
        description: s._(/*BTDS*/ ""),
        level: "ad",
      },
    };
    function u(e) {
      return e ? "default" : "primary";
    }
    l.AdsMgmtCampaignTableInspectSidePanelExplanationsConfigMap = e;
  },
  226,
);
