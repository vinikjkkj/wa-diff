__d(
  "CometPressableOverlay.react",
  [
    "CometPressableOverlayContainer.react",
    "VisualCompletionAttributes",
    "XPlatReactEnvironment",
    "react",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e.useState,
      c = {
        circle: {
          borderStartStartRadius: "x1iwo8zk",
          borderStartEndRadius: "x1033uif",
          borderEndEndRadius: "x179ill4",
          borderEndStartRadius: "x1b60jn0",
          $$css: !0,
        },
        defaultHoveredStyle: { backgroundColor: "x1wpzbip", $$css: !0 },
        defaultPressedStyle: { backgroundColor: "x1iutvsz", $$css: !0 },
        focusRing: {
          boxShadow: "x18bame2",
          outline: "x1a2a7pz xvetz19",
          $$css: !0,
        },
        focusRingInset: { boxShadow: "xpud6h4", $$css: !0 },
        overlay: {
          bottom: "x1ey2m1c",
          insetInlineEnd: "xtijo5x",
          insetInlineStart: "x1o0tod",
          left: null,
          right: null,
          opacity: "xg01cxk",
          pointerEvents: "x47corl",
          position: "x10l6tqk",
          top: "x13vifvy",
          transitionDuration: "x1ebt8du",
          transitionProperty: "x19991ni",
          transitionTimingFunction: "x1dhq9h",
          $$css: !0,
        },
        overlayVisible: {
          opacity: "x1hc1fzr",
          transitionDuration: "x1mq3mr6",
          $$css: !0,
        },
        overlayWeb: {
          borderStartStartRadius: "x1fmog5m",
          borderStartEndRadius: "xu25z0z",
          borderEndEndRadius: "x140muxe",
          borderEndStartRadius: "xo1y3bh",
          $$css: !0,
        },
      };
    function d(e) {
      "use no forget";
      var t = e.focusRingPosition,
        n = t === void 0 ? "default" : t,
        a = e.focusVisible,
        i = a === void 0 ? !1 : a,
        l = e.focusVisibleStyle,
        d = e.hovered,
        m = d === void 0 ? !1 : d,
        p = e.hoveredStyle,
        _ = p === void 0 ? c.defaultHoveredStyle : p,
        f = e.offset,
        g = e.pressed,
        h = g === void 0 ? !1 : g,
        y = e.pressedStyle,
        C = y === void 0 ? c.defaultPressedStyle : y,
        b = e.radius,
        v = e.showFocusRing,
        S = v === void 0 ? !1 : v,
        R = e.xstyle,
        L = u(),
        E = L[0],
        k = L[1];
      h
        ? E !== "pressed" && k("pressed")
        : i
          ? E !== "focused" && k("focused")
          : m && E !== "hovered" && k("hovered");
      var I = 0,
        T = 0,
        D = 0,
        x = 0;
      f != null &&
        (typeof f == "number"
          ? ((I = -f), (T = -f), (D = -f), (x = -f))
          : ((I = -f.bottom), (T = -f.left), (D = -f.right), (x = -f.top)));
      var $ =
        (E === "focused" || (E === "pressed" && i)) && S
          ? n === "default"
            ? c.focusRing
            : c.focusRingInset
          : void 0;
      return s.jsx(
        r("CometPressableOverlayContainer.react"),
        babelHelpers.extends(
          {
            style:
              E != null
                ? babelHelpers.extends(
                    {},
                    typeof b == "number" ? { borderRadius: b } : {},
                    { bottom: I, left: T, right: D, top: x },
                  )
                : void 0,
            xstyle: [
              c.overlay,
              o("XPlatReactEnvironment").isWeb() && c.overlayWeb,
              R,
              (h || i || m) && [
                c.overlayVisible,
                E === "pressed" && C,
                E === "focused" && (l != null ? l : _),
                E === "hovered" && _,
              ],
              $,
              b === "50%" && c.circle,
            ],
          },
          r("VisualCompletionAttributes").IGNORE,
          { role: "none", children: null },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
