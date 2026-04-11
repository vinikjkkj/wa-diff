__d(
  "BaseTooltipTargetWrapper.react",
  [
    "FocusWithinHandler.react",
    "XPlatReactEnvironment",
    "react",
    "react-compiler-runtime",
    "react-strict-dom",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e,
      s = e || (e = o("react")),
      u = e,
      c = u.useEffect,
      d = u.useRef,
      m = u.useState,
      p = {
        inheritAll: {
          alignContent: "x4k7w5x",
          alignItems: "x1h91t0o",
          alignSelf: "x1h9r5lt",
          display: "x1jfb8zj",
          flexBasis: "xv2umb2",
          flexDirection: "x1beo9mf",
          flexGrow: "xaigb6o",
          flexShrink: "x12ejxvf",
          height: "x3igimt",
          justifyContent: "xarpa2k",
          maxHeight: "xedcshv",
          maxWidth: "x1lytzrv",
          minHeight: "x1t2pt76",
          minWidth: "x7ja8zs",
          width: "x1qrby5j",
          $$css: !0,
        },
        wrapperInline: { display: "x3nfvp2", $$css: !0 },
      };
    function _(e) {
      var t = o("react-compiler-runtime").c(18),
        n = e.children,
        a = e.forceInlineDisplay,
        i = e.onHide,
        l = e.onShow,
        u = e.persistAfterClick,
        _ = e.ref,
        f = e.tooltipIdentifier,
        g = e.xstyle,
        h = m(!1),
        y = h[0],
        C = h[1],
        b = m(!1),
        v = b[0],
        S = b[1],
        R = y && v,
        L = d(R),
        E,
        k;
      (t[0] !== i || t[1] !== l || t[2] !== R
        ? ((E = function () {
            (L.current !== R && (R ? l() : i()), (L.current = R));
            var e = function () {
              R || i();
            };
            return (
              window.addEventListener("keydown", e),
              function () {
                return window.removeEventListener("keydown", e);
              }
            );
          }),
          (k = [i, l, R]),
          (t[0] = i),
          (t[1] = l),
          (t[2] = R),
          (t[3] = E),
          (t[4] = k))
        : ((E = t[3]), (k = t[4])),
        c(E, k));
      var I = o("XPlatReactEnvironment").isWeb()
          ? o("react-strict-dom").html.span
          : o("react-strict-dom").html.div,
        T = u !== !0 ? i : void 0,
        D = a === !0 && p.wrapperInline,
        x;
      t[5] !== D || t[6] !== g
        ? ((x = [p.inheritAll, D, g]), (t[5] = D), (t[6] = g), (t[7] = x))
        : (x = t[7]);
      var $;
      t[8] !== n
        ? (($ = s.jsx(r("FocusWithinHandler.react"), {
            onFocusChange: C,
            onFocusVisibleChange: S,
            children: n,
          })),
          (t[8] = n),
          (t[9] = $))
        : ($ = t[9]);
      var P;
      return (
        t[10] !== i ||
        t[11] !== l ||
        t[12] !== _ ||
        t[13] !== T ||
        t[14] !== x ||
        t[15] !== $ ||
        t[16] !== f
          ? ((P = s.jsx(I, {
              "aria-describedby": f,
              "data-testid": void 0,
              onPointerEnter: l,
              onPointerLeave: i,
              onPointerUp: T,
              ref: _,
              style: x,
              children: $,
            })),
            (t[10] = i),
            (t[11] = l),
            (t[12] = _),
            (t[13] = T),
            (t[14] = x),
            (t[15] = $),
            (t[16] = f),
            (t[17] = P))
          : (P = t[17]),
        P
      );
    }
    l.default = _;
  },
  98,
);
