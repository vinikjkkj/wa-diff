__d(
  "WAWebSendStickerToActiveChatStickersAction",
  [
    "WALogger",
    "WAWebApiPrepareCtwaContextSend",
    "WAWebChatCollection",
    "WAWebNewsletterCollection",
    "WAWebSendStickerAction",
  ],
  function (t, n, r, o, a, i, l) {
    var e;
    function s(t, n, a) {
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
      var s = l.getComposeContents(),
        u = {
          stickerSendOrigin: n,
          quotedMsg: l.composeQuotedMsg,
          ctwaContext: o(
            "WAWebApiPrepareCtwaContextSend",
          ).prepareCtwaContextSend(
            s == null ? void 0 : s.ctwaContextLinkData,
            s == null ? void 0 : s.ctwaContext,
          ),
        };
      (a === !0 && (u.isWamoSub = !0),
        (l.composeQuotedMsg = null),
        o("WAWebSendStickerAction").sendStickerToChat(l, t, u));
    }
    l.default = s;
  },
  98,
);
