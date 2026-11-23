__d(
  "WAWebHatchJarvisForwardImageToMuse",
  [
    "WALogger",
    "WAWebForwardMediaUtils",
    "WAWebGetAiBotContextForForwardedMsg",
    "WAWebHatchJarvisForwardReupload",
    "WAWebMediaOpaqueData",
    "WAWebMsgGetters",
    "WAWebMsgType",
    "WAWebMuseGroupRichResponseForward",
    "WAWebPrepRawMedia",
    "WAWebSendMsgResultAction",
    "getErrorSafe",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["chat"],
      s;
    async function u(e) {
      var t = e.botPersonaId,
        n = e.caption,
        a = e.chat,
        i = e.media,
        l = e.msg,
        u = e.multicast;
      try {
        var m = await o(
            "WAWebHatchJarvisForwardReupload",
          ).downloadHatchJarvisForwardMedia(i),
          p = await Promise.all(m.map(c));
        return await d(p, {
          botPersonaId: t,
          caption:
            o("WAWebMuseGroupRichResponseForward").truncateForwardMediaCaption(
              n,
            ) || void 0,
          chat: a,
          forwardedAiBotMessageInfo: o(
            "WAWebGetAiBotContextForForwardedMsg",
          ).getAiBotContextForForwardedMsg(l),
          forwardedFromWeb: !0,
          forwardingScore: o(
            "WAWebForwardMediaUtils",
          ).getMsgForwardingScoreWhenForwarded(l),
          isForwarded: o("WAWebMsgGetters").getShouldDisplayAsForwarded(l),
          multicast: u,
        });
      } catch (e) {
        throw (
          o("WALogger")
            .WARN(
              s ||
                (s = babelHelpers.taggedTemplateLiteralLoose([
                  "[hatch-jarvis-forward] image forward to Muse failed",
                ])),
            )
            .catching(r("getErrorSafe")(e))
            .sendLogs("hatch-jarvis-image-forward-failed"),
          e instanceof
          o("WAWebHatchJarvisForwardReupload").HatchJarvisForwardError
            ? e
            : new (o(
                "WAWebHatchJarvisForwardReupload",
              ).HatchJarvisForwardError)("upload_failed")
        );
      }
    }
    async function c(e) {
      var t = e.buffer,
        n = e.ref,
        a = await r("WAWebMediaOpaqueData").createFromData(
          new Blob([t], { type: n.mimeType }),
          n.mimeType,
        ),
        i = o("WAWebPrepRawMedia").prepRawMedia(a, {}),
        l = await i.waitForPrep();
      if (l.type !== o("WAWebMsgType").MSG_TYPE.IMAGE)
        throw new (o(
          "WAWebHatchJarvisForwardReupload",
        ).HatchJarvisForwardError)("upload_failed");
      return i;
    }
    async function d(t, n) {
      var r = n.chat,
        a = babelHelpers.objectWithoutPropertiesLoose(n, e),
        i = t[0],
        l = babelHelpers.arrayLikeToArray(t).slice(1);
      if (i == null)
        throw new (o(
          "WAWebHatchJarvisForwardReupload",
        ).HatchJarvisForwardError)("missing_download");
      var s = await i.sendToChat({
        chat: r,
        options: babelHelpers.extends({}, a, {
          type: o("WAWebMsgType").MSG_TYPE.IMAGE,
        }),
      });
      if (
        s.messageSendResult !==
          o("WAWebSendMsgResultAction").SendMsgResult.OK ||
        s.msg == null
      )
        throw new (o(
          "WAWebHatchJarvisForwardReupload",
        ).HatchJarvisForwardError)("upload_failed");
      return l.length === 0
        ? s
        : d(l, babelHelpers.extends({ chat: r }, a, { caption: void 0 }));
    }
    l.forwardHatchJarvisImagesToMuse = u;
  },
  98,
);
