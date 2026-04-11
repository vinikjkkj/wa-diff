__d(
  "WAWebPinInChatMetricUtils",
  [
    "WANullthrows",
    "WAWebChatGetters",
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
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t,
        n = e.chat,
        a = e.msg,
        i = e.parentMsg,
        l = e.timeRemainingToExpirySecs,
        s = l === void 0 ? 0 : l,
        m = o("WAWebChatGetters").getIsGroup(n),
        p,
        _;
      if (m) {
        var f = r("WANullthrows")(n.groupMetadata);
        ((p = c(f.groupType)), (_ = d(f.participants.iAmAdmin())));
      }
      new (o("WAWebPinInChatMessageSendWamEvent").PinInChatMessageSendWamEvent)(
        {
          pinInChatType: u(r("WANullthrows")(a.pinMessageType)),
          isAGroup: m,
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
        m,
        p;
      if (s) {
        var _ = r("WANullthrows")(t.groupMetadata);
        ((u = c(_.groupType)),
          (m = d(_.participants.iAmAdmin())),
          (p = _.participants.length));
      }
      new (o("WAWebPinInChatInteractionWamEvent").PinInChatInteractionWamEvent)(
        {
          pinInChatInteractionType: o("WAWebWamEnumPinInChatInteractionType")
            .PIN_IN_CHAT_INTERACTION_TYPE.TAP_ON_BANNER,
          isAGroup: s,
          groupTypeClient: u,
          groupRole: m,
          groupSize: p,
          mediaType:
            n != null ? o("WAWebWamMsgUtils").getWamMediaType(n) : void 0,
          pinCount: i,
          pinIndex: l,
          isSelfPin:
            a == null
              ? void 0
              : a.sender.equals(
                  o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE(),
                ),
        },
      ).commit();
    }
    function u(e) {
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
    function c(e) {
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
    function d(e) {
      return e
        ? o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE.ADMIN
        : o("WAWebWamEnumGroupRoleType").GROUP_ROLE_TYPE.MEMBER;
    }
    ((l.logPinInChatMessageSend = e), (l.logPinInChatTapOnBanner = s));
  },
  98,
);
