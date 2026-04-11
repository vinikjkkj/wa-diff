__d(
  "WAWebWamMsgUtils",
  [
    "WAWebApiParse",
    "WAWebBotTypes",
    "WAWebHandleMsgCommon",
    "WAWebInteractiveMessageType",
    "WAWebInteractiveMessagesNativeFlowName",
    "WAWebMsgGetters",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumAgentEngagementEnumType",
    "WAWebWamEnumBotType",
    "WAWebWamEnumE2eDeviceType",
    "WAWebWamEnumInvisibleMessageCategoryType",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumMessageType",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return o("WAWebMsgGetters").getIsStatus(e)
        ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS
        : o("WAWebMsgGetters").getIsGroupMsg(e)
          ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
          : r("WAWebWid").isBroadcast(e.id.remote) ||
              o("WAWebMsgGetters").getBroadcastId(e) != null
            ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.BROADCAST
            : r("WAWebWid").isNewsletter(e.id.remote)
              ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.CHANNEL
              : o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL;
    }
    function s(e) {
      return e === "chat"
        ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.INDIVIDUAL
        : e === "group"
          ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.GROUP
          : e === "peer_broadcast" || e === "other_broadcast"
            ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.BROADCAST
            : e === "direct_peer_status" || e === "other_status"
              ? o("WAWebWamEnumMessageType").MESSAGE_TYPE.STATUS
              : (function () {
                  throw Error(
                    "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                      e,
                  );
                })();
    }
    function u(e) {
      if (e.isDynamicReplyButtonsMsg === !0)
        return o("WAWebWamEnumMediaType").MEDIA_TYPE.BUTTON_MESSAGE;
      switch (e.type) {
        case "image":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PHOTO;
        case "video":
          return e.isGif === !0
            ? o("WAWebWamEnumMediaType").MEDIA_TYPE.GIF
            : o("WAWebWamEnumMediaType").MEDIA_TYPE.VIDEO;
        case "ptv":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PUSH_TO_VIDEO;
        case "audio":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.AUDIO;
        case "ptt":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PTT;
        case "document":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.DOCUMENT;
        case "unknown":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.FUTURE;
        case "location":
          return e.isLive === !0
            ? o("WAWebWamEnumMediaType").MEDIA_TYPE.LIVE_LOCATION
            : o("WAWebWamEnumMediaType").MEDIA_TYPE.LOCATION;
        case "vcard":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.CONTACT;
        case "multi_vcard":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.CONTACT_ARRAY;
        case "chat":
          return e.matchedText != null
            ? o("WAWebApiParse").matchCatalogUrl(e.matchedText)
              ? o("WAWebWamEnumMediaType").MEDIA_TYPE.CATALOG_LINK
              : o("WAWebApiParse").matchProductUrl(e.matchedText)
                ? o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_LINK
                : o("WAWebWamEnumMediaType").MEDIA_TYPE.URL
            : o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "sticker":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER;
        case "product":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_IMAGE;
        case "list": {
          var t,
            n,
            r =
              (t = (n = e.list) == null ? void 0 : n.listType) != null
                ? t
                : o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
                    .UNKNOWN;
          switch (r) {
            case o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
              .SINGLE_SELECT:
              return o("WAWebWamEnumMediaType").MEDIA_TYPE.LIST;
            case o("WAWebProtobufsE2E.pb").Message$ListMessage$ListType
              .PRODUCT_LIST:
              return o("WAWebWamEnumMediaType").MEDIA_TYPE.PRODUCT_LIST;
            default:
              return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
          }
        }
        case "list_response":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.LIST_REPLY;
        case "buttons_response":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.BUTTON_RESPONSE_MESSAGE;
        case "order":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.ORDER;
        case "interactive":
          return c(e);
        case "reaction":
        case "reaction_enc":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.REACTION;
        case "poll_creation":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_CREATE;
        case "poll_result_snapshot":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_RESULT_SNAPSHOT;
        case "poll_update":
          return e.subtype === "poll_vote"
            ? o("WAWebWamEnumMediaType").MEDIA_TYPE.POLL_VOTE
            : o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "keep_in_chat":
          return e.keepType === o("WAWebProtobufsE2E.pb").KeepType.KEEP_FOR_ALL
            ? o("WAWebWamEnumMediaType").MEDIA_TYPE.KEEP
            : o("WAWebWamEnumMediaType").MEDIA_TYPE.UNKEEP;
        case "pin_message":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.PIN_IN_CHAT;
        case "protocol":
          return e.subtype === "ephemeral_sync_response"
            ? o("WAWebWamEnumMediaType").MEDIA_TYPE.EPHEMERAL_SYNC_RESPONSE
            : o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
        case "event_creation":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.EVENT_CREATE;
        case "event_response":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.EVENT_RESPOND;
        case "album":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.MEDIA_ALBUM;
        case "sticker-pack":
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.STICKER_PACK;
        default:
          return (e.type, o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE);
      }
    }
    function c(e) {
      var t = e.interactiveType;
      if (t == null) return o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE;
      switch (t) {
        case r("WAWebInteractiveMessageType").SHOPS_STOREFRONT:
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.SHOP_STOREFRONT;
        case r("WAWebInteractiveMessageType").NATIVE_FLOW:
          return d(e);
        case r("WAWebInteractiveMessageType").CAROUSEL:
          return o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_CAROUSEL;
      }
    }
    function d(e) {
      return e.nativeFlowName ===
        r("WAWebInteractiveMessagesNativeFlowName").CTA_FLOW
        ? o("WAWebWamEnumMediaType").MEDIA_TYPE.NONE
        : o("WAWebWamEnumMediaType").MEDIA_TYPE.INTERACTIVE_NFM;
    }
    function m(e) {
      return e instanceof r("WAWebWid")
        ? o("WAWebUserPrefsMeUser").isMeAccount(e)
          ? e.isCompanion()
            ? e.isHosted()
              ? o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE
                  .MY_HOSTED_COMPANION
              : o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.MY_COMPANION
            : o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.MY_PRIMARY
          : e.isCompanion()
            ? e.isHosted()
              ? o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE
                  .OTHER_HOSTED_COMPANION
              : o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.OTHER_COMPANION
            : o("WAWebWamEnumE2eDeviceType").E2E_DEVICE_TYPE.OTHER_PRIMARY
        : null;
    }
    function p(e) {
      if (e.id.remote.isBot())
        return o("WAWebWamEnumAgentEngagementEnumType")
          .AGENT_ENGAGEMENT_ENUM_TYPE.DIRECT_CHAT;
      var t = o("WAWebMsgGetters").getIsBotQuery(e),
        n = o("WAWebMsgGetters").getIsMetaBotResponse(e);
      return t || n
        ? o("WAWebWamEnumAgentEngagementEnumType").AGENT_ENGAGEMENT_ENUM_TYPE
            .INVOKED
        : null;
    }
    function _(e, t, n) {
      if (e != null && e.isBot())
        return o("WAWebWamEnumBotType").BOT_TYPE.METABOT;
      if (t) {
        if (t === o("WAWebBotTypes").BizBotType.BIZ_1P)
          return o("WAWebWamEnumBotType").BOT_TYPE.BOT_1P_BIZ;
        if (t === o("WAWebBotTypes").BizBotType.BIZ_3P)
          return o("WAWebWamEnumBotType").BOT_TYPE.BOT_3P_BIZ;
      }
      if (n) {
        if (n === o("WAWebBotTypes").BizBotAutomatedType.PARTIAL_1P)
          return o("WAWebWamEnumBotType").BOT_TYPE.BOT_1P_BIZ;
        if (n === o("WAWebBotTypes").BizBotAutomatedType.FULL_3P)
          return o("WAWebWamEnumBotType").BOT_TYPE.BOT_3P_BIZ;
      }
      return o("WAWebWamEnumBotType").BOT_TYPE.UNKNOWN;
    }
    function f(e) {
      if (e == null || e === "") return null;
      switch (e) {
        case o("WAWebHandleMsgCommon").MSG_CATEGORY.peer:
          return o("WAWebWamEnumInvisibleMessageCategoryType")
            .INVISIBLE_MESSAGE_CATEGORY_TYPE.PEER;
        default:
          return null;
      }
    }
    function g(e, t, n) {
      if (t.isGroup()) return !!n;
      if (t.isStatus()) {
        var r, o;
        return (r = (o = e.id.participant) == null ? void 0 : o.isLid()) != null
          ? r
          : !1;
      }
      return e.from.isLid() || e.to.isLid();
    }
    ((l.getWamMessageType = e),
      (l.getMessageTypeFromMsgInfoType = s),
      (l.getWamMediaType = u),
      (l.getInteractiveWamType = c),
      (l.getWamE2eSenderType = m),
      (l.getWamAgentEngagementType = p),
      (l.getWamBotType = _),
      (l.getWamInvisibleMessageCatgoryType = f),
      (l.msgIsLid = g));
  },
  98,
);
