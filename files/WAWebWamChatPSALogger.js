__d(
  "WAWebWamChatPSALogger",
  [
    "WAWebChatMuteWamEvent",
    "WAWebChatPsaActionWamEvent",
    "WAWebChatPsaReadWamEvent",
    "WAWebChatPsaRemoveWamEvent",
    "WAWebWamEnumActionConducted",
    "WAWebWamEnumChatMuteNotificationChoice",
    "WAWebWamEnumMuteChatType",
    "WAWebWamEnumPsaMessageActionType",
    "WAWebWamEnumPsaMessageRemoveAction",
    "WAWebWamEnumPsaMessageRemoveEntryPoint",
    "WAWebWamEnumReadEntryPoint",
    "WAWebWamEnumWaOfficialAccountName",
    "WAWebWamMsgUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      if (e.campaignId != null) {
        var t;
        new (o("WAWebChatPsaReadWamEvent").ChatPsaReadWamEvent)({
          messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
          psaMsgId: e.id.id.toString(),
          psaCampaignId: (t = e.campaignId) == null ? void 0 : t.toString(),
          readEntryPoint: o("WAWebWamEnumReadEntryPoint").READ_ENTRY_POINT.CHAT,
        }).commit();
      }
    }
    function s(e, t) {
      new (o("WAWebChatMuteWamEvent").ChatMuteWamEvent)({
        actionConducted: o("WAWebWamEnumActionConducted").ACTION_CONDUCTED.MUTE,
        chatMuteNotificationChoice: o("WAWebWamEnumChatMuteNotificationChoice")
          .CHAT_MUTE_NOTIFICATION_CHOICE.NO_NOTIFICATIONS_WHEN_MUTED,
        muteChatType: o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.ONE_ON_ONE,
        muteDuration: t,
        muteEntryPoint: e,
        waOfficialAccountName: o("WAWebWamEnumWaOfficialAccountName")
          .WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA,
      }).commit();
    }
    function u(e) {
      new (o("WAWebChatMuteWamEvent").ChatMuteWamEvent)({
        actionConducted: o("WAWebWamEnumActionConducted").ACTION_CONDUCTED
          .UNMUTE,
        muteChatType: o("WAWebWamEnumMuteChatType").MUTE_CHAT_TYPE.ONE_ON_ONE,
        muteEntryPoint: e,
        waOfficialAccountName: o("WAWebWamEnumWaOfficialAccountName")
          .WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA,
      }).commit();
    }
    function c(e) {
      var t;
      new (o("WAWebChatPsaActionWamEvent").ChatPsaActionWamEvent)({
        messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
        psaCampaignId: (t = e.campaignId) == null ? void 0 : t.toString(),
        psaMessageActionType: o("WAWebWamEnumPsaMessageActionType")
          .PSA_MESSAGE_ACTION_TYPE.SAVE,
        psaMsgId: e.id.id.toString(),
      }).commit();
    }
    function d(e) {
      var t;
      new (o("WAWebChatPsaActionWamEvent").ChatPsaActionWamEvent)({
        messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
        psaCampaignId: (t = e.campaignId) == null ? void 0 : t.toString(),
        psaMessageActionType: o("WAWebWamEnumPsaMessageActionType")
          .PSA_MESSAGE_ACTION_TYPE.DELETE,
        psaMsgId: e.id.id.toString(),
      }).commit();
    }
    function m(e) {
      var t;
      new (o("WAWebChatPsaActionWamEvent").ChatPsaActionWamEvent)({
        messageMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
        psaCampaignId: (t = e.campaignId) == null ? void 0 : t.toString(),
        psaMessageActionType: o("WAWebWamEnumPsaMessageActionType")
          .PSA_MESSAGE_ACTION_TYPE.FORWARD,
        psaMsgId: e.id.id.toString(),
      }).commit();
    }
    function p(e, t, n) {
      new (o("WAWebChatPsaActionWamEvent").ChatPsaActionWamEvent)({
        messageMediaType: e,
        psaCampaignId: t == null ? void 0 : t.toString(),
        psaMessageActionType: o("WAWebWamEnumPsaMessageActionType")
          .PSA_MESSAGE_ACTION_TYPE.MEDIA_PLAY,
        psaMsgId: n.toString(),
      }).commit();
    }
    function _(e, t, n) {
      e
        ? new (o("WAWebChatPsaRemoveWamEvent").ChatPsaRemoveWamEvent)({
            lastReceivedMediaType: o("WAWebWamMsgUtils").getWamMediaType(e),
            lastReceivedMessageTs: e.t,
            lastReceivedMsgId: e.id.id.toString(),
            psaMessageRemoveAction: f(t),
            psaMessageRemoveEntryPoint: g(n),
            waOfficialAccountName: o("WAWebWamEnumWaOfficialAccountName")
              .WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA,
          }).commit()
        : new (o("WAWebChatPsaRemoveWamEvent").ChatPsaRemoveWamEvent)({
            psaMessageRemoveAction: f(t),
            psaMessageRemoveEntryPoint: g(n),
            waOfficialAccountName: o("WAWebWamEnumWaOfficialAccountName")
              .WA_OFFICIAL_ACCOUNT_NAME.WHATSAPP_CHATPSA,
          }).commit();
    }
    function f(e) {
      return e === 1
        ? o("WAWebWamEnumPsaMessageRemoveAction").PSA_MESSAGE_REMOVE_ACTION
            .BLOCK
        : e === 2
          ? o("WAWebWamEnumPsaMessageRemoveAction").PSA_MESSAGE_REMOVE_ACTION
              .UNBLOCK
          : e === 3
            ? o("WAWebWamEnumPsaMessageRemoveAction").PSA_MESSAGE_REMOVE_ACTION
                .ARCHIVE
            : e === 4
              ? o("WAWebWamEnumPsaMessageRemoveAction")
                  .PSA_MESSAGE_REMOVE_ACTION.UNARCHIVE
              : e === 5
                ? o("WAWebWamEnumPsaMessageRemoveAction")
                    .PSA_MESSAGE_REMOVE_ACTION.CLEAR
                : e === 6
                  ? o("WAWebWamEnumPsaMessageRemoveAction")
                      .PSA_MESSAGE_REMOVE_ACTION.DELETE_ALL
                  : void 0;
    }
    function g(e) {
      switch (e) {
        case 1:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.BLOCK_FROM_CONTACT_INFO;
        case 2:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.BLOCK_FROM_CHAT;
        case 3:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.UNBLOCK_FROM_CONTACT_INFO;
        case 4:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.UNBLOCK_FROM_CHAT;
        case 5:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.UNBLOCK_FROM_PRIVACY_SETTINGS;
        case 6:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.ARCHIVE_FROM_CHAT_LIST;
        case 7:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.ARCHIVE_FROM_DELETE_OPTION;
        case 8:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.UNARCHIVE_FROM_ARCHIVED_CHAT_LIST;
        case 9:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.CLEAR_FROM_CONTACT_INFO;
        case 10:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.CLEAR_FROM_CHAT_LIST;
        case 11:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CHAT_LIST;
        case 12:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CONTACT_INFO;
        case 13:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.DELETE_ALL_FROM_CONVERSATION;
        case 14:
          return o("WAWebWamEnumPsaMessageRemoveEntryPoint")
            .PSA_MESSAGE_REMOVE_ENTRY_POINT.CLEAR_FROM_CONVERSATION;
      }
    }
    ((l.logChatPSARead = e),
      (l.logChatPSAMute = s),
      (l.logChatPSAUnmute = u),
      (l.logChatPSAStar = c),
      (l.logChatPSADelete = d),
      (l.logChatPSAForward = m),
      (l.logChatPSAMediaPlay = p),
      (l.logChatPSARemove = _));
  },
  98,
);
