__d(
  "AdsUEditorUnifiedCreationAwarenessUtils",
  [
    "AdCampaignDestination",
    "AdsAdgroupRecordAccessors",
    "AdsMessagesUnifiedCreationTypes",
    "AdsMessengerConstants",
    "AdsPromotedObjectTypes",
    "AdsUEditorAdgroupSetMessageTypeDataAction",
    "AdsUEditorHostIDs",
    "AdsUEditorInstagramUtils",
    "AdsUEditorMessagingDestinationUtils",
    "AdsUEditorUnifiedCreationAwarenessConstants",
    "AdsUEditorUnifiedCreationUtils",
    "AdsWhatsAppUtils",
    "ClickToMessageCTMAdoptionFeatureGating",
    "asyncToGeneratorRuntime",
    "immutable",
    "isTruthy",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = new Map([
        ["MESSENGER", (e = r("AdCampaignDestination")).MESSENGER],
        ["INSTAGRAM_DIRECT", e.INSTAGRAM_DIRECT],
        ["WHATSAPP", e.WHATSAPP],
        ["WHATSAPP_MESSAGE", e.WHATSAPP],
        ["MESSAGING_MESSENGER_WHATSAPP", e.MESSAGING_MESSENGER_WHATSAPP],
        [
          "MESSAGING_INSTAGRAM_DIRECT_MESSENGER",
          e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        ],
        [
          "MESSAGING_INSTAGRAM_DIRECT_WHATSAPP",
          e.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
        ],
        [
          "MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP",
          e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
        ],
      ]);
    function u(e) {
      var t;
      return e == null ? null : (t = s.get(e)) != null ? t : null;
    }
    function c(e, t, n, r) {
      return d.apply(this, arguments);
    }
    function d() {
      return (
        (d = n("asyncToGeneratorRuntime").asyncToGenerator(
          function* (e, t, n, a) {
            var l = yield o("AdsUEditorInstagramUtils").getIgUserIDFromActorID(
              n,
            );
            if (r("isTruthy")(l)) {
              var s = o(
                "AdsUEditorInstagramUtils",
              ).getAppLinkForInstagramDirect(l);
              r("AdsUEditorAdgroupSetMessageTypeDataAction").dispatch(
                {
                  messageType: e,
                  hostID: r("AdsUEditorHostIDs").EDITING,
                  adgroupIDs: t,
                  appLink: s,
                  isExistingPostAd: a,
                },
                {
                  line: "107",
                  module: "AdsUEditorUnifiedCreationAwarenessUtils.js",
                  moduleID: i.id,
                },
              );
            }
          },
        )),
        d.apply(this, arguments)
      );
    }
    var m = new Map([
      [e.MESSENGER, "MESSENGER"],
      [e.INSTAGRAM_DIRECT, "INSTAGRAM_DIRECT"],
      [e.WHATSAPP, "WHATSAPP"],
      [e.MESSAGING_MESSENGER_WHATSAPP, "MESSAGING_MESSENGER_WHATSAPP"],
      [
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER,
        "MESSAGING_INSTAGRAM_DIRECT_MESSENGER",
      ],
      [
        e.MESSAGING_INSTAGRAM_DIRECT_WHATSAPP,
        "MESSAGING_INSTAGRAM_DIRECT_WHATSAPP",
      ],
      [
        e.MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP,
        "MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP",
      ],
    ]);
    function p(e) {
      var t;
      return e == null ? "" : (t = m.get(e)) != null ? t : "";
    }
    function _(e, t) {
      return o(
        "AdsUEditorMessagingDestinationUtils",
      ).destinationIncludesMessenger(e)
        ? o("AdsMessengerConstants").MESSENGER_PREFIX
        : o("AdsUEditorMessagingDestinationUtils").destinationIncludesWhatsApp(
              e,
            )
          ? o("AdsWhatsAppUtils").getDefaultCTALink()
          : o(
                "AdsUEditorMessagingDestinationUtils",
              ).destinationIncludesInstagram(e) && t != null
            ? t
            : "";
    }
    function f(e) {
      var t;
      return (t = o(
        "AdsUEditorUnifiedCreationUtils",
      ).getMessagingCTAFromDestinationType(e)) != null
        ? t
        : "INSTAGRAM_MESSAGE";
    }
    function g(e) {
      return _(e, o("AdsUEditorInstagramUtils").DEFAULT_INSTAGRAM_LINK);
    }
    var h = new Map([
      [
        e.MESSENGER,
        o("AdsUEditorUnifiedCreationAwarenessConstants").MESSENGER_HEADLINE,
      ],
      [
        e.INSTAGRAM_DIRECT,
        o("AdsUEditorUnifiedCreationAwarenessConstants").INSTAGRAM_HEADLINE,
      ],
      [
        e.WHATSAPP,
        o("AdsUEditorUnifiedCreationAwarenessConstants").WHATSAPP_HEADLINE,
      ],
    ]);
    function y(e) {
      if (e == null) return "";
      var t = h.get(e);
      return t != null
        ? t
        : o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e)
          ? o("AdsUEditorUnifiedCreationAwarenessConstants")
              .MULTI_DESTINATION_HEADLINE
          : "";
    }
    function C(e) {
      var t,
        n = new Set(e),
        o = [
          {
            name: "is_igd_mamba",
            destination: (t = r("AdCampaignDestination")).INSTAGRAM_DIRECT,
          },
          { name: "has_wa_biz_number", destination: t.WHATSAPP },
          { name: "is_wacta", destination: t.WHATSAPP },
          { name: "has_ctx_ads_in_past_28_days", destination: t.MESSENGER },
          { name: "is_smcta", destination: t.MESSENGER },
          { name: "has_ig_linked", destination: t.INSTAGRAM_DIRECT },
        ];
      return o.find(function (e) {
        return n.has(e.name);
      });
    }
    function b(e, t, n) {
      if (e == null || e.length === 0) return null;
      var r = C(e);
      return r != null ? (r.name === "is_smcta" ? null : r.destination) : null;
    }
    function v(e) {
      return e === r("AdsPromotedObjectTypes").MESSENGER
        ? r("AdCampaignDestination").MESSENGER
        : null;
    }
    function S(e) {
      var t = e.getIn(
        o("AdsUEditorUnifiedCreationAwarenessConstants")
          .CALL_TO_ACTION_TYPES_ASSET_FEED_SPEC,
      );
      return (
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.call_to_action.get(e) != null ||
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.call_to_action.get(e) != null ||
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.photo_data.call_to_action.get(e) != null ||
        (t != null && t.size > 0)
      );
    }
    function R(e) {
      var t = null;
      t =
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.link_data.call_to_action.value.app_destination.get(
          e,
        ) ||
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.video_data.call_to_action.value.app_destination.get(
          e,
        ) ||
        r(
          "AdsAdgroupRecordAccessors",
        ).creative.object_story_spec.photo_data.call_to_action.value.app_destination.get(
          e,
        );
      var n = e.getIn(
        o("AdsUEditorUnifiedCreationAwarenessConstants")
          .CALL_TO_ACTION_ASSET_FEED_SPEC,
      );
      if (n != null) {
        if (t == null && n.size === 1) {
          var a;
          t =
            (a = n.first()) == null || (a = a.get("value")) == null
              ? void 0
              : a.get("app_destination");
        } else if (n.size > 1) {
          var i = new Set();
          for (var l of n) {
            var s = l.get("value");
            if (s instanceof r("immutable").Map) {
              var u = s.get("app_destination");
              u != null && i.add(u);
            }
          }
          i.has("MESSENGER") && i.has("INSTAGRAM_DIRECT") && i.has("WHATSAPP")
            ? (t = "MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP")
            : i.has("MESSENGER") && i.has("INSTAGRAM_DIRECT")
              ? (t = "MESSAGING_INSTAGRAM_DIRECT_MESSENGER")
              : i.has("MESSENGER") && i.has("WHATSAPP")
                ? (t = "MESSAGING_MESSENGER_WHATSAPP")
                : i.has("INSTAGRAM_DIRECT") &&
                  i.has("WHATSAPP") &&
                  (t = "MESSAGING_INSTAGRAM_DIRECT_WHATSAPP");
        }
      }
      return t;
    }
    function L(e, t, n, a, i, l, s) {
      var u = "WHATSAPP",
        c = "MESSENGER",
        d = "INSTAGRAM_DIRECT";
      if (
        (o(
          "ClickToMessageCTMAdoptionFeatureGating",
        ).isEligibleForCTXL1EngagementVideoViews(a, i) ||
          o(
            "ClickToMessageCTMAdoptionFeatureGating",
          ).isEligibleForCTXAwarenessVideoViews(l, i)) &&
        s === !0
      )
        switch (n) {
          case c:
            return o("AdsMessagesUnifiedCreationTypes")
              .ClickToMessageDestinationType.MESSENGER;
          case d:
            if ((e == null ? void 0 : e.connected_instagram_account) != null)
              return o("AdsMessagesUnifiedCreationTypes")
                .ClickToMessageDestinationType.INSTAGRAM_DIRECT;
            break;
          case u:
            if (
              (e == null ? void 0 : e.whatsapp_number) != null ||
              (e != null && e.has_whatsapp_business_number)
            )
              return o("AdsMessagesUnifiedCreationTypes")
                .ClickToMessageDestinationType.WHATSAPP;
            break;
        }
      var m = b(
        e == null ? void 0 : e.ctx_account_based_default_source,
        !1,
        !1,
      );
      return m === r("AdCampaignDestination").WHATSAPP
        ? o("AdsMessagesUnifiedCreationTypes").ClickToMessageDestinationType
            .WHATSAPP
        : m === r("AdCampaignDestination").INSTAGRAM_DIRECT
          ? o("AdsMessagesUnifiedCreationTypes").ClickToMessageDestinationType
              .INSTAGRAM_DIRECT
          : o("AdsMessagesUnifiedCreationTypes").ClickToMessageDestinationType
              .MESSENGER;
    }
    function E(e) {
      return o(
        "AdsUEditorMessagingDestinationUtils",
      ).destinationIncludesMessenger(e)
        ? r("AdCampaignDestination").MESSENGER
        : o("AdsUEditorMessagingDestinationUtils").destinationIncludesWhatsApp(
              e,
            )
          ? r("AdCampaignDestination").WHATSAPP
          : o(
                "AdsUEditorMessagingDestinationUtils",
              ).destinationIncludesInstagram(e)
            ? r("AdCampaignDestination").INSTAGRAM_DIRECT
            : r("AdCampaignDestination").MESSENGER;
    }
    function k(e, t, n, r, a) {
      return a === "MESSENGER"
        ? o(
            "AdsUEditorMessagingDestinationUtils",
          ).getDestinationTypeForCheckboxStatus(e, r, n)
        : a === "WHATSAPP"
          ? o(
              "AdsUEditorMessagingDestinationUtils",
            ).getDestinationTypeForCheckboxStatus(!1, t, n)
          : a === "INSTAGRAM_DIRECT"
            ? o(
                "AdsUEditorMessagingDestinationUtils",
              ).getDestinationTypeForCheckboxStatus(!1, !1, n)
            : null;
    }
    ((l.messageTypeStringToAdCampaignDestinationType = u),
      (l._genAppLink = c),
      (l.adCampaignDestinationTypeToString = p),
      (l.getValueLinkFromMessageType = _),
      (l.getCallToActionTypeFromMessageType = f),
      (l.getLinkFromMessageType = g),
      (l.getHeadlineFromMessageType = y),
      (l.getCTXDefaultDestinationRule = C),
      (l.getCTXDefaultDestinationFromSource = b),
      (l.getMTMLDestinationDefaultingFromPromotedObjectType = v),
      (l.hasCallToActionDestination = S),
      (l.getSelectedMessagingType = R),
      (l.getNewMessageTypeForPage = L),
      (l.getToplineMessageTypeForMD = E),
      (l.getCTXMDL1IGExistingPostDefaulting = k));
  },
  98,
);
