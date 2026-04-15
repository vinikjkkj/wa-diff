__d(
  "WAWebTextUtils.react",
  ["react", "react-compiler-runtime", "stylex"],
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
      var n = o("react-compiler-runtime").c(7),
        a = t.align,
        i = t.bold,
        l = t.children,
        s = t.italic,
        d;
      e: switch (a) {
        case "center": {
          d = c.alignCenter;
          break e;
        }
        case "end": {
          d = c.alignEnd;
          break e;
        }
        case "start":
          d = c.alignStart;
      }
      var m = i === !0 && c.bold,
        p = s === !0 && c.italic,
        _;
      if (n[0] !== d || n[1] !== m || n[2] !== p) {
        var f = [c.container, m, p, d];
        ((_ = (e || (e = r("stylex"))).props(f)),
          (n[0] = d),
          (n[1] = m),
          (n[2] = p),
          (n[3] = _));
      } else _ = n[3];
      var g;
      return (
        n[4] !== l || n[5] !== _
          ? ((g = u.jsx("span", babelHelpers.extends({}, _, { children: l }))),
            (n[4] = l),
            (n[5] = _),
            (n[6] = g))
          : (g = n[6]),
        g
      );
    }
    function m(e) {
      var t = o("react-compiler-runtime").c(2),
        n = e.children,
        r;
      return (
        t[0] !== n
          ? ((r = u.jsx(d, { bold: !0, children: n })), (t[0] = n), (t[1] = r))
          : (r = t[1]),
        r
      );
    }
    function p(e) {
      var t = o("react-compiler-runtime").c(3),
        n = e.align,
        r = e.children,
        a;
      return (
        t[0] !== n || t[1] !== r
          ? ((a = u.jsx(d, { align: n, children: r })),
            (t[0] = n),
            (t[1] = r),
            (t[2] = a))
          : (a = t[2]),
        a
      );
    }
    ((l.Bold = m), (l.TextAlign = p));
  },
  98,
);
