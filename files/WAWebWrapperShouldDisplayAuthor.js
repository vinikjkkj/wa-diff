__d(
  "WAWebWrapperShouldDisplayAuthor",
  [
    "WAWebDisplayType",
    "WAWebFrontendMsgGetters",
    "WAWebMessagePosition",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebNewsletterGatingUtils",
    "WAWebPipIsParsableOnlineVideoUrl",
    "WAWebWid",
  ],
  function (t, n, r, o, a, i, l) {
    function e(e) {
      var t = e.displayType,
        n = e.msg,
        a = e.position;
      return r("WAWebWid").isPSA(o("WAWebFrontendMsgGetters").getChat(n).id) ||
        t === o("WAWebDisplayType").DISPLAY_TYPE.ANNOUNCEMENT ||
        t === o("WAWebDisplayType").DISPLAY_TYPE.BOT_INVOKE_RESPONSE ||
        o("WAWebMsgGetters").getIsBotFutureproofPlaceholder(n)
        ? !0
        : (o("WAWebMsgGetters").getIsSentByMe(n) ||
              !o("WAWebMsgGetters").getIsGroupMsg(n)) &&
            !(
              o("WAWebMsgGetters").getNewsletterAdminProfile(n) &&
              o(
                "WAWebNewsletterGatingUtils",
              ).isNewsletterAdminProfilesReceiverEnabled()
            )
          ? !1
          : n.type === o("WAWebMsgType").MSG_TYPE.CHAT ||
              n.type === o("WAWebMsgType").MSG_TYPE.RICH_RESPONSE
            ? !!(
                (t !== o("WAWebDisplayType").DISPLAY_TYPE.STARRED_MSGS &&
                  n.quotedMsg) ||
                (a !== o("WAWebMessagePosition").MsgPosition.MID &&
                  a !== o("WAWebMessagePosition").MsgPosition.END) ||
                t === o("WAWebDisplayType").DISPLAY_TYPE.GALLERY ||
                o("WAWebMsgGetters").getLinkPreview(n) ||
                o("WAWebPipIsParsableOnlineVideoUrl").isParsableOnlineVideoURL(
                  n.richPreviewType,
                  n.matchedText,
                  n.doNotPlayInline,
                ) ||
                o("WAWebFrontendMsgGetters").getIsTransparentMsg(n)
              )
            : !0;
    }
    l.shouldDisplayAuthor = e;
  },
  98,
);
