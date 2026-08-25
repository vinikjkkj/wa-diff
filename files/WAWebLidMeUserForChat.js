__d(
  "WAWebLidMeUserForChat",
  ["WAWebChatGetters", "WAWebMsgKeyUtils", "WAWebUserPrefsMeUser"],
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
            ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
            : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
        case o("WAWebMsgKeyUtils").TranslateMsgKeyType.EditMessage:
        case o("WAWebMsgKeyUtils").TranslateMsgKeyType.Message:
          return a
            ? i
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE()
            : r || i
              ? o("WAWebUserPrefsMeUser").getMeLidUserOrThrow()
              : o("WAWebUserPrefsMeUser").getMePnUserOrThrow_DO_NOT_USE();
      }
    }
    l.getMeUserLidOrJidForChat = e;
  },
  98,
);
