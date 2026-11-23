__d(
  "WAWebRenderPttPreviewIcon",
  [
    "WAWebAck",
    "WAWebMsgGetters",
    "WAWebViewOnceState",
    "WDSIconIcKeyboardVoiceFilled.react",
    "WDSIconWdsIcEphemeral.react",
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
              testid: "wds-ic-view-once",
            })
          : s.jsx(r("WDSIconWdsIcEphemeral.react"), {
              width: 20,
              height: 20,
              testid: "view-once-opened-icon",
            });
      var u = i === o("WAWebAck").ACK.PLAYED ? "contentDeemphasized" : "accent";
      return s.jsx(r("WDSIconIcKeyboardVoiceFilled.react"), {
        height: 20,
        width: 20,
        colorName: u,
        testid: "mic",
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
