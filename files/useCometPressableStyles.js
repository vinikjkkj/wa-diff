__d(
  "useCometPressableStyles",
  ["CometContainerPressableContext", "react"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = (e || (e = o("react"))).useContext,
      u = {
        defaultCursor: { cursor: "xt0e3qv", $$css: !0 },
        expanding: { display: "x78zum5", $$css: !0 },
        focusRing: {
          boxShadow: "x18bame2",
          outline: "x1a2a7pz xvetz19",
          $$css: !0,
        },
        focusRingInset: { boxShadow: "xpud6h4", $$css: !0 },
        hideOutline: { outline: "x1a2a7pz", $$css: !0 },
        linkBase: { display: "x1rg5ohu", $$css: !0 },
        root: {
          borderStartStartRadius: "x1fmog5m",
          borderStartEndRadius: "xu25z0z",
          borderEndEndRadius: "x140muxe",
          borderEndStartRadius: "xo1y3bh",
          display: "x3nfvp2",
          flexDirection: "x1q0g3np",
          userSelect: "x87ps6o",
          ":hover_textDecoration": "x1lku1pv",
          $$css: !0,
        },
        root_DEPRECATED: {
          borderStartStartRadius: "x1fmog5m",
          borderStartEndRadius: "xu25z0z",
          borderEndEndRadius: "x140muxe",
          borderEndStartRadius: "xo1y3bh",
          position: "x1n2onr6",
          userSelect: "x87ps6o",
          ":hover_textDecoration": "x1lku1pv",
          $$css: !0,
        },
        zIndex: { zIndex: "x1vjfegm", $$css: !0 },
      };
    function c(e) {
      var t = e.cursorDisabled,
        n = e.display,
        o = e.disabled,
        a = o === void 0 ? !1 : o,
        i = e.expanding,
        l = i === void 0 ? n === "block" : i,
        c = e.focused,
        d = e.focusVisible,
        m = e.hideFocusOverlay,
        p = m === void 0 ? !1 : m,
        _ = e.hovered,
        f = e.overlayDisabled,
        g = f === void 0 ? !1 : f,
        h = e.pressed,
        y = e.suppressFocusRing,
        C = y === void 0 ? !1 : y,
        b = e.isLink,
        v = e.pressedStyleValue,
        S = e.overlayFocusRingPosition,
        R = e.xstyle,
        L =
          typeof R == "function"
            ? R({
                disabled: a,
                focused: c,
                focusVisible: d,
                hovered: _,
                pressed: h,
              })
            : R,
        E = s(r("CometContainerPressableContext")),
        k = d && (p || g) && !C,
        I = [
          n === "inline" ? u.root_DEPRECATED : u.root,
          t === !0 && u.defaultCursor,
          l && u.expanding,
          b && u.linkBase,
          !d && u.hideOutline,
          L,
          k && (S === "inset" ? u.focusRingInset : u.focusRing),
          E != null && u.zIndex,
        ],
        T = {};
      if (h && v != null) {
        var D = v.opacity,
          x = v.scale;
        (D != null && (T = { opacity: D }),
          x != null &&
            (T = babelHelpers.extends({}, T, {
              transform: "scale(" + x + ")",
            })));
      }
      return { pressedStyle: T, xstyle: I };
    }
    l.default = c;
  },
  98,
);
