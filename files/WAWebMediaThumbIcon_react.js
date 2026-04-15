__d(
  "WAWebMediaThumbIcon.react",
  [
    "WAWebMediaData",
    "WAWebMsgAudioIcon.react",
    "WAWebMsgGifIcon.react",
    "WAWebMsgVideoIcon.react",
    "WDSIconIcVideocam.react",
    "react",
    "react-compiler-runtime",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(10),
        n = e.mediaData,
        a = e.theme;
      if (!n) return null;
      var i;
      if (n.type === r("WAWebMediaData").TYPE.AUDIO) {
        var l;
        (t[0] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = s.jsx(o("WAWebMsgAudioIcon.react").MsgAudioIcon, {})),
            (t[0] = l))
          : (l = t[0]),
          (i = l));
      } else if (n.type === r("WAWebMediaData").TYPE.VIDEO)
        if (n.isGif) {
          var u;
          (t[1] !== a
            ? ((u =
                a === "mediaHub"
                  ? s.jsx(o("WAWebMsgGifIcon.react").MsgGifIcon, {
                      height: 20,
                      width: 20,
                    })
                  : s.jsx(o("WAWebMsgGifIcon.react").MsgGifIcon, {})),
              (t[1] = a),
              (t[2] = u))
            : (u = t[2]),
            (i = u));
        } else {
          var c;
          (t[3] !== a
            ? ((c =
                a === "mediaHub"
                  ? s.jsx(r("WDSIconIcVideocam.react"), {
                      height: 20,
                      width: 20,
                    })
                  : s.jsx(o("WAWebMsgVideoIcon.react").MsgVideoIcon, {})),
              (t[3] = a),
              (t[4] = c))
            : (c = t[4]),
            (i = c));
        }
      if (i == null) return null;
      var d;
      t[5] !== a
        ? ((d = {
            0: { className: "x10l6tqk xy1j3rs x1v1hl4c x17t9dm2 x47corl" },
            1: { className: "x17t9dm2 x47corl x1n2onr6 x1ey2m1c x1o0tod" },
          }[(a === "mediaHub") << 0]),
          (t[5] = a),
          (t[6] = d))
        : (d = t[6]);
      var m;
      return (
        t[7] !== i || t[8] !== d
          ? ((m = s.jsx("div", babelHelpers.extends({}, d, { children: i }))),
            (t[7] = i),
            (t[8] = d),
            (t[9] = m))
          : (m = t[9]),
        m
      );
    }
    l.default = u;
  },
  98,
);
