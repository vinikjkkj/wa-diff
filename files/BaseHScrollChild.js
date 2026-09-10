__d(
  "BaseHScrollChild",
  [
    "BaseGridCell.react",
    "BaseHScrollContext",
    "FocusInertRegion.react",
    "Locale",
    "react",
    "react-compiler-runtime",
    "stylex",
  ],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "aria-hidden",
        "children",
        "expanding",
        "role",
        "testid",
        "type",
        "xstyle",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = u.useContext,
      m = { flexBasis: "x1mz2wy7", $$css: !0 },
      p = {
        card: {
          flexGrow: "x1c4vz4f",
          flexShrink: "x2lah0s",
          minWidth: "xeuugli",
          scrollSnapAlign: "x1bhewko",
          $$css: !0,
        },
        cardExpanding: { display: "x78zum5", $$css: !0 },
        cardRTL: { scrollSnapAlign: "x83psoy", $$css: !0 },
        flexBasis: function (t) {
          return [
            { flexBasis: t != null ? "x1mz2wy7" : t, $$css: !0 },
            {
              "--x-flexBasis": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
        flexBasisDoubleWidth: function (t, n) {
          return [
            m,
            {
              "--x-flexBasis": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })("calc((" + t + ") * 2 + " + n + "px)"),
            },
          ];
        },
        gap: function (t) {
          return [
            {
              marginInlineEnd: (t != null ? "x1m6vu9m " : t) + "x10xlvfm",
              $$css: !0,
            },
            {
              "--x-1wkpfu5": (function (e) {
                return typeof e == "number" ? e + "px" : e != null ? e : void 0;
              })(t),
            },
          ];
        },
      },
      _ = o("Locale").isRTL();
    function f(t) {
      var n = o("react-compiler-runtime").c(21),
        a,
        i,
        l,
        u,
        m,
        f,
        g,
        h;
      n[0] !== t
        ? ((u = t["aria-hidden"]),
          (i = t.children),
          (m = t.expanding),
          (l = t.role),
          (g = t.testid),
          (f = t.type),
          (h = t.xstyle),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = m),
          (n[6] = f),
          (n[7] = g),
          (n[8] = h))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (m = n[5]),
          (f = n[6]),
          (g = n[7]),
          (h = n[8]));
      var y = u === void 0 ? !1 : u,
        C = m === void 0 ? !1 : m,
        b = f === void 0 ? "default" : f,
        v = d(r("BaseHScrollContext")),
        S = v.role,
        R = v.spacing;
      if (R == null) return null;
      var L = R.gap,
        E = R.width,
        k;
      if (
        n[9] !== a ||
        n[10] !== i ||
        n[11] !== C ||
        n[12] !== L ||
        n[13] !== y ||
        n[14] !== S ||
        n[15] !== l ||
        n[16] !== g ||
        n[17] !== b ||
        n[18] !== E ||
        n[19] !== h
      ) {
        var I;
        e: switch (b) {
          case "custom": {
            I = void 0;
            break e;
          }
          case "doubleWidth": {
            I = p.flexBasisDoubleWidth(E, L);
            break e;
          }
          default:
            I = p.flexBasis(E);
        }
        var T = [p.card, _ && p.cardRTL, p.gap(L), C && p.cardExpanding, h, I];
        ((k =
          S === "grid"
            ? c.jsx(
                r("BaseGridCell.react"),
                babelHelpers.extends({}, a, {
                  "data-type": "hscroll-child",
                  testid: void 0,
                  xstyle: T,
                  children: i,
                }),
              )
            : c.jsx(
                "div",
                babelHelpers.extends({}, (s || (s = r("stylex"))).props(T), {
                  "data-testid": void 0,
                  "data-type": "hscroll-child",
                  role: S === "list" ? "listitem" : l,
                  children: c.jsx(r("FocusInertRegion.react"), {
                    disabled: !y,
                    children: i,
                  }),
                }),
              )),
          (n[9] = a),
          (n[10] = i),
          (n[11] = C),
          (n[12] = L),
          (n[13] = y),
          (n[14] = S),
          (n[15] = l),
          (n[16] = g),
          (n[17] = b),
          (n[18] = E),
          (n[19] = h),
          (n[20] = k));
      } else k = n[20];
      return k;
    }
    l.default = f;
  },
  98,
);
