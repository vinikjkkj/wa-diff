__d(
  "WAWebRenderImagePreviewIcon",
  [
    "WAWebMsgGetters",
    "WAWebViewOnceState",
    "WAWebViewOnceViewedIcon.react",
    "WDSIconIcImage.react",
    "WDSIconWdsIcViewOnce.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(5),
        n = e.msg,
        a = e.options,
        i;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((i = [
            o("WAWebMsgGetters").getAck,
            o("WAWebMsgGetters").getIsViewOnce,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebMsgValues").useOptionalMsgValues(n.id, i);
      if (l == null) return null;
      var u = l[1];
      if (u) {
        var c;
        return (
          t[1] !== n || t[2] !== a.viewOnceStatic
            ? ((c =
                a.viewOnceStatic === !0 ||
                !o("WAWebViewOnceState").isViewed(n.safe())
                  ? s.jsx(r("WDSIconWdsIcViewOnce.react"), {
                      width: 20,
                      height: 20,
                      "aria-hidden": !0,
                      testid: void 0,
                    })
                  : s.jsx(
                      o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon,
                      { width: 20, height: 20, "aria-hidden": !0 },
                    )),
              (t[1] = n),
              (t[2] = a.viewOnceStatic),
              (t[3] = c))
            : (c = t[3]),
          c
        );
      }
      var d;
      return (
        t[4] === Symbol.for("react.memo_cache_sentinel")
          ? ((d = s.jsx(r("WDSIconIcImage.react"), {
              width: 18,
              height: 20,
              testid: void 0,
            })),
            (t[4] = d))
          : (d = t[4]),
        d
      );
    }
    l.default = u;
  },
  98,
);
