__d(
  "WAWebChatLockWAMUtils",
  [
    "WAWebChatLockActionWamEvent",
    "WAWebChatLockUpdateDailyStats",
    "WAWebChatLockUtils",
    "WAWebLockFolderUnlockWamEvent",
    "WAWebWamEnumActionEntryPoint",
    "WAWebWamEnumAuthType",
    "WAWebWamEnumChatLockActionType",
    "WAWebWamEnumUnlockEntryPoint",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    function e() {
      return o("WAWebChatLockUtils").getLockedChats().length;
    }
    function s(e) {
      switch (e) {
        case o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_LIST:
          return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_LIST;
        case o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CHAT_INFO:
          return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.CHAT_INFO;
        case o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.NOTIFICATIONS:
          return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT
            .NOTIFICATION;
        case o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
          .CHAT_CONTEXT_MENU:
          return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.UNKNOWN;
        case o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.CONTACTS:
          return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.UNKNOWN;
        case o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
          .DIRECT_MESSAGE:
          return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT
            .DIRECT_MESSAGE;
        case o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT
          .PRIVACY_SETTINGS:
          return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.UNKNOWN;
        case o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.PRIVATE_REPLY:
          return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT
            .PRIVATE_REPLY;
        case o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.SEARCH:
          return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.SEARCH;
        case o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.STATUS_REPLY:
          return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT
            .STATUS_REPLY;
        case o("WAWebWamEnumActionEntryPoint").ACTION_ENTRY_POINT.UNKNOWN:
          return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.UNKNOWN;
      }
      return o("WAWebWamEnumUnlockEntryPoint").UNLOCK_ENTRY_POINT.UNKNOWN;
    }
    function u(t) {
      (t.chatLockActionType ===
      o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE.REMOVE_CHAT_LOCK
        ? o("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
            incNewRemoveChatCount: 1,
          })
        : t.chatLockActionType ===
            o("WAWebWamEnumChatLockActionType").CHAT_LOCK_ACTION_TYPE
              .ADD_CHAT_LOCK &&
          o("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
            incNewAddChatCount: 1,
          }),
        new (o("WAWebChatLockActionWamEvent").ChatLockActionWamEvent)({
          actionEntryPoint: t.actionEntryPoint,
          actionFolderChatsCount: e(),
          authType: o("WAWebWamEnumAuthType").AUTH_TYPE.SECRET_CODE,
          chatLockActionType: t.chatLockActionType,
          chatLockIsGroup: t.chatLockIsGroup,
        }).commit());
    }
    function c(t) {
      (o("WAWebChatLockUpdateDailyStats").updateChatLockDailyStats({
        incFolderOpenCount: 1,
      }),
        new (o("WAWebLockFolderUnlockWamEvent").LockFolderUnlockWamEvent)({
          landingSurface: t.landingSurface,
          totalChatCount: e(),
          unlockEntryPoint: t.unlockEntryPoint,
        }).commit());
    }
    ((l.actionEntryPointToUnlockEntryPoint = s),
      (l.chatLockActionWAMEvent = u),
      (l.chatLockUnlockedWAMEvent = c));
  },
  98,
);
