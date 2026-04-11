__d(
  "BaseGridCell.react",
  ["BaseGridFocusTable.react", "react", "react-compiler-runtime", "stylex"],
  function (t, n, r, o, a, i, l) {
    "use strict";
    var e = [
        "aria-selected",
        "children",
        "data-type",
        "ref",
        "testid",
        "xstyle",
      ],
      s,
      u,
      c = u || (u = o("react")),
      d = {
        focusRing: {
          boxShadow: "x59fq91",
          outline: "x1a2a7pz x1uvtmcs x1i4ix8p",
          $$css: !0,
        },
      };
    function m(t) {
      var n = o("react-compiler-runtime").c(18),
        a,
        i,
        l,
        u,
        m,
        p,
        _;
      n[0] !== t
        ? ((i = t["aria-selected"]),
          (l = t.children),
          (u = t["data-type"]),
          (m = t.ref),
          (p = t.testid),
          (_ = t.xstyle),
          (a = babelHelpers.objectWithoutPropertiesLoose(t, e)),
          (n[0] = t),
          (n[1] = a),
          (n[2] = i),
          (n[3] = l),
          (n[4] = u),
          (n[5] = m),
          (n[6] = p),
          (n[7] = _))
        : ((a = n[1]),
          (i = n[2]),
          (l = n[3]),
          (u = n[4]),
          (m = n[5]),
          (p = n[6]),
          (_ = n[7]));
      var f;
      n[8] !== _
        ? ((f = (s || (s = r("stylex"))).props(_, d.focusRing)),
          (n[8] = _),
          (n[9] = f))
        : (f = n[9]);
      var g;
      return (
        n[10] !== a ||
        n[11] !== i ||
        n[12] !== l ||
        n[13] !== u ||
        n[14] !== m ||
        n[15] !== f ||
        n[16] !== p
          ? ((g = c.jsx(o("BaseGridFocusTable.react").BaseGridFocusCell, {
              children: c.jsx(
                "div",
                babelHelpers.extends(
                  {},
                  a,
                  {
                    "aria-selected": i,
                    "data-testid": void 0,
                    "data-type": u,
                    ref: m,
                    role: "gridcell",
                  },
                  f,
                  { tabIndex: 0, children: l },
                ),
              ),
            })),
            (n[10] = a),
            (n[11] = i),
            (n[12] = l),
            (n[13] = u),
            (n[14] = m),
            (n[15] = f),
            (n[16] = p),
            (n[17] = g))
          : (g = n[17]),
        g
      );
    }
    l.default = m;
  },
  98,
);
