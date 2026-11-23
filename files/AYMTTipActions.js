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
    "WhatsAppManagerGrowthCardAYMTTypes",
    "WhatsAppManagerGrowthCardsDispatcher",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Set([
        r("AYMTClientSideChannelNames").AYMT_AM_GLOBAL_BANNER_CHANNEL,
        r("AYMTClientSideChannelNames").AYMT_AMD_ANCHORLESS_NUX_CHANNEL,
        r("AYMTClientSideChannelNames").AYMT_CAMPAIGN_MANAGER_MODAL_CHANNEL,
      ]);
    function u(e, t) {
      switch (t) {
        case r("AYMTClientSideChannelNames")
          .AYMT_MARKETING_MESSAGE_CAMPAIGN_MANAGER_MODAL_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "AdsMarketingMessagePEModalAYMTTipsLoadedAction",
              ).__setRef("AYMTTipActions"),
            ],
            function (n) {
              return n.dispatch(
                { channelName: t, tips: e },
                { line: "46", module: "AYMTTipActions.js", moduleID: i.id },
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
            function (n) {
              return n.dispatch(
                { channelName: t, tips: e },
                { line: "60", module: "AYMTTipActions.js", moduleID: i.id },
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
            function (n) {
              return n.dispatch(
                { channelName: t, tips: e },
                { line: "70", module: "AYMTTipActions.js", moduleID: i.id },
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
            function (n) {
              return n.dispatch(
                { channelName: t, tips: e },
                { line: "84", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
      }
    }
    function c(e, t, n, a) {
      (o("AdsPGFLogger").logTipsDispatched(
        JSON.stringify(
          e.map(function (e) {
            var t = e.name;
            return t;
          }),
        ),
      ),
        a.tip != null
          ? r("AdsPrivacyGuidanceFrameworkTipsLoadedV2Action").dispatch(
              { channelName: t, tips: e, params: a },
              { line: "103", module: "AYMTTipActions.js", moduleID: i.id },
            )
          : r("AdsPrivacyGuidanceFrameworkTipsLoadedAction").dispatch(
              { channelName: t, tips: e, params: n },
              { line: "109", module: "AYMTTipActions.js", moduleID: i.id },
            ));
    }
    function d(e, t, n, o, a, l) {
      n === !0 &&
        t === r("AYMTClientSideChannelNames").AYMT_AM_GLOBAL_BANNER_CHANNEL &&
        r("JSResource").loadAll(
          [
            r("JSResource")("AYMTAMGlobalBannerMultiTipsLoadedAction").__setRef(
              "AYMTTipActions",
            ),
          ],
          function (n) {
            (a == null ? void 0 : a()) !== !1 &&
              (n.dispatch(
                { channelName: t, paginationEnabled: o === !0, tips: e },
                { line: "139", module: "AYMTTipActions.js", moduleID: i.id },
              ),
              l == null || l());
          },
        );
    }
    function m(e, t) {
      switch (t) {
        case r("AYMTClientSideChannelNames")
          .AYMT_AM_START_YOUR_DAY_ALERTS_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")("SYDAYMTTipsLoadedAction").__setRef(
                "AYMTTipActions",
              ),
            ],
            function (n) {
              return n.dispatch(
                { channelName: t, tips: e },
                { line: "155", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_GREATER_CHINA_ADV_WIDGET_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")(
                "SYDGreaterChinaAdvWidgetTipsLoadedAction",
              ).__setRef("AYMTTipActions"),
            ],
            function (n) {
              return n.dispatch(
                { channelName: t, tips: e },
                { line: "162", module: "AYMTTipActions.js", moduleID: i.id },
              );
            },
          );
          break;
      }
    }
    function p(e, t, n, o, a) {
      switch (t) {
        case r("AYMTClientSideChannelNames")
          .AYMT_CAMPAIGN_MANAGER_MODAL_CHANNEL:
          return (
            r("JSResource").loadAll(
              [
                r("JSResource")("AdsPEModalAYMTTipsLoadedAction").__setRef(
                  "AYMTTipActions",
                ),
              ],
              function (r) {
                (a == null ? void 0 : a()) !== !1 &&
                  (r.dispatch(
                    { adAccountID: n.ad_account_id, channelName: t, tips: e },
                    {
                      line: "186",
                      module: "AYMTTipActions.js",
                      moduleID: i.id,
                    },
                  ),
                  o());
              },
            ),
            !0
          );
        case r("AYMTClientSideChannelNames").AYMT_AM_GLOBAL_BANNER_CHANNEL:
          return (
            r("JSResource").loadAll(
              [
                r("JSResource")("AYMTAMGlobalBannerTipsLoadedAction").__setRef(
                  "AYMTTipActions",
                ),
              ],
              function (n) {
                (a == null ? void 0 : a()) !== !1 &&
                  (n.dispatch(
                    { channelName: t, tips: e },
                    {
                      line: "202",
                      module: "AYMTTipActions.js",
                      moduleID: i.id,
                    },
                  ),
                  o());
              },
            ),
            !0
          );
        case r("AYMTClientSideChannelNames").AYMT_AMD_ANCHORLESS_NUX_CHANNEL:
          return (
            r("JSResource").loadAll(
              [
                r("JSResource")(
                  "AYMTAMDAnchorlessNUXTipsLoadedAction",
                ).__setRef("AYMTTipActions"),
              ],
              function (n) {
                (a == null ? void 0 : a()) !== !1 &&
                  (n.dispatch(
                    { channelName: t, tips: e },
                    {
                      line: "217",
                      module: "AYMTTipActions.js",
                      moduleID: i.id,
                    },
                  ),
                  o());
              },
            ),
            !0
          );
        default:
          return !1;
      }
    }
    function _(t, n, a) {
      switch (n) {
        case r("AYMTClientSideChannelNames")
          .AYMT_CREATOR_STUDIO_ANNOUNCEMENT_CARD_CHANNEL:
          return (
            r("MediaManagerDispatcher").dispatch({
              channelName: n,
              tips: t,
              type: "ANNOUNCEMENT_CARDS_LOADED",
            }),
            !0
          );
        case r("AYMTClientSideChannelNames").AYMT_CREATOR_MONETIZATION_CHANNEL:
          return (
            (e || (e = r("AdsDataAtom"))).dispatch({
              action: {
                channelName: n,
                tips: t,
                type: o("CreatorMonetizationAymtActionTypes")
                  .CreatorMonetizationAymtActionTypes.TIPS_LOADED,
              },
            }),
            !0
          );
        case r("AYMTClientSideChannelNames")
          .AYMT_CREATOR_STUDIO_MONETIZATION_HOME_CHANNEL:
          return (
            r("MediaManagerDispatcher").dispatch({
              channelName: n,
              tips: t,
              type: "SET_MONETIZATION_HOME_TIPS_DATA",
              params: a,
            }),
            !0
          );
        case r("AYMTClientSideChannelNames")
          .AYMT_CREATOR_STUDIO_STARS_TAB_CHANNEL:
          return (
            r("MediaManagerDispatcher").dispatch({
              tips: t,
              type: "MONETIZATION_STARS_AYMT_DATA_RECEIVED",
              params: a,
            }),
            !0
          );
        default:
          return !1;
      }
    }
    function f(e, t, n, a, l, f, g, h, y) {
      var C = !1,
        b = function () {
          C || ((C = !0), y == null || y());
        };
      if (
        (d(e, t, f, g, h, b),
        o(
          "WhatsAppManagerGrowthCardAYMTTypes",
        ).isWhatsAppManagerOverviewCardChannel(t))
      ) {
        n instanceof
          o("WhatsAppManagerGrowthCardsDispatcher")
            .WhatsAppManagerGrowthCardsDispatcher && n.receiveTips(t, e);
        return;
      }
      if (!_(e, t, a) && !p(e, t, l, b, h)) {
        switch (t) {
          case r("AYMTClientSideChannelNames").AYMT_ASSET_LIBRARY_CHANNEL:
            r("AssetLibraryAYMTTipsLoadedAction").dispatch(
              { channelName: t, tips: e },
              { line: "325", module: "AYMTTipActions.js", moduleID: i.id },
            );
            break;
          case r("AYMTClientSideChannelNames")
            .AYMT_MESSAGE_MARKETING_MEGAPHONE_CHANNEL:
          case r("AYMTClientSideChannelNames")
            .AYMT_CAMPAIGN_MANAGER_MEGAPHONE_CHANNEL:
            r("AdsAymtTipLoadedDataAction").dispatch(
              { data: { channelName: t, tips: e } },
              { line: "332", module: "AYMTTipActions.js", moduleID: i.id },
            );
            break;
          case r("AYMTClientSideChannelNames").AYMT_BUSINESS_MANAGER_CHANNEL:
            r("BizHomeAYMTTipsLoadedAction").dispatch(
              { channelName: t, tips: e },
              { line: "337", module: "AYMTTipActions.js", moduleID: i.id },
            );
            break;
          case r("AYMTClientSideChannelNames")
            .AYMT_AM_START_YOUR_DAY_ALERTS_CHANNEL:
          case r("AYMTClientSideChannelNames")
            .AYMT_GREATER_CHINA_ADV_WIDGET_CHANNEL:
            m(e, t);
            break;
          case r("AYMTClientSideChannelNames").AYMT_MOMA_MEGAPHONE_CHANNEL:
          case r("AYMTClientSideChannelNames").AYMT_MAIBA_IN_CHAT_CHANNEL:
            n.handleTipsLoaded(e);
            break;
          case r("AYMTClientSideChannelNames")
            .AYMT_ADS_MANAGER_PRIVACY_GUIDANCE_FRAMEWORK_CHANNEL:
            c(e, t, a, l);
            break;
          case r("AYMTClientSideChannelNames")
            .AYMT_ADS_MANAGER_AUDIENCE_TAB_CHANNEL:
            r("JSResource").loadAll(
              [
                r("JSResource")(
                  "AdsManagerAudienceTabAYMTTipsLoadedAction",
                ).__setRef("AYMTTipActions"),
              ],
              function (n) {
                return n.dispatch(
                  { channelName: t, tips: e },
                  { line: "364", module: "AYMTTipActions.js", moduleID: i.id },
                );
              },
            );
            break;
          case r("AYMTClientSideChannelNames")
            .AYMT_MARKETING_MESSAGE_CAMPAIGN_MANAGER_MODAL_CHANNEL:
          case r("AYMTClientSideChannelNames")
            .AYMT_MARKETING_MESSAGES_AUTO_PLACEMENT_DUPLICATION_EDUCATION_CHANNEL:
          case r("AYMTClientSideChannelNames")
            .AYMT_MARKETING_MESSAGES_DUPLICATION_UPSELL_CHANNEL:
          case r("AYMTClientSideChannelNames")
            .AYMT_MARKETING_MESSAGES_MANUAL_PLACEMENT_EDUCATION_CHANNEL:
            u(e, t);
            break;
          case r("AYMTClientSideChannelNames")
            .AYMT_WAMO_MANUAL_PLACEMENT_CONFIRMATION_MODAL_CHANNEL:
            r("JSResource").loadAll(
              [
                r("JSResource")("AdsWAMOPEModalAYMTTipsLoadedAction").__setRef(
                  "AYMTTipActions",
                ),
              ],
              function (n) {
                return n.dispatch(
                  { channelName: t, tips: e },
                  { line: "380", module: "AYMTTipActions.js", moduleID: i.id },
                );
              },
            );
            break;
          case r("AYMTClientSideChannelNames")
            .AYMT_BUSINESS_SUPPORT_BANNER_CHANNEL:
            r("JSResource").loadAll(
              [
                r("JSResource")(
                  "BusinessSupportBannerTipsLoadedAction",
                ).__setRef("AYMTTipActions"),
              ],
              function (n) {
                return n.dispatch(
                  { channelName: t, tips: e },
                  { line: "390", module: "AYMTTipActions.js", moduleID: i.id },
                );
              },
            );
            break;
          case r("AYMTClientSideChannelNames")
            .AYMT_UBS_WHATS_APP_SECTION_CHANNEL:
            r("JSResource").loadAll(
              [
                r("JSResource")(
                  "UBSWhatsAppSectionAYMTTipsLoadedAction",
                ).__setRef("AYMTTipActions"),
              ],
              function (n) {
                return n.dispatch(
                  { channelName: t, tips: e },
                  { line: "400", module: "AYMTTipActions.js", moduleID: i.id },
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
              function (n) {
                return n.dispatch(
                  { channelName: t, tips: e },
                  { line: "410", module: "AYMTTipActions.js", moduleID: i.id },
                );
              },
            );
            break;
          case r("AYMTClientSideChannelNames")
            .AYMT_WHATSAPP_MANAGER_GUIDANCE_CARD_CHANNEL:
            r("JSResource").loadAll(
              [
                r("JSResource")(
                  "WhatsAppManagerGuidanceCardAYMTTipsLoadedAction",
                ).__setRef("AYMTTipActions"),
              ],
              function (n) {
                return n.dispatch(
                  { channelName: t, requestParams: l, tips: e },
                  { line: "420", module: "AYMTTipActions.js", moduleID: i.id },
                );
              },
            );
            break;
          case r("AYMTClientSideChannelNames")
            .AYMT_EVENTS_MANAGER_LEGAL_NOTICE_CHANNEL:
            r("JSResource").loadAll(
              [
                r("JSResource")("AdsEventsManagerLegalNoticeAYMTTips").__setRef(
                  "AYMTTipActions",
                ),
              ],
              function (t) {
                return t.receiveTips(e);
              },
            );
            break;
          default: {
            var v = new Error(
              "Unregistered %s channel for AYMTTipActions.dispatchTips",
            );
            throw (v.stack, v);
          }
        }
        s.has(t) || b();
      }
    }
    function g(t, n, a) {
      if (
        o(
          "WhatsAppManagerGrowthCardAYMTTypes",
        ).isWhatsAppManagerOverviewCardChannel(n)
      ) {
        a instanceof
          o("WhatsAppManagerGrowthCardsDispatcher")
            .WhatsAppManagerGrowthCardsDispatcher && a.receiveError(n);
        return;
      }
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
            { line: "469", module: "AYMTTipActions.js", moduleID: i.id },
          );
          break;
        case r("AYMTClientSideChannelNames").AYMT_MOMA_MEGAPHONE_CHANNEL:
        case r("AYMTClientSideChannelNames").AYMT_MAIBA_IN_CHAT_CHANNEL:
          a.handleTipsLoadingError(t);
          break;
        case r("AYMTClientSideChannelNames")
          .AYMT_EVENTS_MANAGER_LEGAL_NOTICE_CHANNEL:
          r("JSResource").loadAll(
            [
              r("JSResource")("AdsEventsManagerLegalNoticeAYMTTips").__setRef(
                "AYMTTipActions",
              ),
            ],
            function (e) {
              return e.receiveTipsError();
            },
          );
          break;
        default:
          (e || (e = r("AdsDataAtom"))).handleUpdateFromServerResponse({
            data: { channelName: n, error: t },
            actionType: r("AYMTTipActionTypes").TIPS_LOADED_ERROR,
          });
      }
    }
    ((l.dispatchTips = f), (l.dispatchTipsLoadingError = g));
  },
  98,
);
