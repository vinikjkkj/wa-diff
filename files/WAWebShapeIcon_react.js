__d(
  "WAWebShapeIcon.react",
  ["$InternalEnum", "WAWebShape.react", "react", "react-compiler-runtime"],
  function (t, n, r, o, a, i, l) {
    var e = ["Icon", "backgroundStyles", "directional", "iconStyles", "theme"],
      s = ["children"],
      u,
      c = u || (u = o("react")),
      d = {
        foregroundSvg: { width: "xh8yej3", height: "x5yr21d", $$css: !0 },
        defaultIconStyle: {
          width: "xycev2y",
          height: "x39lw6i",
          color: "xzqyxu6",
          $$css: !0,
        },
      },
      m = {
        background: { backgroundColor: "x1od0jb8", $$css: !0 },
        icon: { color: "xhslqc4", $$css: !0 },
      },
      p = {
        background: { backgroundColor: "xfn3atn", $$css: !0 },
        icon: { color: "xzqyxu6", $$css: !0 },
      },
      _ = {
        background: { backgroundColor: "x1abdmlv", $$css: !0 },
        icon: { color: "xk4n5i7", $$css: !0 },
      },
      f = {
        background: { backgroundColor: "xfn3atn", $$css: !0 },
        icon: { color: "xo1mcw5", $$css: !0 },
      },
      g = n("$InternalEnum").Mirrored([
        "Muted",
        "Primary",
        "Accent",
        "Community",
      ]);
    function h(t) {
      var n = o("react-compiler-runtime").c(25),
        a,
        i,
        l,
        u,
        h,
        y;
      n[0] !== t
        ? ((a = t.Icon),
          (i = t.backgroundStyles),
          (l = t.directional),
          (u = t.iconStyles),
          (y = t.theme),
          (h = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = h),
          (n[6] = y))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (h = n[5]),
          (y = n[6]));
      var C, b;
      if (n[7] !== h) {
        var v = h;
        ((C = v.children),
          (b = babelHelpers.objectWithoutPropertiesLoose(v, s)),
          (n[7] = h),
          (n[8] = C),
          (n[9] = b));
      } else ((C = n[8]), (b = n[9]));
      var S, R;
      if (y != null)
        e: switch (y) {
          case g.Muted: {
            ((S = m.background), (R = m.icon));
            break e;
          }
          case g.Primary: {
            ((S = p.background), (R = p.icon));
            break e;
          }
          case g.Accent: {
            ((S = _.background), (R = _.icon));
            break e;
          }
          case g.Community:
            ((S = f.background), (R = f.icon));
        }
      var L;
      n[10] !== i || n[11] !== S
        ? ((L = [S, i]), (n[10] = i), (n[11] = S), (n[12] = L))
        : (L = n[12]);
      var E;
      n[13] !== u || n[14] !== R
        ? ((E = [d.defaultIconStyle, R, u]),
          (n[13] = u),
          (n[14] = R),
          (n[15] = E))
        : (E = n[15]);
      var k;
      n[16] !== a || n[17] !== l || n[18] !== E
        ? ((k = c.jsx(a, {
            xstyle: E,
            iconXstyle: d.foregroundSvg,
            directional: l,
          })),
          (n[16] = a),
          (n[17] = l),
          (n[18] = E),
          (n[19] = k))
        : (k = n[19]);
      var I;
      return (
        n[20] !== C || n[21] !== b || n[22] !== L || n[23] !== k
          ? ((I = c.jsxs(
              r("WAWebShape.react"),
              babelHelpers.extends({}, b, { xstyle: L, children: [k, C] }),
            )),
            (n[20] = C),
            (n[21] = b),
            (n[22] = L),
            (n[23] = k),
            (n[24] = I))
          : (I = n[24]),
        I
      );
    }
    ((l.ShapeIconTheme = g), (l.ShapeIcon = h));
  },
  98,
);
