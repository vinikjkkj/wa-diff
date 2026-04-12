__d(
  "WAWebClickable.react",
  [
    "$InternalEnum",
    "WAWebClassnames",
    "WAWebKeyboardIsKeyActivation",
    "WDSFocusStateStyles",
    "react",
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
      var n = t.ref,
        a = babelHelpers.objectWithoutPropertiesLoose(t, e),
        i = a.as,
        l = i === void 0 ? "div" : i,
        u = a.children,
        _ = a.className,
        f = a.dataTestId,
        g = a.inlineStyle,
        h = a.onClick,
        y = a.preventDefaultKeyboard,
        C = y === void 0 ? !1 : y,
        b = a.xstyle,
        v = l,
        S = r("useWAWebIsKeyboardUser")(),
        R = S.isKeyboardUser,
        L = d(null),
        E = r("useMergeRefs")(n, L),
        k = function (t) {
          if (r("WAWebKeyboardIsKeyActivation")(t) && h) {
            var e;
            ((e = L.current) == null || e.click(), C && t.preventDefault());
          }
        },
        I,
        T,
        D,
        x,
        $,
        P;
      if (h) {
        var N, M, w;
        ((I = (N = a.role) != null ? N : "button"),
          (T = a.ariaLabel),
          (D = (M = a.tabIndex) != null ? M : 0),
          (x = (w = a.focusTheme) != null ? w : m.Default),
          ($ = a.title),
          (P = a["data-tab"]));
      }
      return c.jsx(v, {
        onClick: h,
        role: I,
        tabIndex: D,
        "data-testid": void 0,
        "aria-label": T,
        title: $,
        "data-tab": P,
        ref: E,
        className: o("WAWebClassnames").classnamesConvertMeToStylexPlease(
          _,
          (s || (s = r("stylex")))(
            b,
            R &&
              m.Default === x &&
              o("WDSFocusStateStyles").WDSFocusStateStyles.genericFocus,
            R && m.Image === x && p.imageFocus,
          ),
        ),
        onKeyDown: k,
        style: g,
        children: u,
      });
    }
    _.displayName = _.name + " [from " + i.id + "]";
    var f = _;
    ((l.FocusTheme = m), (l.Clickable = f));
  },
  98,
);
