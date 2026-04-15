__d(
  "WAWebRoundShape.react",
  ["react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        iconRefreshed: {
          display: "x78zum5",
          alignItems: "x6s0dn4",
          justifyContent: "xl56j7k",
          width: "x100vrsf",
          height: "x1vqgdyp",
          color: "x1pse0pq",
          background: "xe5due1",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          $$css: !0,
        },
        disabled: { backgroundColor: "x1ailiqk", $$css: !0 },
        transparent: {
          color: "xhslqc4",
          backgroundColor: "x1jbjsai",
          $$css: !0,
        },
        compact: { width: "x100vrsf", height: "x1vqgdyp", $$css: !0 },
        groupModal: { width: "x15jighw", height: "x112a4uq", $$css: !0 },
      };
    function d(t) {
      var n = o("react-compiler-runtime").c(8),
        a = t.children,
        i = t.disabled,
        l = t.theme,
        s = t.transparent,
        d = t.xstyle,
        m;
      n[0] !== i || n[1] !== l || n[2] !== s || n[3] !== d
        ? ((m = (e || (e = r("stylex"))).props(
            c.iconRefreshed,
            (s === !0 && c.transparent) ||
              (l === "compact" && c.compact) ||
              (l === "group-modal" && c.groupModal),
            i === !0 && c.disabled,
            d,
          )),
          (n[0] = i),
          (n[1] = l),
          (n[2] = s),
          (n[3] = d),
          (n[4] = m))
        : (m = n[4]);
      var p;
      return (
        n[5] !== a || n[6] !== m
          ? ((p = u.jsx("div", babelHelpers.extends({}, m, { children: a }))),
            (n[5] = a),
            (n[6] = m),
            (n[7] = p))
          : (p = n[7]),
        p
      );
    }
    l.default = d;
  },
  98,
);
