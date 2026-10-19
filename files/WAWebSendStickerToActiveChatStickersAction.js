__d(
  "WAWebSendStickerToActiveChatStickersAction",
  [
    "WALogger",
    "WAWebApiPrepareCtwaContextSend",
    "WAWebGetActiveStickerChat",
    "WAWebSendStickerAction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s;
    function u(t, n, a) {
      var i = r("WAWebGetActiveStickerChat")();
      if (i == null) {
        o("WALogger").ERROR(
          e ||
            (e = babelHelpers.taggedTemplateLiteralLoose([
              "Cannot call sendStickerToActiveChat without an active chat",
            ])),
        );
        return;
      }
      var l = i.getComposeContents(),
        u = {
          stickerSendOrigin: n,
          quotedMsg: i.composeQuotedMsg,
          ctwaContext: o(
            "WAWebApiPrepareCtwaContextSend",
          ).prepareCtwaContextSend(
            l == null ? void 0 : l.ctwaContextLinkData,
            l == null ? void 0 : l.ctwaContext,
          ),
        };
      (a === !0 && (u.isWamoSub = !0),
        (i.composeQuotedMsg = null),
        o("WAWebSendStickerAction")
          .sendStickerToChat(i, t, u)
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
