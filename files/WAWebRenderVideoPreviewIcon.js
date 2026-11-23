__d(
  "WAWebRenderVideoPreviewIcon",
  [
    "WAWebMsgGetters",
    "WAWebViewOnceState",
    "WDSIconIcGifBox.react",
    "WDSIconIcVideocam.react",
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
              testid: "wds-ic-view-once",
            })
          : s.jsx(r("WDSIconWdsIcEphemeral.react"), {
              width: 20,
              height: 20,
              testid: "view-once-opened-icon",
            })
        : u
          ? s.jsx(r("WDSIconIcGifBox.react"), {
              height: 20,
              testid: "gif-preview-icon",
            })
          : s.jsx(r("WDSIconIcVideocam.react"), {
              height: 20,
              testid: "video-call-refreshed",
            });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
