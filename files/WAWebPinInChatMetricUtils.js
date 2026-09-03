__d(
  "WAWebPinInChatMetricUtils",
  [
    "WAWebChatGetters",
    "WAWebGroupMetadataGetters",
    "WAWebGroupType",
    "WAWebMsgGetters",
    "WAWebPinInChatInteractionWamEvent",
    "WAWebPinInChatMessageSendWamEvent",
    "WAWebProtobufsE2E.pb",
    "WAWebUserPrefsMeUser",
    "WAWebWamEnumGroupRoleType",
    "WAWebWamEnumGroupTypeClient",
    "WAWebWamEnumPinInChatInteractionType",
    "WAWebWamEnumPinInChatType",
    "WAWebWamMsgUtils",
    "err",
    "nullthrows",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.chat,
        a = e.msg,
        i = e.parentMsg,
        l = e.timeRemainingToExpirySecs,
        s = l === void 0 ? 0 : l,
        u = o("WAWebChatGetters").getIsGroup(n),
        p,
        _;
      if (u) {
        var f = r("nullthrows")(n.groupMetadata);
        ((p = d(o("WAWebGroupMetadataGetters").getGroupType(f))),
          (_ = m(f.participants.iAmAdmin())));
      }
      new (o("WAWebPinInChatMessageSendWamEvent").PinInChatMessageSendWamEvent)(
        {
          pinInChatType: c(r("nullthrows")(a.pinMessageType)),
          isAGroup: u,
          groupTypeClient: p,
          groupRole: _,
          mediaType: o("WAWebWamMsgUtils").getWamMediaType(i),
          pinInChatExpirySecs: (t = a.pinExpiryDuration) != null ? t : 0,
          isSelfParentMessage: o("WAWebMsgGetters").getIsSentByMe(i),
          isSelfPin: o("WAWebMsgGetters").getIsSentByMe(a),
          timeRemainingToExpirySecs: s,
        },
      ).commit();
    }
    function s(e) {
      var t = e.chat,
        n = e.msg,
        a = e.pin,
        i = e.pinCount,
        l = e.pinIndex,
        s = o("WAWebChatGetters").getIsGroup(t),
        u,
        c,
        p;
      if (s) {
        var _ = r("nullthrows")(t.groupMetadata);
        ((u = d(o("WAWebGroupMetadataGetters").getGroupType(_))),
          (c = m(_.participants.iAmAdmin())),
          (p = _.participants.length));
      }
      new (o("WAWebPinInChatInteractionWamEvent").PinInChatInteractionWamEvent)(
        {
          pinInChatInteractionType: o("WAWebWamEnumPinInChatInteractionType")
            .PIN_IN_CHAT_INTERACTION_TYPE.TAP_ON_BANNER,
          isAGroup: s,
          groupTypeClient: u,
          groupRole: c,
          groupSize: p,
          mediaType:
            n != null ? o("WAWebWamMsgUtils").getWamMediaType(n) : void 0,
          pinCount: i,
          pinIndex: l,
          isSelfPin: o("WAWebUserPrefsMeUser").isMeAccount(
            a == null ? void 0 : a.sender,
          ),
        },
      ).commit();
    }
    function u(e) {
      if (e != null) {
        var t = e.leftExpirationTime();
        return Number.isFinite(t) ? t : 0;
      }
    }
    function c(e) {
      switch (e) {
        case o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
          .PIN_FOR_ALL:
          return o("WAWebWamEnumPinInChatType").PIN_IN_CHAT_TYPE.PIN_FOR_ALL;
        case o("WAWebProtobufsE2E.pb").Message$PinInChatMessage$Type
          .UNPIN_FOR_ALL:
          return o("WAWebWamEnumPinInChatType").PIN_IN_CHAT_TYPE.UNPIN_FOR_ALL;
        default:
          throw r("err")("Unsupported pin message type: " + e);
      }
    }
    function d(e) {
      switch (e) {
        case o("WAWebGroupType").GroupType.DEFAULT:
          return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT
            .REGULAR_GROUP;
        case o("WAWebGroupType").GroupType.LINKED_SUBGROUP:
          return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.SUB_GROUP;
        case o("WAWebGroupType").GroupType.LINKED_ANNOUNCEMENT_GROUP:
          return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT
            .DEFAULT_SUB_GROUP;
        case o("WAWebGroupType").GroupType.COMMUNITY:
          return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT
            .PARENT_GROUP;
        case o("WAWebGroupType").GroupType.LINKED_GENERAL_GROUP:
          return o("WAWebWamEnumGroupTypeClient").GROUP_TYPE_CLIENT.SUB_GROUP;
      }
    }
    function m(e) {
      return e
        ? o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE.ADMIN
        : o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE.MEMBER;
    }
    ((l.logPinInChatMessageSend = e),
      (l.logPinInChatTapOnBanner = s),
      (l.getFiniteTimeRemainingSecs = u));
  },
  98,
);
