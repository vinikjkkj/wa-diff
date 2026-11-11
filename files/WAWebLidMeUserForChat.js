__d(
  "WAWebLidMeUserForChat",
  [
    "WAWebChatGetters",
    "WAWebMsgKeyUtils",
    "WAWebUserPrefsMeUser",
    "WAWebUserUtils",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e, t) {
      var n,
        r = e.id.isLid(),
        a = e.isCAG(),
        i =
          o("WAWebChatGetters").getIsGroup(e) &&
          !!((n = e.groupMetadata) != null && n.isLidAddressingMode);
      switch (t) {
        case o("WAWebMsgKeyUtils").TranslateMsgKeyType.Addon:
          return r || a || i
            ? o("WAWebUserUtils").getMeLidUserOrThrow()
            : o("WAWebUserPrefsMeUser").getMePnOrLidUserOrThrow();
        case o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage:
        case o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message:
          return a
            ? i
              ? o("WAWebUserUtils").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMePnOrLidUserOrThrow()
            : r || i
              ? o("WAWebUserUtils").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMePnOrLidUserOrThrow();
      }
    }
    l.getMeUserLidOrJidForChat = e;
  },
  98,
);
