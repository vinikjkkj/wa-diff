__d(
  "WAWebChatStickerForwardToMyStatusAction",
  [
    "WALogger",
    "WAWebChatStickerStatusPage",
    "WAWebChatStickerStatusToast",
    "WAWebForwardMediaUtils",
    "WAWebLogStatusPost",
    "WAWebMediaOpaqueData",
    "WAWebMsgType",
    "WAWebPrepRawMedia",
    "WAWebSendMsgResultAction",
    "WAWebSendStatusMsgAction",
    "WAWebWamEnumMediaType",
    "WAWebWamEnumStatusPostOrigin",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e, s, u, c;
    async function d(e) {
      var t = e.caption,
        n = e.msgs,
        r = e.retryCount,
        o = e.statusChat,
        a = m(t),
        i = n.length === 1 ? a : null,
        l = await n.reduce(async function (e, t) {
          return (
            (await e) +
            ((await p({ caption: i, retryCount: r, statusChat: o, sticker: t }))
              ? 1
              : 0)
          );
        }, Promise.resolve(0));
      n.length > 1 && a != null && l > 0 && (await g(a, r));
    }
    function m(e) {
      var t = e == null ? void 0 : e.trim();
      return t != null && t !== "" ? t : null;
    }
    async function p(e) {
      var t = e.caption,
        n = e.retryCount,
        r = e.statusChat,
        a = e.sticker,
        i = await _(a);
      if (i == null)
        return (
          o("WAWebChatStickerStatusToast").showChatStickerStatusFailedToast(),
          !1
        );
      var l = await f({ caption: t, page: i, statusChat: r, sticker: a });
      return (
        y({
          hasCaption: t != null,
          mediaType: o("WAWebLogStatusPost").getStatusMediaType(
            o("WAWebMsgType").MSG_TYPE.IMAGE,
          ),
          result: l,
          retryCount: n,
        }),
        C(l)
      );
    }
    async function _(t) {
      try {
        return await r("WAWebChatStickerStatusPage")(t);
      } catch (t) {
        return (
          o("WALogger")
            .ERROR(
              e ||
                (e = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat-sticker-forward-to-my-status] could not draw the sticker's status page",
                ])),
            )
            .catching(r("getErrorSafe")(t))
            .sendLogs("chat-sticker-forward-to-my-status-render-failed"),
          null
        );
      }
    }
    async function f(e) {
      var t = e.caption,
        n = e.page,
        a = e.statusChat,
        i = e.sticker;
      try {
        var l = o("WAWebPrepRawMedia").prepRawMedia(
          await r("WAWebMediaOpaqueData").createFromData(n, n.type),
          {},
        );
        await l.waitForPrep();
        var u = o("WAWebForwardMediaUtils").getMsgForwardingScoreWhenForwarded(
          i,
        );
        return await l.sendToChat({
          chat: a,
          options: { caption: t, forwardingScore: u, isForwarded: u > 0 },
        });
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat-sticker-forward-to-my-status] could not post the sticker's status page",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("chat-sticker-forward-to-my-status-post-failed"),
          null
        );
      }
    }
    async function g(e, t) {
      var n = await h(e);
      (y({
        hasCaption: !1,
        mediaType: o("WAWebWamEnumMediaType").MEDIA_TYPE.TEXT,
        result: n,
        retryCount: t,
      }),
        C(n));
    }
    async function h(e) {
      try {
        return await o("WAWebSendStatusMsgAction").sendStatusTextMsgAction({
          text: e,
        });
      } catch (e) {
        return (
          o("WALogger")
            .ERROR(
              u ||
                (u = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat-sticker-forward-to-my-status] could not post the typed text as a text status",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("chat-sticker-forward-to-my-status-text-failed"),
          null
        );
      }
    }
    function y(e) {
      var t = e.hasCaption,
        n = e.mediaType,
        a = e.result,
        i = e.retryCount;
      o("WAWebLogStatusPost")
        .logStatusPost({
          hasCaption: t,
          hasFilters: !1,
          mediaType: n,
          msg: a == null ? void 0 : a.msg,
          retryCount: i,
          statusContainsMusic: !1,
          statusPostOrigin: o("WAWebWamEnumStatusPostOrigin").STATUS_POST_ORIGIN
            .FORWARD_FROM_MESSAGES,
          statusPostResult: o("WAWebLogStatusPost").getStatusPostResult(
            a == null ? void 0 : a.messageSendResult,
          ),
        })
        .catch(function (e) {
          o("WALogger")
            .ERROR(
              c ||
                (c = babelHelpers.taggedTemplateLiteralLoose([
                  "[chat-sticker-forward-to-my-status] could not log the status post",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("chat-sticker-forward-to-my-status-log-failed");
        });
    }
    function C(e) {
      var t = e == null ? void 0 : e.messageSendResult;
      return t === o("WAWebSendMsgResultAction").SendMsgResult.OK
        ? !0
        : (t !== o("WAWebSendMsgResultAction").SendMsgResult.ERROR_CANCELLED &&
            o("WAWebChatStickerStatusToast").showChatStickerStatusFailedToast(),
          !1);
    }
    l.default = d;
  },
  98,
);
