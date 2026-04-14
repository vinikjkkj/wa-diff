__d(
  "WAWebRenderImagePreviewIcon",
  [
    "WAWebMsgGetters",
    "WAWebViewOnceState",
    "WAWebViewOnceViewedIcon.react",
    "WDSIconIcImage.react",
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
        ]);
      if (a == null) return null;
      var i = a[1];
      return i
        ? n.viewOnceStatic === !0 || !o("WAWebViewOnceState").isViewed(t.safe())
          ? s.jsx(r("WDSIconWdsIcViewOnce.react"), {
              width: 20,
              height: 20,
              "aria-hidden": !0,
              testid: void 0,
            })
          : s.jsx(o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon, {
              width: 20,
              height: 20,
              "aria-hidden": !0,
            })
        : s.jsx(r("WDSIconIcImage.react"), {
            width: 18,
            height: 20,
            testid: void 0,
          });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
