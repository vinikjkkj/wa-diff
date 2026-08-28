__d(
  "AdsTargetingAccountPlacementControlInfoConstants",
  [
    "fbt",
    "AdsAdvertiserProfileGoToAdvertisingSettingsLinkUtils",
    "AdsAdvertisingSettingsStatusContent",
    "AdsODAXObjectiveStrings",
    "react",
  ],
  function (t, n, r, o, a, i, l, s) {
    "use strict";
    var e,
      u = e || (e = o("react")),
      c = function (t) {
        return (
          t === void 0 && (t = ""),
          s._(
            /*BTDS*/ "This placement has been excluded for all campaigns in {ad account settings link}",
            [
              s._param(
                "ad account settings link",
                u.jsx(
                  o("AdsAdvertiserProfileGoToAdvertisingSettingsLinkUtils")
                    .GoToAdvertisingSettingsLink,
                  {
                    adAccountID: t,
                    entryPoint:
                      "ads_manager_placements_position_plugin_ineligibility_reason_message",
                    eventCategory: "am_creation_editing",
                    gridWidgetGroup: "ACCOUNT_CONTROL",
                    linkText: o("AdsAdvertisingSettingsStatusContent")
                      .PILL_POPOVER_HEADER,
                    navEntryPoint: "ads_placements_preview_section",
                  },
                ),
              ),
            ],
          )
        );
      },
      d = function (t, n) {
        return (
          t === void 0 && (t = ""),
          s._(
            /*BTDS*/ "This placement has been excluded for all {objective name} campaigns in {ad account settings link}",
            [
              s._param(
                "objective name",
                o("AdsODAXObjectiveStrings").getObjectiveNameLowerCase(n),
              ),
              s._param(
                "ad account settings link",
                u.jsx(
                  o("AdsAdvertiserProfileGoToAdvertisingSettingsLinkUtils")
                    .GoToAdvertisingSettingsLink,
                  {
                    adAccountID: t,
                    entryPoint:
                      "ads_manager_placements_position_plugin_ineligibility_reason_message",
                    eventCategory: "am_creation_editing",
                    gridWidgetGroup: "ACCOUNT_CONTROL",
                    linkText: o("AdsAdvertisingSettingsStatusContent")
                      .PILL_POPOVER_HEADER,
                    navEntryPoint: "ads_placements_preview_section",
                  },
                ),
              ),
            ],
          )
        );
      };
    ((l.accountControlInfoPlacementPositionIneligibilityReason = c),
      (l.accountControlInfoPlacementPositionObjectiveIneligibilityReason = d));
  },
  226,
);
