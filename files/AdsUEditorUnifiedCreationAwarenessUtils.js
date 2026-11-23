__d(
  "AdsUEditorUnifiedCreationAwarenessUtils",
  [
    "AdCampaignDestination",
    "AdsAdgroupRecordAccessors",
    "AdsInstagramUserIdMigrationUtils",
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
    async function c(e, t, n, a, l) {
      var s = await o("AdsUEditorInstagramUtils").getIgUserIDFromActorID(
        o("AdsInstagramUserIdMigrationUtils").getInstagramActorIdOrUserId(n, a),
      );
      if (r("isTruthy")(s)) {
        var u = o("AdsUEditorInstagramUtils").getAppLinkForInstagramDirect(s);
        r("AdsUEditorAdgroupSetMessageTypeDataAction").dispatch(
          {
            messageType: e,
            hostID: r("AdsUEditorHostIDs").EDITING,
            adgroupIDs: t,
            appLink: u,
            isExistingPostAd: l,
          },
          {
            line: "112",
            module: "AdsUEditorUnifiedCreationAwarenessUtils.js",
            moduleID: i.id,
          },
        );
      }
    }
    var d = new Map([
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
    function m(e) {
      var t;
      return e == null ? "" : (t = d.get(e)) != null ? t : "";
    }
    function p(e, t) {
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
    function _(e) {
      var t;
      return (t = o(
        "AdsUEditorUnifiedCreationUtils",
      ).getMessagingCTAFromDestinationType(e)) != null
        ? t
        : "INSTAGRAM_MESSAGE";
    }
    function f(e) {
      return p(e, o("AdsUEditorInstagramUtils").DEFAULT_INSTAGRAM_LINK);
    }
    var g = new Map([
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
    function h(e) {
      if (e == null) return "";
      var t = g.get(e);
      return t != null
        ? t
        : o("AdsUEditorMessagingDestinationUtils").isMultiDestination(e)
          ? o("AdsUEditorUnifiedCreationAwarenessConstants")
              .MULTI_DESTINATION_HEADLINE
          : "";
    }
    function y(e) {
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
    function C(e, t, n) {
      if (e == null || e.length === 0) return null;
      var r = y(e);
      return r != null ? (r.name === "is_smcta" ? null : r.destination) : null;
    }
    function b(e) {
      return e === r("AdsPromotedObjectTypes").MESSENGER
        ? r("AdCampaignDestination").MESSENGER
        : null;
    }
    function v(e) {
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
    var S = [
      {
        appDestinations: ["MESSENGER", "INSTAGRAM_DIRECT", "WHATSAPP"],
        messageType: "MESSAGING_INSTAGRAM_DIRECT_MESSENGER_WHATSAPP",
      },
      {
        appDestinations: ["MESSENGER", "INSTAGRAM_DIRECT"],
        messageType: "MESSAGING_INSTAGRAM_DIRECT_MESSENGER",
      },
      {
        appDestinations: ["MESSENGER", "WHATSAPP"],
        messageType: "MESSAGING_MESSENGER_WHATSAPP",
      },
      {
        appDestinations: ["INSTAGRAM_DIRECT", "WHATSAPP"],
        messageType: "MESSAGING_INSTAGRAM_DIRECT_WHATSAPP",
      },
    ];
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
          var c = S.find(function (e) {
            var t = e.appDestinations;
            return t.every(function (e) {
              return i.has(e);
            });
          });
          c != null && (t = c.messageType);
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
      var m = C(
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
      (l.genAppLink = c),
      (l.adCampaignDestinationTypeToString = m),
      (l.getValueLinkFromMessageType = p),
      (l.getCallToActionTypeFromMessageType = _),
      (l.getLinkFromMessageType = f),
      (l.getHeadlineFromMessageType = h),
      (l.getCTXDefaultDestinationRule = y),
      (l.getCTXDefaultDestinationFromSource = C),
      (l.getMTMLDestinationDefaultingFromPromotedObjectType = b),
      (l.hasCallToActionDestination = v),
      (l.getSelectedMessagingType = R),
      (l.getNewMessageTypeForPage = L),
      (l.getToplineMessageTypeForMD = E),
      (l.getCTXMDL1IGExistingPostDefaulting = k));
  },
  98,
);
