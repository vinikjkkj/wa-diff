__d(
  "WAWebSendStickerToActiveChatStickersAction",
  [
    "WALogger",
    "WAWebApiPrepareCtwaContextSend",
    "WAWebChatCollection",
    "WAWebNewsletterCollection",
    "WAWebSendStickerAction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n, a) {
      var i,
        l =
          (i = r("WAWebNewsletterCollection").getActive()) != null
            ? i
            : o("WAWebChatCollection").ChatCollection.getActive();
      if (l == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Cannot call sendStickerToActiveChat without an active chat",
            ])),
        );
        return;
      }
      var u = l.getComposeContents(),
        c = {
          stickerSendOrigin: n,
          quotedMsg: l.composeQuotedMsg,
          ctwaContext: o(
            "WAWebApiPrepareCtwaContextSend",
          ).prepareCtwaContextSend(
            u == null ? void 0 : u.ctwaContextLinkData,
            u == null ? void 0 : u.ctwaContext,
          ),
        };
      (a === !0 && (c.isWamoSub = !0),
        (l.composeQuotedMsg = null),
        o("WAWebSendStickerAction")
          .sendStickerToChat(l, t, c)
          .catch(function (e) {
            return o("WALogger")
              .ERROR(
                s ||
                  (s = babelHelpers.taggedTemplateLiteralLoose([
                    "Failed to send sticker to active chat",
                  ])),
              )
              .catching(r("getErrorSafe")(e))
              .sendLogs("sticker-send-active-chat-failed");
          }));
    }
    l.default = u;
  },
  98,
);
