__d(
  "WAWebMapPlaceholderIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "map-placeholder";
    function m(t) {
      var n = t.height,
        a = t.iconXstyle,
        i = t.name,
        l = t.viewBox,
        u = t.width,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p;
      if (l) {
        var _ = l.height,
          f = _ === void 0 ? 0 : _,
          g = l.width,
          h = g === void 0 ? 0 : g,
          y = l.x,
          C = y === void 0 ? 0 : y,
          b = l.y,
          v = b === void 0 ? 0 : b;
        p = [C, v, h, f].join(" ");
      }
      var S = 320,
        R = 580;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 580 320",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: "ic_tempmap" }),
                c.jsx("desc", { children: "Created with Sketch." }),
                c.jsx("defs", {}),
                c.jsxs("g", {
                  id: "ic_tempmap",
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: [
                    c.jsx("rect", {
                      id: "Rectangle-6",
                      fill: "#EAEAEA",
                      x: 0,
                      y: 112,
                      width: 358,
                      height: 208,
                    }),
                    c.jsx("path", {
                      d: "M12.5,541 C-148.598871,541 -281,449.869854 -281,334 C-281,218.130146 -148.598871,127 12.5,127 C173.598871,127 306,218.130146 306,334 C306,449.869854 173.598871,541 12.5,541 Z M12.5,509 C157.919165,509 274,429.102921 274,334 C274,238.897079 157.919165,159 12.5,159 C-132.919165,159 -249,238.897079 -249,334 C-249,429.102921 -132.919165,509 12.5,509 Z",
                      id: "Oval-3",
                      fill: "#FFF1B6",
                      fillRule: "nonzero",
                    }),
                    c.jsx("polygon", {
                      id: "Rectangle-6",
                      fill: "#CBE6A3",
                      points: "6.37225587e-14 0 358 0 358 80 6.37225587e-14 80",
                    }),
                    c.jsx("polygon", {
                      id: "Rectangle-6",
                      fill: "#8CCEFF",
                      points:
                        "390 -2.82320336e-13 580 -2.82320336e-13 580 80 390 80",
                    }),
                    c.jsx("rect", {
                      id: "Rectangle-6",
                      fill: "#F0E0C9",
                      x: 391,
                      y: 112,
                      width: 190,
                      height: 59,
                    }),
                    c.jsx("rect", {
                      id: "Rectangle-6",
                      fill: "#F0E0C9",
                      x: 391,
                      y: 203,
                      width: 110,
                      height: 117,
                    }),
                    c.jsx("rect", {
                      id: "Rectangle-6",
                      fill: "#F0E0C9",
                      x: 534,
                      y: 203,
                      width: 46,
                      height: 117,
                    }),
                    c.jsx("rect", {
                      id: "Rectangle",
                      fill: "#FFF1B6",
                      x: 0,
                      y: 80,
                      width: 580,
                      height: 32,
                    }),
                    c.jsx("rect", {
                      id: "Rectangle",
                      fill: "#FFF1B6",
                      x: 391,
                      y: 171,
                      width: 190,
                      height: 32,
                    }),
                    c.jsx("rect", {
                      id: "Rectangle",
                      fill: "#FFF1B6",
                      x: 358,
                      y: 0,
                      width: 33,
                      height: 320,
                    }),
                    c.jsx("rect", {
                      id: "Rectangle",
                      fill: "#FFF1B6",
                      x: 501,
                      y: 171,
                      width: 33,
                      height: 149,
                    }),
                  ],
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MapPlaceholderIcon = m));
  },
  98,
);
