__d(
  "WAWebRenderVideoPreviewIcon",
  [
    "WAWebGifRefreshedIcon.react",
    "WAWebMsgGetters",
    "WAWebViewOnceState",
    "WAWebViewOnceViewedIcon.react",
    "WDSIconIcVideocam.react",
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
        a = o("useWAWebMsgValues").useOptionalMsgValues(t.id, [
          o("WAWebMsgGetters").getAck,
          o("WAWebMsgGetters").getIsViewOnce,
          o("WAWebMsgGetters").getIsGif,
        ]);
      if (a == null) return null;
      var i = a[0],
        l = a[1],
        u = a[2];
      return l
        ? n.viewOnceStatic === !0 || !o("WAWebViewOnceState").isViewed(t.safe())
          ? s.jsx(r("WDSIconWdsIcViewOnce.react"), {
              width: 20,
              height: 20,
              testid: void 0,
            })
          : s.jsx(o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon, {
              width: 20,
              height: 20,
            })
        : u
          ? s.jsx(o("WAWebGifRefreshedIcon.react").GifRefreshedIcon, {
              name: "gif-preview-icon",
            })
          : s.jsx(r("WDSIconIcVideocam.react"), { height: 20, testid: void 0 });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
