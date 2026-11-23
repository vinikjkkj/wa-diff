__d(
  "WAWebSendStatusGifReplyAction",
  [
    "WAWebAttachMediaCollection",
    "WAWebComposeBoxUtils",
    "WAWebToast.react",
    "WAWebToastManager",
    "WAWebWamEnumMediaPickerOriginType",
    "err",
    "nullthrows",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    async function u(e) {
      var t = e.accessibilityLabel,
        n = e.attribution,
        a = e.chat,
        i = e.gifUrl,
        l = e.statusMsg,
        u = new (r("WAWebAttachMediaCollection"))({
          chatParticipantCount: a.getParticipantCount(),
        });
      await u.processAttachmentsForChat(
        [
          o("WAWebComposeBoxUtils").fetchGif({
            accessibilityLabel: t,
            attribution: n,
            filename: i,
            gifUrl: i,
          }),
        ],
        o("WAWebWamEnumMediaPickerOriginType").MEDIA_PICKER_ORIGIN_TYPE
          .STATUS_REPLY_GIF_INAPP,
        a,
      );
      var c = u.uiProcessMsgs(1),
        d = c.errorMsgs;
      if (d)
        throw (
          o("WAWebToastManager").ToastManager.open(
            s.jsx(o("WAWebToast.react").Toast, { msg: d }),
          ),
          r("err")(d)
        );
      var m = r("nullthrows")(u.getValidMedias()[0]);
      return m.sendToChat({ chat: a, options: { type: m.type, quotedMsg: l } });
    }
    l.sendStatusGifReply = u;
  },
  98,
);
