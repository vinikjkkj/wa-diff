__d(
  "WAWebListIcon.react",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = 12,
      d = {
        circle: {
          display: "x1rg5ohu",
          borderStartStartRadius: "x1c9tyrk",
          borderStartEndRadius: "xeusxvb",
          borderEndEndRadius: "x1pahc9y",
          borderEndStartRadius: "x1ertn4p",
          flexShrink: "x2lah0s",
          $$css: !0,
        },
        defaultColor: { backgroundColor: "x1518k6t", $$css: !0 },
      };
    function m(t) {
      var n = t.color,
        o = t.size,
        a = o === void 0 ? c : o,
        i = t.xstyle,
        l = n != null;
      return u.jsx(
        "span",
        babelHelpers.extends(
          { "data-testid": void 0 },
          (e || (e = r("stylex"))).props(d.circle, !l && d.defaultColor, i),
          {
            style: babelHelpers.extends({}, l ? { backgroundColor: n } : {}, {
              width: a,
              height: a,
            }),
          },
        ),
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
