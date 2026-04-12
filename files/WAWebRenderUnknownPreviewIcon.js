__d(
  "WAWebRenderUnknownPreviewIcon",
  [
    "WAWebMessageFailIcon.react",
    "WAWebMsgType",
    "WDSIconIcImage.react",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = s.jsx(o("WAWebMessageFailIcon.react").MessageFailIcon, {});
      return (
        t.futureproofType === o("WAWebMsgType").MSG_TYPE.ALBUM &&
          (n = s.jsx(r("WDSIconIcImage.react"), { width: 18, height: 20 })),
        n
      );
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
