__d(
  "WAWebChatStickerForwardToMyStatusPlugin",
  [
    "JSResourceForInteraction",
    "WALogger",
    "WAWebChatStickerStatusEligibility",
    "WAWebChatStickerStatusToast",
    "WAWebLazyLoadedRetriable",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = r("WAWebLazyLoadedRetriable")(function () {
        return r("JSResourceForInteraction")(
          "WAWebChatStickerForwardToMyStatusAction",
        )
          .__setRef("WAWebChatStickerForwardToMyStatusPlugin")
          .load();
      }, "ChatStickerForwardToMyStatusAction"),
      u = {
        canForwardToMyStatus: o("WAWebChatStickerStatusEligibility")
          .canForwardChatStickersToMyStatus,
        forwardToMyStatus: c,
        postsTypedTextWhenOnlyMyStatusIsPicked: !0,
      };
    async function c(t) {
      var n;
      try {
        n = await s();
      } catch (t) {
        (o("WALogger")
          .ERROR(
            e ||
              (e = babelHelpers.taggedTemplateLiteralLoose([
                "[chat-sticker-forward-to-my-status] could not load the forward to My status action",
              ])),
          )
          .catching(r("getErrorSafe")(t))
          .sendLogs("chat-sticker-forward-to-my-status-load-failed"),
          o("WAWebChatStickerStatusToast").showChatStickerStatusFailedToast());
        return;
      }
      await n(t);
    }
    l.default = u;
  },
  98,
);
