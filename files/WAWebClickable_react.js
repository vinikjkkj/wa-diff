__d(
  "WAWebClickable.react",
  [
    "$InternalEnum",
    "WAWebClassnames",
    "WAWebKeyboardIsKeyActivation",
    "WDSFocusStateStyles",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useMergeRefs",
    "useWAWebIsKeyboardUser",
  ],
  function (t, n, r, o, a, i, l) {
    var e = ["ref"],
      s,
      u,
      c = u || (u = o("react")),
      d = u.useRef,
      m = n("$InternalEnum").Mirrored(["Default", "Image"]),
      p = { imageFocus: { ":focus_filter": "x1cm50aa", $$css: !0 } };
    function _(t) {
      var n = o("react-compiler-runtime").c(14),
        a = t.ref,
        i = babelHelpers.objectWithoutPropertiesLoose(t, e),
        l = i.as,
        u = i.children,
        _ = i.className,
        f = i.dataTestId,
        g = i.inlineStyle,
        h = i.onClick,
        y = i.preventDefaultKeyboard,
        C = i.xstyle,
        b = l === void 0 ? "div" : l,
        v = y === void 0 ? !1 : y,
        S = b,
        R = r("useWAWebIsKeyboardUser")(),
        L = R.isKeyboardUser,
        E = d(null),
        k = r("useMergeRefs")(a, E),
        I = function (t) {
          if (r("WAWebKeyboardIsKeyActivation")(t) && h) {
            var e;
            ((e = E.current) == null || e.click(), v && t.preventDefault());
          }
        },
        T,
        D,
        x,
        $,
        P,
        N;
      if (h) {
        var M, w, A;
        ((T = (M = i.role) != null ? M : "button"),
          (D = i.ariaLabel),
          (x = (w = i.tabIndex) != null ? w : 0),
          ($ = (A = i.focusTheme) != null ? A : m.Default),
          (P = i.title),
          (N = i["data-tab"]));
      }
      var F = T,
        O = x,
        B = D,
        W = P,
        q = N,
        U = o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          _,
          (s || (s = r("stylex")))(
            C,
            L &&
              m.Default === $ &&
              o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            L && m.Image === $ && p.imageFocus,
          ),
        ),
        V;
      return (
        n[0] !== S ||
        n[1] !== D ||
        n[2] !== u ||
        n[3] !== N ||
        n[4] !== f ||
        n[5] !== I ||
        n[6] !== g ||
        n[7] !== k ||
        n[8] !== h ||
        n[9] !== T ||
        n[10] !== U ||
        n[11] !== x ||
        n[12] !== P
          ? ((V = c.jsx(S, {
              onClick: h,
              role: F,
              tabIndex: O,
              "data-testid": void 0,
              "aria-label": B,
              title: W,
              "data-tab": q,
              ref: k,
              className: U,
              onKeyDown: I,
              style: g,
              children: u,
            })),
            (n[0] = S),
            (n[1] = D),
            (n[2] = u),
            (n[3] = N),
            (n[4] = f),
            (n[5] = I),
            (n[6] = g),
            (n[7] = k),
            (n[8] = h),
            (n[9] = T),
            (n[10] = U),
            (n[11] = x),
            (n[12] = P),
            (n[13] = V))
          : (V = n[13]),
        V
      );
    }
    var f = _;
    ((l.FocusTheme = m), (l.Clickable = f));
  },
  98,
);
