__d(
  "WAWebRenderCiphertextPreviewIcon",
  [
    "WAWebMsgGetters",
    "WDSIconIcSchedule.react",
    "WDSIconWdsIcUnsupportedMessage.react",
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
        ? s.jsx(r("WDSIconWdsIcUnsupportedMessage.react"), {
            testid: "unknown",
            width: 20,
            height: 20,
            "aria-hidden": !0,
          })
        : i
          ? s.jsx(r("WDSIconWdsIcViewOnce.react"), {
              width: 20,
              height: 20,
              "aria-hidden": !0,
              testid: "wds-ic-view-once",
            })
          : s.jsx(r("WDSIconIcSchedule.react"), {
              width: 20,
              height: 20,
              "aria-hidden": !0,
              testid: "ic-schedule",
            });
    }
    ((u.displayName = u.name + " [from " + i.id + "]"), (l.default = u));
  },
  98,
);
