__d(
  "WAWebRenderCiphertextPreviewIcon",
  [
    "WAWebMsgGetters",
    "WAWebStatusCiphertextIcon.react",
    "WAWebUnknownIcon.react",
    "WDSIconWdsIcViewOnce.react",
    "react",
    "react-compiler-runtime",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = o("react-compiler-runtime").c(4),
        n = e.msg,
        a;
      t[0] === Symbol.for("react.memo_cache_sentinel")
        ? ((a = [
            o("WAWebMsgGetters").getIsBotFutureproofPlaceholder,
            o("WAWebMsgGetters").getIsViewOncePlaceholder,
          ]),
          (t[0] = a))
        : (a = t[0]);
      var i = o("useWAWebMsgValues").useMsgValues(n.id, a),
        l = i[0],
        u = i[1];
      if (l) {
        var c;
        return (
          t[1] === Symbol.for("react.memo_cache_sentinel")
            ? ((c = s.jsx(o("WAWebUnknownIcon.react").UnknownIcon, {
                width: 20,
                height: 20,
                "aria-hidden": !0,
              })),
              (t[1] = c))
            : (c = t[1]),
          c
        );
      } else if (u) {
        var d;
        return (
          t[2] === Symbol.for("react.memo_cache_sentinel")
            ? ((d = s.jsx(r("WDSIconWdsIcViewOnce.react"), {
                width: 20,
                height: 20,
                "aria-hidden": !0,
                testid: void 0,
              })),
              (t[2] = d))
            : (d = t[2]),
          d
        );
      }
      var m;
      return (
        t[3] === Symbol.for("react.memo_cache_sentinel")
          ? ((m = s.jsx(
              o("WAWebStatusCiphertextIcon.react").StatusCiphertextIcon,
              { "aria-hidden": !0 },
            )),
            (t[3] = m))
          : (m = t[3]),
        m
      );
    }
    l.default = u;
  },
  98,
);
