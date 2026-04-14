__d(
  "WAWebRoundShape.react",
  ["react", "stylex"],
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
      var n = t.children,
        o = t.disabled,
        a = t.theme,
        i = t.transparent,
        l = t.xstyle;
      return u.jsx(
        "div",
        babelHelpers.extends(
          {},
          (e || (e = r("stylex"))).props(
            c.iconRefreshed,
            (i === !0 && c.transparent) ||
              (a === "compact" && c.compact) ||
              (a === "group-modal" && c.groupModal),
            o === !0 && c.disabled,
            l,
          ),
          { children: n },
        ),
      );
    }
    ((d.displayName = d.name + " [from " + i.id + "]"), (l.default = d));
  },
  98,
);
