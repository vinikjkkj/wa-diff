__d(
  "WAWebPreviewAudioIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "preview-audio";
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
      var S = 112,
        R = 88;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 88 112",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("defs", {
                  children: c.jsx("path", {
                    d: "M3 0h56.928a5 5 0 0 1 3.536 1.464l15.072 15.072A5 5 0 0 1 80 20.07V101a3 3 0 0 1-3 3H3a3 3 0 0 1-3-3V3a3 3 0 0 1 3-3z",
                    id: "a",
                  }),
                }),
                c.jsxs("g", {
                  fill: "none",
                  fillRule: "evenodd",
                  children: [
                    c.jsxs("g", {
                      transform: "translate(4 3)",
                      children: [
                        c.jsx("use", {
                          fill: "#000",
                          filter: "url(#filter-3)",
                          xlinkHref: "#a",
                        }),
                        c.jsx("use", { fill: "#FFF", xlinkHref: "#a" }),
                        c.jsx("path", {
                          strokeOpacity: 0.08,
                          stroke: "#000",
                          d: "M3-.5h56.929a5.5 5.5 0 0 1 3.889 1.61l15.071 15.072a5.5 5.5 0 0 1 1.611 3.89V101a3.5 3.5 0 0 1-3.5 3.5H3A3.5 3.5 0 0 1-.5 101V3A3.5 3.5 0 0 1 3-.5z",
                          fill: "url(#linearGradient-1)",
                        }),
                      ],
                    }),
                    c.jsx("path", {
                      d: "M59 41v26.246a.501.501 0 0 1-.014.119A5 5 0 1 1 54 62.745c.19 0 .398.022.62.065A2 2 0 0 0 57 60.847V49.113a1 1 0 0 0-1.12-.993l-19 2.28a1 1 0 0 0-.88.993v18.853a.501.501 0 0 1-.014.119A5 5 0 1 1 31 65.745c.316 0 .676.06 1.08.178a1.5 1.5 0 0 0 1.92-1.44V43.52a2 2 0 0 1 1.762-1.986l21-2.52A2 2 0 0 1 59 41z",
                      fillOpacity: 0.2,
                      fill: "#000",
                    }),
                    c.jsx("path", {
                      d: "M65.5 3.5v15a3 3 0 0 0 3 3h15",
                      strokeOpacity: 0.12,
                      stroke: "#000",
                      fill: "#FFF",
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
      (l.PreviewAudioIcon = m));
  },
  98,
);
