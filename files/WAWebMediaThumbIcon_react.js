__d(
  "WAWebMediaThumbIcon.react",
  [
    "WAWebMediaData",
    "WAWebMsgAudioIcon.react",
    "WAWebMsgGifIcon.react",
    "WAWebMsgVideoIcon.react",
    "WDSIconIcVideocam.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.mediaData,
        n = e.theme;
      if (!t) return null;
      var a;
      return (
        t.type === r("WAWebMediaData").TYPE.AUDIO
          ? (a = s.jsx(o("WAWebMsgAudioIcon.react").MsgAudioIcon, {}))
          : t.type === r("WAWebMediaData").TYPE.VIDEO &&
            (t.isGif
              ? (a =
                  n === "mediaHub"
                    ? s.jsx(o("WAWebMsgGifIcon.react").MsgGifIcon, {
                        height: 20,
                        width: 20,
                      })
                    : s.jsx(o("WAWebMsgGifIcon.react").MsgGifIcon, {}))
              : (a =
                  n === "mediaHub"
                    ? s.jsx(r("WDSIconIcVideocam.react"), {
                        height: 20,
                        width: 20,
                      })
                    : s.jsx(o("WAWebMsgVideoIcon.react").MsgVideoIcon, {}))),
        a == null
          ? null
          : s.jsx(
              "div",
              babelHelpers.extends(
                {},
                {
                  0: {
                    className: "x10l6tqk xy1j3rs x1v1hl4c x17t9dm2 x47corl",
                  },
                  1: {
                    className: "x17t9dm2 x47corl x1n2onr6 x1ey2m1c x1o0tod",
                  },
                }[(n === "mediaHub") << 0],
                { children: a },
              ),
            )
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
