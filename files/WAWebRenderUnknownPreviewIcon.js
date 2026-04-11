__d(
  "WAWebRenderUnknownPreviewIcon",
  [
    "WAWebMessageFailIcon.react",
    "WAWebMsgType",
    "WDSIconIcImage.react",
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
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = s.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {})),
          (t[0] = a))
        : (a = t[0]);
      var i = a;
      if (n.futureproofType === o("WAWebMsgType").MSG_TYPE.ALBUM) {
        var l;
        (t[1] === Symbol.for("react.memo_cache_sentinel")
          ? ((l = s.jsx(r("WDSIconIcImage.react"), { width: 18, height: 20 })),
            (t[1] = l))
          : (l = t[1]),
          (i = l));
      }
      return i;
    }
    l.default = u;
  },
  98,
);
