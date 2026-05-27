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
      var t = o("react-compiler-runtime").c(18),
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
      var _ = d,
        f = -1;
      i && (f = 0);
      var g = !i,
        h;
      t[2] !== a ? ((h = p(a)), (t[2] = a), (t[3] = h)) : (h = t[3]);
      var y = s && o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
        C;
      t[4] !== y ? ((C = [c.wrapper, y]), (t[4] = y), (t[5] = C)) : (C = t[5]);
      var b = f,
        v;
      t[6] === Symbol.for("react.memo_cache_sentinel")
        ? ((v = {
            className:
              "x9f619 x900493 x1nn3v0j x1gabggj x1120s5i xaso8d8 x1nxh6w3 xk50ysn x17t9dm2 x2b8uid xcpsgoo x1142k65 x9okykr x3hdh8v xr0m5pc x1muecih",
          }),
          (t[6] = v))
        : (v = t[6]);
      var S;
      t[7] !== a ? ((S = m(a)), (t[7] = a), (t[8] = S)) : (S = t[8]);
      var R;
      t[9] !== S
        ? ((R = u.jsx("div", babelHelpers.extends({}, v, { children: S }))),
          (t[9] = S),
          (t[10] = R))
        : (R = t[10]);
      var L;
      return (
        t[11] !== _ ||
        t[12] !== g ||
        t[13] !== h ||
        t[14] !== C ||
        t[15] !== R ||
        t[16] !== f
          ? ((L = u.jsx(r("WAWebUnstyledButton.react"), {
              "aria-hidden": g,
              "aria-label": h,
              xstyle: C,
              tabIndex: b,
              onClick: _,
              children: R,
            })),
            (t[11] = _),
            (t[12] = g),
            (t[13] = h),
            (t[14] = C),
            (t[15] = R),
            (t[16] = f),
            (t[17] = L))
          : (L = t[17]),
        L
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
    function p(e) {
      return e === 1
        ? s._(/*BTDS*/ "Change playback speed, currently 1\u00d7")
        : e === 1.5
          ? s._(/*BTDS*/ "Change playback speed, currently 1.5\u00d7")
          : e === 2
            ? s._(/*BTDS*/ "Change playback speed, currently 2\u00d7")
            : (function () {
                throw Error(
                  "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                    e,
                );
              })();
    }
    l.default = d;
  },
  226,
);
