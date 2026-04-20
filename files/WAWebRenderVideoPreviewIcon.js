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
            o("WAWebMsgGetters").getIsGif,
          ]),
          (t[0] = i))
        : (i = t[0]);
      var l = o("useWAWebMsgValues").useOptionalMsgValues(n.id, i);
      if (l == null) return null;
      var u = l[1],
        c = l[2];
      if (u) {
        var d;
        return (
          t[1] !== n || t[2] !== a.viewOnceStatic
            ? ((d =
                a.viewOnceStatic === !0 ||
                !o("WAWebViewOnceState").isViewed(n.safe())
                  ? s.jsx(r("WDSIconWdsIcViewOnce.react"), {
                      width: 20,
                      height: 20,
                      testid: "wds-ic-view-once",
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
      } else if (c) {
        var m;
        return (
          t[4] === Symbol.for("react.memo_cache_sentinel")
            ? ((m = s.jsx(o("WAWebGifRefreshedIcon.react").GifRefreshedIcon, {
                name: "gif-preview-icon",
              })),
              (t[4] = m))
            : (m = t[4]),
          m
        );
      }
      var p;
      return (
        t[5] === Symbol.for("react.memo_cache_sentinel")
          ? ((p = s.jsx(r("WDSIconIcVideocam.react"), {
              height: 20,
              testid: "video-call-refreshed",
            })),
            (t[5] = p))
          : (p = t[5]),
        p
      );
    }
    l.default = u;
  },
  98,
);
