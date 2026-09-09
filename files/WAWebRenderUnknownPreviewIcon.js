__d(
  "WAWebRenderUnknownPreviewIcon",
  [
    "WAWebMessageFailIcon.react",
    "WAWebMsgType",
    "WDSIconIcImage.react",
    "WDSIconIcMusicNote.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.msg,
        a;
      return (
        t[0] !== n.futureproofType
          ? ((a =
              n.futureproofType === o("WAWebMsgType").MSG_TYPE.ALBUM
                ? s.jsx(r("WDSIconIcImage.react"), {
                    width: 18,
                    height: 20,
                    testid: "album_futureproof_preview_icon",
                  })
                : n.futureproofType === o("WAWebMsgType").MSG_TYPE.MUSIC
                  ? s.jsx(r("WDSIconIcMusicNote.react"), {
                      width: 20,
                      height: 20,
                      testid: "music_futureproof_preview_icon",
                    })
                  : s.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {})),
            (t[0] = n.futureproofType),
            (t[1] = a))
          : (a = t[1]),
        a
      );
    }
    l.default = u;
  },
  98,
);
