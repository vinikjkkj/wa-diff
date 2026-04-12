__d(
  "WAWebRenderPttPreviewIcon",
  [
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebViewOnceState",
    "WAWebViewOnceViewedIcon.react",
    "WDSIconIcKeyboardVoiceFilled.react",
    "WDSIconWdsIcViewOnce.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = e.options,
        a = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getIsViewOnce,
        ]),
        i = a[0],
        l = a[1];
      if (l)
        return n.viewOnceStatic === !0 ||
          !o("WAWebViewOnceState").isViewed(t.safe())
          ? s.jsx(r("WDSIconWdsIcViewOnce.react"), {
              width: 20,
              height: 20,
              testid: void 0,
            })
          : s.jsx(o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon, {
              width: 20,
              height: 20,
            });
      var u = i === o("WAWebAck").ACK.PLAYED ? "contentDeemphasized" : "accent";
      return s.jsx(r("WDSIconIcKeyboardVoiceFilled.react"), {
        height: 20,
        width: 20,
        colorName: u,
        testid: void 0,
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
