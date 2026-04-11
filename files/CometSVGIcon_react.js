__d(
  "CometSVGIcon.react",
  [
    "BaseIsDecorativeContext",
    "BaseSVGIcon.react",
    "react",
    "react-compiler-runtime",
    "stylex",
    "useCometIconColors",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "alt",
        "children",
        "color",
        "component",
        "inline",
        "shadow",
        "size",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u,
      m = d.useContext,
      p = d.useId,
      _ = {
        color: function (t) {
          return [
            { color: t != null ? "x14rh7hd" : t, $$css: !0 },
            { "--x-color": t != null ? t : void 0 },
          ];
        },
        icon: {
          display: "x1lliihq",
          forcedColorAdjust: "x1tzjh5l",
          transitionDuration: "x1k90msu",
          transitionProperty: "x2h7rmj",
          transitionTimingFunction: "x1qfuztq",
          $$css: !0,
        },
        inline: { display: "x1rg5ohu", $$css: !0 },
        shadow: { filter: "x1ssd25i", $$css: !0 },
      };
    function f(t) {
      var n = o("react-compiler-runtime").c(37),
        a = p(),
        i = r("useCometIconColors")(),
        l = m(r("BaseIsDecorativeContext")),
        u = l === !0 ? !0 : void 0;
      if (t.viewBox === void 0) {
        var d = t.alt,
          f = t.color,
          g = t.component,
          h = t.inline,
          y = t.shadow,
          C = t.size,
          b = h === void 0 ? !1 : h,
          v = y === void 0 ? !1 : y,
          S = i[f],
          R = b && _.inline,
          L = v && _.shadow,
          E;
        n[0] !== R || n[1] !== L
          ? ((E = [_.icon, R, L]), (n[0] = R), (n[1] = L), (n[2] = E))
          : (E = n[2]);
        var k;
        return (
          n[3] !== d || n[4] !== g || n[5] !== C || n[6] !== S || n[7] !== E
            ? ((k = c.jsx(r("BaseSVGIcon.react"), {
                alt: d,
                color: S,
                icon: g,
                size: C,
                xstyle: E,
              })),
              (n[3] = d),
              (n[4] = g),
              (n[5] = C),
              (n[6] = S),
              (n[7] = E),
              (n[8] = k))
            : (k = n[8]),
          k
        );
      } else {
        var I, T, D, x, $, P;
        if (n[9] !== t) {
          var N = t.alt,
            M = t.children,
            w = t.color,
            A = t.component,
            F = t.inline,
            O = t.shadow,
            B = t.size,
            W = babelHelpers.objectWithoutPropertiesLoose(t, e);
          ((I = M),
            (T = w),
            ($ = F),
            (P = O),
            (x = B),
            (D = W),
            (n[9] = t),
            (n[10] = I),
            (n[11] = T),
            (n[12] = D),
            (n[13] = x),
            (n[14] = $),
            (n[15] = P));
        } else
          ((I = n[10]),
            (T = n[11]),
            (D = n[12]),
            (x = n[13]),
            ($ = n[14]),
            (P = n[15]));
        var q = $ === void 0 ? !1 : $,
          U = P === void 0 ? !1 : P,
          V,
          H;
        if (n[16] !== a || n[17] !== T) {
          if (
            ((V = []), T != null && typeof T != "string" && c.isValidElement(T))
          ) {
            var G;
            (n[20] !== a
              ? ((G = { id: a, key: "1", suppressHydrationWarning: !0 }),
                (n[20] = a),
                (n[21] = G))
              : (G = n[21]),
              V.push(c.cloneElement(T, G)),
              (H = "url(#" + a + ")"));
          }
          ((n[16] = a), (n[17] = T), (n[18] = V), (n[19] = H));
        } else ((V = n[18]), (H = n[19]));
        var z;
        n[22] !== T || n[23] !== i || n[24] !== q || n[25] !== U
          ? ((z = (s || (s = r("stylex"))).props([
              _.icon,
              q && _.inline,
              U && _.shadow,
              typeof T == "string" && _.color(i[T]),
            ])),
            (n[22] = T),
            (n[23] = i),
            (n[24] = q),
            (n[25] = U),
            (n[26] = z))
          : (z = n[26]);
        var j = H != null ? H : "currentColor",
          K;
        n[27] !== V
          ? ((K = V.length > 0 ? c.jsx("defs", { children: V }) : void 0),
            (n[27] = V),
            (n[28] = K))
          : (K = n[28]);
        var Q;
        return (
          n[29] !== I ||
          n[30] !== u ||
          n[31] !== D ||
          n[32] !== x ||
          n[33] !== z ||
          n[34] !== j ||
          n[35] !== K
            ? ((Q = c.jsxs(
                "svg",
                babelHelpers.extends({}, D, z, {
                  "aria-hidden": u,
                  fill: j,
                  height: x,
                  width: x,
                  children: [K, I],
                }),
              )),
              (n[29] = I),
              (n[30] = u),
              (n[31] = D),
              (n[32] = x),
              (n[33] = z),
              (n[34] = j),
              (n[35] = K),
              (n[36] = Q))
            : (Q = n[36]),
          Q
        );
      }
    }
    l.default = f;
  },
  98,
);
