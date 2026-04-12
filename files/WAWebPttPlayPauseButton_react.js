__d(
  "WAWebPttPlayPauseButton.react",
  [
    "fbt",
    "WDSIconIcPauseFilled.react",
    "WDSIconIcPlayArrowFilled.react",
    "WDSMenuBarItem.react",
    "react",
    "stylex",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e = ["ref"],
      u,
      c,
      d = c || (c = o("react")),
      m = {
        composeBox: { color: "x14ug900", $$css: !0 },
        composeBoxEnabled: { ":hover_color": "x1a92kiq", $$css: !0 },
        composeBoxEnabledRefresh: { ":hover_color": "x144v4sp", $$css: !0 },
        outOfChat: {
          width: "x1n7h9c3",
          height: "x1s1d1n7",
          marginInlineStart: "x2459kn",
          marginTop: "xvijh9v",
          display: "x78zum5",
          justifyContent: "xl56j7k",
          alignItems: "x6s0dn4",
          color: "xh4mkqi",
          $$css: !0,
        },
        outOfChatEnabled: { ":hover_opacity": "x5z6fxw", $$css: !0 },
      };
    function p(t) {
      var n = t.ref,
        o = babelHelpers.objectWithoutPropertiesLoose(t, e),
        a = o.disabled,
        i = a === void 0 ? !1 : a,
        l = o.onConfirm,
        c = o.paused,
        p = o.tabOrder,
        _ = o.theme,
        f = function (t) {
          t != null && l(t);
        },
        g = c ? s._(/*BTDS*/ "Play") : s._(/*BTDS*/ "Pause");
      return d.jsx(
        "div",
        babelHelpers.extends(
          { "aria-label": g },
          (u || (u = r("stylex"))).props([
            _ === "compose-box" && m.composeBox,
            _ === "compose-box" && !i && m.composeBoxEnabled,
            _ === "compose-box" && m.composeBoxEnabledRefresh,
            _ === "out-of-chat-playback" && m.outOfChat,
            _ === "out-of-chat-playback" && !i && m.outOfChatEnabled,
          ]),
          {
            children: d.jsx(r("WDSMenuBarItem.react"), {
              ref: n,
              testid: void 0,
              onClick: f,
              disabled: i,
              tabOrder: p,
              title: g,
              icon: r(
                c
                  ? "WDSIconIcPlayArrowFilled.react"
                  : "WDSIconIcPauseFilled.react",
              ),
            }),
          },
        ),
      );
    }
    ((p.displayName = p.name + " [from " + i.id + "]"), (l.default = p));
  },
  226,
);
