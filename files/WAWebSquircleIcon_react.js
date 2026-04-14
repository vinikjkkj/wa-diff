__d(
  "WAWebSquircleIcon.react",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        icon: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          color: "x17t9dm2",
          backgroundColor: "xfn3atn",
          clipPath: "x1f2iure",
          $$css: !0,
        },
        disabled: { backgroundColor: "x1ailiqk", $$css: !0 },
        transparent: {
          color: "xhslqc4",
          backgroundColor: "x1jbjsai",
          $$css: !0,
        },
      };
    function d(t) {
      var n = t.size,
        o = n === void 0 ? 48 : n;
      return u.jsx("div", {
        className: (e || (e = r("stylex")))(
          c.icon,
          t.transparent === !0 && c.transparent,
          t.disabled === !0 && c.disabled,
          t.xstyle,
        ),
        style: { height: o, width: o },
        children: t.children,
      });
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
