__d(
  "WAWebPttPlayPauseButton.react",
  [
    "fbt",
    "WDSIconIcPauseFilled.react",
    "WDSIconIcPlayArrowFilled.react",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
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
      var n = o("react-compiler-runtime").c(21),
        a,
        i;
      n[0] !== t
        ? ((i = t.ref),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i))
        : ((a = n[1]), (i = n[2]));
      var l = a,
        c = l.disabled,
        p = l.onConfirm,
        _ = l.paused,
        f = l.tabOrder,
        g = l.theme,
        h = c === void 0 ? !1 : c,
        y;
      n[3] !== p
        ? ((y = function (t) {
            t != null && p(t);
          }),
          (n[3] = p),
          (n[4] = y))
        : (y = n[4]);
      var C = y,
        b;
      n[5] !== _
        ? ((b = _ ? s._(/*BTDS*/ "Play") : s._(/*BTDS*/ "Pause")),
          (n[5] = _),
          (n[6] = b))
        : (b = n[6]);
      var v = b,
        S;
      n[7] !== h || n[8] !== g
        ? ((S = (u || (u = r("stylex"))).props([
            g === "compose-box" && m.composeBox,
            g === "compose-box" && !h && m.composeBoxEnabled,
            g === "compose-box" && m.composeBoxEnabledRefresh,
            g === "out-of-chat-playback" && m.outOfChat,
            g === "out-of-chat-playback" && !h && m.outOfChatEnabled,
          ])),
          (n[7] = h),
          (n[8] = g),
          (n[9] = S))
        : (S = n[9]);
      var R = r(
          _ ? "WDSIconIcPlayArrowFilled.react" : "WDSIconIcPauseFilled.react",
        ),
        L;
      n[10] !== h ||
      n[11] !== C ||
      n[12] !== v ||
      n[13] !== i ||
      n[14] !== R ||
      n[15] !== f
        ? ((L = d.jsx(r("WDSMenuBarItem.react"), {
            ref: i,
            testid: void 0,
            onClick: C,
            disabled: h,
            tabOrder: f,
            title: v,
            icon: R,
          })),
          (n[10] = h),
          (n[11] = C),
          (n[12] = v),
          (n[13] = i),
          (n[14] = R),
          (n[15] = f),
          (n[16] = L))
        : (L = n[16]);
      var E;
      return (
        n[17] !== v || n[18] !== S || n[19] !== L
          ? ((E = d.jsx(
              "div",
              babelHelpers.extends({ "aria-label": v }, S, { children: L }),
            )),
            (n[17] = v),
            (n[18] = S),
            (n[19] = L),
            (n[20] = E))
          : (E = n[20]),
        E
      );
    }
    l.default = p;
  },
  226,
);
