__d(
  "AYMTTipActions",
  [
    "AYMTClientSideChannelNames",
    "AYMTTipActionTypes",
    "AdsAymtTipLoadedDataAction",
    "AdsAymtTipLoadedErrorDataAction",
    "AdsDataAtom",
    "AdsPGFLogger",
    "AdsPrivacyGuidanceFrameworkTipsLoadedAction",
    "AdsPrivacyGuidanceFrameworkTipsLoadedV2Action",
    "AssetLibraryAYMTTipsLoadedAction",
    "BizHomeAYMTTipsLoadedAction",
    "CreatorMonetizationAymtActionTypes",
    "JSResource",
    "MediaManagerDispatcher",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e;
    function s(t, n, a, l, s, u, c) {
      switch (
        (u === !0 &&
          n === r("AYMTClientSideChannelNames").AYMT_AM_GLOBAL_BANNER_CHANNEL &&
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "AYMTAMGlobalBannerMultiTipsLoadedAction",
              ).__setRef("AYMTTipActions"),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, paginationEnabled: c === !0, tips: t },
                { line: "44", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          ),
        n)
      ) {
        case r("AYMTClientSideChannelNames").AYMT_ASSET_LIBRARY_CHANNEL:
          r("AssetLibraryAYMTTipsLoadedAction").dispatch(
            { channelName: n, tips: t },
            { line: "53", module: "AYMTTipActions.js", moduleID: i.id },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_MESSAGE_MARKETING_MEGAPHONE_CHANNEL:
        case r("AYMTClientSideChannelNames")
          .AYMT_CAMPAIGN_MANAGER_MEGAPHONE_CHANNEL:
          r("AdsAymtTipLoadedDataAction").dispatch(
            { data: { channelName: n, tips: t } },
            { line: "60", module: "AYMTTipActions.js", moduleID: i.id },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_CREATOR_STUDIO_ANNOUNCEMENT_CARD_CHANNEL:
          r("MediaManagerDispatcher").dispatch({
            channelName: n,
            tips: t,
            type: "ANNOUNCEMENT_CARDS_LOADED",
          });
          break;
        case r("AYMTClientSideChannelNames").AYMT_CREATOR_MONETIZATION_CHANNEL:
          (e || (e = r("AdsDataAtom"))).dispatch({
            action: {
              channelName: n,
              tips: t,
              type: o("CreatorMonetizationAymtActionTypes")
                .CreatorMonetizationAymtActionTypes.TIPS_LOADED,
            },
          });
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_CREATOR_STUDIO_MONETIZATION_HOME_CHANNEL:
          r("MediaManagerDispatcher").dispatch({
            channelName: n,
            tips: t,
            type: "SET_MONETIZATION_HOME_TIPS_DATA",
            params: l,
          });
          break;
        case r("AYMTClientSideChannelNames").AYMT_BUSINESS_MANAGER_CHANNEL:
          r("BizHomeAYMTTipsLoadedAction").dispatch(
            { channelName: n, tips: t },
            { line: "89", module: "AYMTTipActions.js", moduleID: i.id },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_CREATOR_STUDIO_STARS_TAB_CHANNEL:
          r("MediaManagerDispatcher").dispatch({
            tips: t,
            type: "MONETIZATION_STARS_AYMT_DATA_RECEIVED",
            params: l,
          });
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_AM_START_YOUR_DAY_ALERTS_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")("SYDAYMTTipsLoadedAction").__setRef(
                "AYMTTipActions",
              ),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "105", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_CAMPAIGN_MANAGER_MODAL_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")("AdsPEModalAYMTTipsLoadedAction").__setRef(
                "AYMTTipActions",
              ),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "112", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_MARKETING_MESSAGE_CAMPAIGN_MANAGER_MODAL_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "AdsMarketingMessagePEModalAYMTTipsLoadedAction",
              ).__setRef("AYMTTipActions"),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "119", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames").AYMT_MOMA_MEGAPHONE_CHANNEL:
        case r("AYMTClientSideChannelNames").AYMT_MAIBA_IN_CHAT_CHANNEL:
          a.handleTipsLoaded(t);
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_ADS_MANAGER_PRIVACY_GUIDANCE_FRAMEWORK_CHANNEL:
          (o("AdsPGFLogger").logTipsDispatched(
            JSON.stringify(
              t.map(function (e) {
                var t = e.name;
                return t;
              }),
            ),
          ),
            s.tip != null
              ? r("AdsPrivacyGuidanceFrameworkTipsLoadedV2Action").dispatch(
                  { channelName: n, tips: t, params: s },
                  { line: "137", module: "AYMTTipActions.js", moduleID: i.id },
                )
              : r("AdsPrivacyGuidanceFrameworkTipsLoadedAction").dispatch(
                  { channelName: n, tips: t, params: l },
                  { line: "143", module: "AYMTTipActions.js", moduleID: i.id },
                ));
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_GREATER_CHINA_ADV_WIDGET_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "SYDGreaterChinaAdvWidgetTipsLoadedAction",
              ).__setRef("AYMTTipActions"),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "154", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames").AYMT_AM_GLOBAL_BANNER_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")("AYMTAMGlobalBannerTipsLoadedAction").__setRef(
                "AYMTTipActions",
              ),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "164", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_ADS_MANAGER_AUDIENCE_TAB_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "AdsManagerAudienceTabAYMTTipsLoadedAction",
              ).__setRef("AYMTTipActions"),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "174", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_MARKETING_MESSAGES_AUTO_PLACEMENT_DUPLICATION_EDUCATION_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "MessageMarketingAutoPlacementEducationAYMTTipsLoadedAction",
              ).__setRef("AYMTTipActions"),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "188", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_MARKETING_MESSAGES_DUPLICATION_UPSELL_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "MessageMarketingDuplicationUpsellAYMTTipsLoadedAction",
              ).__setRef("AYMTTipActions"),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "198", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_MARKETING_MESSAGES_MANUAL_PLACEMENT_EDUCATION_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "MarketingMessagesManualPlacementEducationAYMTTipsLoadedAction",
              ).__setRef("AYMTTipActions"),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "212", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_WAMO_MANUAL_PLACEMENT_CONFIRMATION_MODAL_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")("AdsWAMOPEModalAYMTTipsLoadedAction").__setRef(
                "AYMTTipActions",
              ),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "224", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_BUSINESS_SUPPORT_BANNER_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")("BusinessSupportBannerTipsLoadedAction").__setRef(
                "AYMTTipActions",
              ),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "234", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames").AYMT_UBS_WHATS_APP_SECTION_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "UBSWhatsAppSectionAYMTTipsLoadedAction",
              ).__setRef("AYMTTipActions"),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "244", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames").AYMT_PARTNER_SHOWCASE_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")("PartnerShowcaseAYMTTipsLoadedAction").__setRef(
                "AYMTTipActions",
              ),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "254", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames").AYMT_AMD_ANCHORLESS_NUX_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")("AYMTAMDAnchorlessNUXTipsLoadedAction").__setRef(
                "AYMTTipActions",
              ),
            ],
            function (e) {
              return e.dispatch(
                { channelName: n, tips: t },
                { line: "264", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        default: {
          var d = new Error(
            "Unregistered %s channel for AYMTTipActions.dispatchTips",
          );
          throw (d.stack, d);
        }
      }
    }
    function u(t, n, a) {
      switch (n) {
        case r("AYMTClientSideChannelNames").AYMT_CREATOR_MONETIZATION_CHANNEL:
          (e || (e = r("AdsDataAtom"))).dispatch({
            action: {
              channelName: n,
              type: o("CreatorMonetizationAymtActionTypes")
                .CreatorMonetizationAymtActionTypes.TIPS_LOADING_ERROR,
            },
          });
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_MESSAGE_MARKETING_MEGAPHONE_CHANNEL:
        case r("AYMTClientSideChannelNames")
          .AYMT_CAMPAIGN_MANAGER_MEGAPHONE_CHANNEL:
          r("AdsAymtTipLoadedErrorDataAction").dispatch(
            { data: { channelName: n, error: t } },
            { line: "296", module: "AYMTTipActions.js", moduleID: i.id },
          );
          break;
        case r("AYMTClientSideChannelNames").AYMT_MOMA_MEGAPHONE_CHANNEL:
        case r("AYMTClientSideChannelNames").AYMT_MAIBA_IN_CHAT_CHANNEL:
          a.handleTipsLoadingError(t);
          break;
        default:
          (e || (e = r("AdsDataAtom"))).handleUpdateFromServerResponse({
            data: { channelName: n, error: t },
            actionType: r("AYMTTipActionTypes").TIPS_LOADED_ERROR,
          });
      }
    }
    ((l.dispatchTips = s), (l.dispatchTipsLoadingError = u));
  },
  98,
);
