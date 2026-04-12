__d(
  "WAWebRenderCiphertextPreviewIcon",
  [
    "WAWebMsgGetters",
    "WAWebStatusCiphertextIcon.react",
    "WAWebUnknownIcon.react",
    "WDSIconWdsIcViewOnce.react",
    "react",
    "useWAWebMsgValues",
  ],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react"));
    function u(e) {
      var t = e.msg,
        n = o("useWAWebMsgValues").useMsgValues(t.id, [
          o("WAWebMsgGetters").getIsBotFutureproofPlaceholder,
          o("WAWebMsgGetters").getIsViewOncePlaceholder,
        ]),
        a = n[0],
        i = n[1];
      return a
        ? s.jsx(o("WAWebUnknownIcon.react").UnknownIcon, {
            width: 20,
            height: 20,
            "aria-hidden": !0,
          })
        : i
          ? s.jsx(r("WDSIconWdsIcViewOnce.react"), {
              width: 20,
              height: 20,
              "aria-hidden": !0,
              testid: void 0,
            })
          : s.jsx(o("WAWebStatusCiphertextIcon.react").StatusCiphertextIcon, {
              "aria-hidden": !0,
            });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
