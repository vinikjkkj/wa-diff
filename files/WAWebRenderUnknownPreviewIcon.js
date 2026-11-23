__d(
  "WAWebRenderUnknownPreviewIcon",
  [
    "WAWebMsgType",
    "WDSIconIcImage.react",
    "WDSIconMusicNoteSlash.react",
    "WDSIconWdsIcUnsupportedMessage.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg;
      return t.futureproofType === o("WAWebMsgType").MSG_TYPE.ALBUM
        ? s.jsx(r("WDSIconIcImage.react"), {
            width: 18,
            height: 20,
            testid: "album_futureproof_preview_icon",
          })
        : t.futureproofType === o("WAWebMsgType").MSG_TYPE.MUSIC
          ? s.jsx(r("WDSIconMusicNoteSlash.react"), {
              width: 20,
              height: 20,
              testid: "music_futureproof_preview_icon",
            })
          : s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
              width: 20,
              height: 20,
              testid: "message-fail",
            });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
