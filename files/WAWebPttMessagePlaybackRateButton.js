__d(
  "WAWebPttMessagePlaybackRateButton",
  [
    "fbt",
    "WAWebPttPrefs",
    "WAWebUnstyledButton.react",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l, s) {
    var e,
      u = e || (e = o("react")),
      c = {
        wrapper: {
          position: "x10l6tqk",
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "xh8yej3",
          height: "x5yr21d",
          userSelect: "x87ps6o",
          $$css: !0,
        },
      };
    function d(e) {
      var t = o("react-compiler-runtime").c(15),
        n = e.onClick,
        a = e.playbackRate,
        i = e.playbackRateButtonIsVisible,
        l = r("useWAWebIsKeyboardUser")(),
        s = l.isKeyboardUser,
        d;
      t[0] !== n
        ? ((d = function () {
            (o("WAWebPttPrefs").PttPrefs.delayClearPlaybackRateControl(), n());
          }),
          (t[0] = n),
          (t[1] = d))
        : (d = t[1]);
      var p = d,
        _ = -1;
      i && (_ = 0);
      var f = !i,
        g = s && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
        h;
      t[2] !== g ? ((h = [c.wrapper, g]), (t[2] = g), (t[3] = h)) : (h = t[3]);
      var y = _,
        C;
      t[4] === Symbol.for("react.memo_cache_sentinel")
        ? ((C = {
            className:
              "x9f619 x900493 x1nn3v0j x1gabggj x1120s5i xaso8d8 x1nxh6w3 xk50ysn x17t9dm2 x2b8uid xcpsgoo x1142k65 x9okykr x3hdh8v xr0m5pc x1muecih",
          }),
          (t[4] = C))
        : (C = t[4]);
      var b;
      t[5] !== a ? ((b = m(a)), (t[5] = a), (t[6] = b)) : (b = t[6]);
      var v;
      t[7] !== b
        ? ((v = u.jsx("div", babelHelpers.extends({}, C, { children: b }))),
          (t[7] = b),
          (t[8] = v))
        : (v = t[8]);
      var S;
      return (
        t[9] !== p || t[10] !== f || t[11] !== h || t[12] !== v || t[13] !== _
          ? ((S = u.jsx(r("WAWebUnstyledButton.react"), {
              "aria-hidden": f,
              xstyle: h,
              tabIndex: y,
              onClick: p,
              children: v,
            })),
            (t[9] = p),
            (t[10] = f),
            (t[11] = h),
            (t[12] = v),
            (t[13] = _),
            (t[14] = S))
          : (S = t[14]),
        S
      );
    }
    function m(e) {
      switch (e) {
        case 1:
          return s._(/*BTDS*/ "1\u00d7");
        case 1.5:
          return s._(/*BTDS*/ "1.5\u00d7");
        case 2:
          return s._(/*BTDS*/ "2\u00d7");
      }
    }
    l.default = d;
  },
  226,
);
