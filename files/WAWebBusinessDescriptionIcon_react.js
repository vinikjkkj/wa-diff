__d(
  "WAWebBusinessDescriptionIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "business-description";
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
      var S = 24,
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 24",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: "business-description" }),
                c.jsx("desc", { children: "Created with Sketch." }),
                c.jsx("defs", {}),
                c.jsxs("g", {
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: [
                    c.jsx("path", {
                      d: "M3.55479575,5.11130106 L20.4434947,5.11130106 L20.4434947,3 L3.55479575,3 L3.55479575,5.11130106 Z M3.55479575,6.16780637 L2.5,11.4469138 L2.5,13.5582149 L3.55479575,13.5582149 L3.55479575,19.8904085 L14.1095915,19.8904085 L14.1095915,13.5582149 L18.3339032,13.5582149 L18.3339032,19.8904085 L20.4452042,19.8904085 L20.4452042,13.5582149 L21.5,13.5582149 L21.5,11.4469138 L20.4452042,6.16780637 L3.55479575,6.16780637 Z M5.66609681,17.780817 L11.9982904,17.780817 L11.9982904,13.5582149 L5.66609681,13.5582149 L5.66609681,17.780817 Z",
                      id: "Page-1-Copy",
                      fill: "currentColor",
                    }),
                    c.jsx("g", {
                      id: "slices",
                      transform: "translate(0.000000, -198.000000)",
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
      (l.BusinessDescriptionIcon = m));
  },
  98,
);
