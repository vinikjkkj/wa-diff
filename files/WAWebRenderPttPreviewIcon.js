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
      var t,
        n,
        a = e.msg,
        i = e.options,
        l = o("useWAWebMsgValues").useOptionalMsgValues(a.id, [
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getIsViewOnce,
        ]),
        u =
          (t = l == null ? void 0 : l[0]) != null
            ? t
            : o("WAWebMsgGetters").getAck(a),
        c =
          (n = l == null ? void 0 : l[1]) != null
            ? n
            : o("WAWebMsgGetters").getIsViewOnce(a);
      if (c)
        return i.viewOnceStatic === !0 ||
          !o("WAWebViewOnceState").isViewed(a.safe())
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
      var d = u === o("WAWebAck").ACK.PLAYED ? "contentDeemphasized" : "accent";
      return s.jsx(r("WDSIconIcKeyboardVoiceFilled.react"), {
        height: 20,
        width: 20,
        colorName: d,
        testid: "mic",
      });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
