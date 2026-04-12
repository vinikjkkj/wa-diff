__d(
  "WAWebTextUtils.react",
  ["react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e,
      s,
      u = s || (s = o("react")),
      c = {
        container: { display: "x1rg5ohu", $$css: !0 },
        bold: { fontWeight: "x117nqv4", $$css: !0 },
        italic: { fontStyle: "x1k4tb9n", $$css: !0 },
        alignCenter: { textAlign: "x2b8uid", $$css: !0 },
        alignEnd: { textAlign: "xp4054r", $$css: !0 },
        alignStart: { textAlign: "x1yc453h", $$css: !0 },
      };
    function d(t) {
      var n = t.align,
        o = t.bold,
        a = t.children,
        i = t.italic,
        l;
      switch (n) {
        case "center":
          l = c.alignCenter;
          break;
        case "end":
          l = c.alignEnd;
          break;
        case "start":
          l = c.alignStart;
          break;
      }
      var s = [c.container, o === !0 && c.bold, i === !0 && c.italic, l];
      return u.jsx(
        "span",
        babelHelpers.extends({}, (e || (e = r("stylex"))).props(s), {
          children: a,
        }),
      );
    }
    d.displayName = d.name + " [from " + i.id + "]";
    function m(e) {
      var t = e.children;
      return u.jsx(d, { bold: !0, children: t });
    }
    m.displayName = m.name + " [from " + i.id + "]";
    function p(e) {
      var t = e.align,
        n = e.children;
      return u.jsx(d, { align: t, children: n });
    }
    ((p.displayName = p.name + " [from " + i.id + "]"),
      (l.Bold = m),
      (l.TextAlign = p));
  },
  98,
);
