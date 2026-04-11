__d(
  "WAWebGetMessageChatTypeFromWid",
  ["WAWebWamEnumMessageChatType"],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      return e.isUser()
        ? o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.INDIVIDUAL
        : e.isGroup()
          ? o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.GROUP
          : e.isBroadcast()
            ? o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.BROADCAST
            : e.isStatus()
              ? o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.STATUS
              : e.isNewsletter()
                ? o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.CHANNEL
                : o("WAWebWamEnumMessageChatType").MESSAGE_CHAT_TYPE.OTHER;
    }
    l.getMessageChatTypeFromWid = e;
  },
  98,
);
