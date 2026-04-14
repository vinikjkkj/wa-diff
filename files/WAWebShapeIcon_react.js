__d(
  "WAWebShapeIcon.react",
  ["$InternalEnum", "WAWebShape.react", "react"],
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
      var n = t.Icon,
        o = t.backgroundStyles,
        a = t.directional,
        i = t.iconStyles,
        l = t.theme,
        u = babelHelpers.objectWithoutPropertiesLoose(t, e),
        h = u.children,
        y = babelHelpers.objectWithoutPropertiesLoose(u, s),
        C,
        b;
      if (l != null)
        switch (l) {
          case g.Muted:
            ((C = m.background), (b = m.icon));
            break;
          case g.Primary:
            ((C = p.background), (b = p.icon));
            break;
          case g.Accent:
            ((C = _.background), (b = _.icon));
            break;
          case g.Community:
            ((C = f.background), (b = f.icon));
            break;
        }
      return c.jsxs(
        r("WAWebShape.react"),
        babelHelpers.extends({}, y, {
          xstyle: [C, o],
          children: [
            c.jsx(n, {
              xstyle: [d.defaultIconStyle, b, i],
              iconXstyle: d.foregroundSvg,
              directional: a,
            }),
            h,
          ],
        }),
      );
    }
    ((h.displayName = h.name + " [from " + i.id + "]"),
      (l.ShapeIconTheme = g),
      (l.ShapeIcon = h));
  },
  98,
);
