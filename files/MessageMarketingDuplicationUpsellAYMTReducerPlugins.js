__d(
  "MessageMarketingDuplicationUpsellAYMTReducerPlugins",
  [
    "AYMTTipsLoader",
    "AdsDataAtom",
    "AdsInterfacesCreationSectionMode",
    "AdsMarketingMessagesDuplicationUpsellConstants",
    "MarketingMessagesDuplicationUpsellAYMTTip",
    "getDuplicatedMMUpsellEligibleCampaignIDs",
    "gkx",
    "immutable",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = {
        reduce: function (n, o) {
          var t = o.accountID,
            a = {};
          return (
            (a.ad_account_id = t != null ? t : ""),
            r("AYMTTipsLoader").loadTips(
              a,
              o.channelName,
              e || (e = r("AdsDataAtom")),
            ),
            babelHelpers.extends({}, n, {
              activationStatus: o.activationStatus,
              tipChannelData: n.tipChannelData.set(
                o.channelName,
                r("immutable").List(),
              ),
            })
          );
        },
      },
      u = {
        reduce: function (t, n) {
          var e,
            o = n.channelName,
            a = n.tips;
          if (!t.tipChannelData.has(o)) return t;
          var i = f(t);
          if (i == null) return t;
          var l =
            (e = a
              .filter(function (e) {
                return e.name === i;
              })
              .map(function (e) {
                return {
                  name: e.name,
                  tipData: g(e.client_side_rendering_spec, e.aymt_data),
                  aymtData: e.aymt_data,
                };
              })[0]) != null
              ? e
              : null;
          return babelHelpers.extends({}, t, {
            duplicationUpsellData: babelHelpers.extends(
              {},
              t.duplicationUpsellData,
              { tip: l },
            ),
            tipChannelData: t.tipChannelData.set(
              o,
              r("immutable").List(l != null ? [l] : []),
            ),
          });
        },
      },
      c = {
        reduce: function (t, n) {
          return babelHelpers.extends({}, t, { duplicationUpsellData: n.data });
        },
      },
      d = {
        reduce: function (t) {
          return babelHelpers.extends({}, t, {
            duplicationUpsellData: {
              shouldShowTip: !1,
              campaignIDsToEnable: [],
              tip: null,
            },
          });
        },
      },
      m = {
        reduce: function (t, n) {
          var e,
            o =
              (e = n.responses.at(0)) == null || (e = e.extraData) == null
                ? void 0
                : e.campaignIDsEligibleForMMDuplicationUpsell,
            a = r("getDuplicatedMMUpsellEligibleCampaignIDs")(
              n.fragments,
              o != null ? o : [],
            ),
            i = a.length > 0;
          return i
            ? babelHelpers.extends({}, t, {
                duplicationUpsellData: {
                  campaignIDsToEnable: a,
                  shouldShowTip: !0,
                  tip: null,
                },
              })
            : t;
        },
      },
      p = {
        reduce: function (t, n) {
          var e,
            o = r("getDuplicatedMMUpsellEligibleCampaignIDs")(
              n.fragments,
              (e = n.dialogData.campaignIDsEligibleForMMDuplicationUpsell) !=
                null
                ? e
                : [],
            ),
            a = o.length > 0;
          return a
            ? babelHelpers.extends({}, t, {
                duplicationUpsellData: {
                  campaignIDsToEnable: o,
                  shouldShowTip: !0,
                  tip: null,
                },
              })
            : t;
        },
      },
      _ = {
        reduce: function (t, n) {
          var e,
            o = r("getDuplicatedMMUpsellEligibleCampaignIDs")(
              n.fragments,
              (e = n.dialogData.campaignIDsEligibleForMMDuplicationUpsell) !=
                null
                ? e
                : [],
            ),
            a =
              o.length > 0 &&
              n.dialogData.campaignGroupMode ===
                r("AdsInterfacesCreationSectionMode").SAME;
          return a
            ? babelHelpers.extends({}, t, {
                duplicationUpsellData: {
                  campaignIDsToEnable: o,
                  shouldShowTip: !0,
                  tip: null,
                },
              })
            : t;
        },
      };
    function f(e) {
      return r("gkx")("13496")
        ? e.activationStatus === !0
          ? o("AdsMarketingMessagesDuplicationUpsellConstants")
              .AdsMarketingMessagesDuplicationUpsellAYMTTipNames
              .WHATSAPP_PLACEMENT
          : o("AdsMarketingMessagesDuplicationUpsellConstants")
              .AdsMarketingMessagesDuplicationUpsellAYMTTipNames
              .WHATSAPP_DISCOVERY
        : r("gkx")("362")
          ? o("AdsMarketingMessagesDuplicationUpsellConstants")
              .AdsMarketingMessagesDuplicationUpsellAYMTTipNames
              .MESSENGER_DISCOVERY
          : null;
    }
    function g(e, t) {
      var n = e.client_side_rendering_params;
      return new (r("MarketingMessagesDuplicationUpsellAYMTTip"))({
        body: n == null ? void 0 : n.tip_body,
        channelID: r("nullthrows")(t.channel_id),
        tipID: r("nullthrows")(t.tip_id),
        title: n == null ? void 0 : n.tip_title,
      });
    }
    ((l.onTipsRequested = s),
      (l.onTipsLoaded = u),
      (l.onModalDataChange = c),
      (l.onCloseModal = d),
      (l.onQuickDuplicateCopyComplete = m),
      (l.onCampaignGroupCopyComplete = p),
      (l.onCampaignCopyComplete = _));
  },
  98,
);
