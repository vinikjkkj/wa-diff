__d(
  "WAWebSquircleIcon.react",
  ["react", "react-compiler-runtime", "stylex"],
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
      var n = o("react-compiler-runtime").c(10),
        a = t.size,
        i = a === void 0 ? 48 : a,
        l;
      n[0] !== t.disabled || n[1] !== t.transparent || n[2] !== t.xstyle
        ? ((l = (e || (e = r("stylex")))(
            c.icon,
            t.transparent === !0 && c.transparent,
            t.disabled === !0 && c.disabled,
            t.xstyle,
          )),
          (n[0] = t.disabled),
          (n[1] = t.transparent),
          (n[2] = t.xstyle),
          (n[3] = l))
        : (l = n[3]);
      var s;
      n[4] !== i
        ? ((s = { height: i, width: i }), (n[4] = i), (n[5] = s))
        : (s = n[5]);
      var d;
      return (
        n[6] !== t.children || n[7] !== l || n[8] !== s
          ? ((d = u.jsx("div", {
              className: l,
              style: s,
              children: t.children,
            })),
            (n[6] = t.children),
            (n[7] = l),
            (n[8] = s),
            (n[9] = d))
          : (d = n[9]),
        d
      );
    }
    l.default = d;
  },
  98,
);
