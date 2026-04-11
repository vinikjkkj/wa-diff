__d(
  "WAWebPttStartRecordingButton.react",
  [
    "fbt",
    "WAWebMicFilledIcon.react",
    "WAWebMicOutlinedIcon.react",
    "WAWebTabOrder",
    "WDSFocusStateStyles",
    "WDSMenuBarItem.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useWAWebFocusState",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u,
      c = u || (u = o("react")),
      d = u.useState;
    function m(t) {
      var n = o("react-compiler-runtime").c(23),
        a = t.disabled,
        i = t.onConfirm,
        l = d(!1),
        u = l[0],
        m = l[1],
        _ = r("useWAWebFocusState")(),
        f = _[1],
        g;
      n[0] !== i
        ? ((g = function (t) {
            t.button === 0 && i();
          }),
          (n[0] = i),
          (n[1] = g))
        : (g = n[1]);
      var h = g,
        y;
      n[2] !== i
        ? ((y = function (t) {
            i();
          }),
          (n[2] = i),
          (n[3] = y))
        : (y = n[3]);
      var C = y,
        b = p,
        v;
      n[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = s._(/*BTDS*/ "Voice message")), (n[4] = v))
        : (v = n[4]);
      var S = v,
        R =
          f &&
          o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocusPersistent,
        L;
      if (
        n[5] !== a ||
        n[6] !== h ||
        n[7] !== C ||
        n[8] !== u ||
        n[9] !== i ||
        n[10] !== R
      ) {
        var E = [R],
          k,
          I;
        n[12] === Symbol.for("react.memo_cache_sentinel")
          ? ((k = function () {
              return m(!0);
            }),
            (I = function () {
              return m(!1);
            }),
            (n[12] = k),
            (n[13] = I))
          : ((k = n[12]), (I = n[13]));
        var T = u
            ? o("WAWebMicFilledIcon.react").MicFilledIcon
            : o("WAWebMicOutlinedIcon.react").MicOutlinedIcon,
          D = a != null ? a : !1,
          x = u ? "filled" : "borderless",
          $;
        n[14] !== i || n[15] !== x || n[16] !== T || n[17] !== D
          ? (($ = c.jsx(r("WDSMenuBarItem.react"), {
              icon: T,
              title: S,
              onClick: i,
              tabOrder: o("WAWebTabOrder").TAB_ORDER.PTT_BUTTON,
              testid: void 0,
              disabled: D,
              buttonSize: "medium",
              buttonVariant: x,
              buttonType: "default",
            })),
            (n[14] = i),
            (n[15] = x),
            (n[16] = T),
            (n[17] = D),
            (n[18] = $))
          : ($ = n[18]);
        var P;
        n[19] !== h || n[20] !== C || n[21] !== $
          ? ((P = c.jsx("button", {
              onMouseEnter: k,
              onMouseLeave: I,
              onMouseDown: h,
              onTouchStart: C,
              onTouchEnd: b,
              "aria-label": S,
              children: $,
            })),
            (n[19] = h),
            (n[20] = C),
            (n[21] = $),
            (n[22] = P))
          : (P = n[22]);
        var N = P;
        ((L = c.jsx(
          "div",
          babelHelpers.extends({}, (e || (e = r("stylex"))).props(E), {
            children: N,
          }),
        )),
          (n[5] = a),
          (n[6] = h),
          (n[7] = C),
          (n[8] = u),
          (n[9] = i),
          (n[10] = R),
          (n[11] = L));
      } else L = n[11];
      return L;
    }
    function p() {}
    l.default = m;
  },
  226,
);
