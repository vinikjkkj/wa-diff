__d(
  "WAWebFilledIcon.react",
  ["WAWebFlex.react", "react"],
  function (t, n, r, o, a, i, l) {
    var e,
      s = e || (e = o("react")),
      u = {
        background: {
          borderStartStartRadius: "xvs2etk",
          borderStartEndRadius: "xg3wpu6",
          borderEndEndRadius: "x1jwbhkm",
          borderEndStartRadius: "xgg4q86",
          $$css: !0,
        },
        defaultBackgroundColor: { backgroundColor: "xfn3atn", $$css: !0 },
        defaultIconColor: { color: "xk4n5i7", $$css: !0 },
      },
      c = {
        small: { width: "x1useyqa", height: "xsdox4t", $$css: !0 },
        large: { width: "xj35x94", height: "x19swzb4", $$css: !0 },
      };
    function d(e) {
      var t = e.Icon,
        n = e.backgroundColor,
        r = e.iconColor,
        a = e.size,
        i = a === void 0 ? "small" : a,
        l;
      switch (i) {
        case "small":
          l = 24;
          break;
        case "large":
          l = 64;
          break;
      }
      return s.jsx(o("WAWebFlex.react").FlexColumn, {
        justify: "center",
        align: "center",
        xstyle: [u.background, u.defaultBackgroundColor, n, c[i]],
        children: s.jsx(t, {
          xstyle: [u.defaultIconColor, r],
          width: l,
          height: l,
        }),
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
