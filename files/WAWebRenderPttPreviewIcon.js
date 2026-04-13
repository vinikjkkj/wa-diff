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
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(6),
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
      var l = o("useWAWebMsgValues").useMsgValues(n.id, i),
        u = l[0],
        c = l[1];
      if (c) {
        var d;
        return (
          t[1] !== n || t[2] !== a.viewOnceStatic
            ? ((d =
                a.viewOnceStatic === !0 ||
                !o("WAWebViewOnceState").isViewed(n.safe())
                  ? s.jsx(r("WDSIconWdsIcViewOnce.react"), {
                      width: 20,
                      height: 20,
                      testid: void 0,
                    })
                  : s.jsx(
                      o("WAWebViewOnceViewedIcon.react").ViewOnceViewedIcon,
                      { width: 20, height: 20 },
                    )),
              (t[1] = n),
              (t[2] = a.viewOnceStatic),
              (t[3] = d))
            : (d = t[3]),
          d
        );
      }
      var m = u === o("WAWebAck").ACK.PLAYED ? "contentDeemphasized" : "accent",
        p;
      return (
        t[4] !== m
          ? ((p = s.jsx(r("WDSIconIcKeyboardVoiceFilled.react"), {
              height: 20,
              width: 20,
              colorName: m,
              testid: void 0,
            })),
            (t[4] = m),
            (t[5] = p))
          : (p = t[5]),
        p
      );
    }
    l.default = u;
  },
  98,
);
