__d(
  "WAWebWdsPictoWebsearchIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-websearch";
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
      var S = 88,
        R = 132;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p,
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "#E6FFDA",
                  stroke: "#111B21",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.5,
                  d: "M57.6 78.6a34.6 34.6 0 1 0 0-69.2 34.6 34.6 0 0 0 0 69.2Z",
                }),
                c.jsx("path", {
                  fill: "#E6FFDA",
                  stroke: "#111B21",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.5,
                  d: "M72.23 75.36c9.05-4.22 9.84-21.68 1.76-39S52.03 8.42 42.98 12.64c-9.05 4.22-9.84 21.68-1.76 39s21.96 27.94 31 23.72Z",
                }),
                c.jsx("path", {
                  fill: "#E6FFDA",
                  d: "m35.16 69.7 56.32-26.74ZM23.21 41.25l26.6-12.38 27.15-12.65",
                }),
                c.jsx("path", {
                  stroke: "#111B21",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.5,
                  d: "m35.16 69.7 56.32-26.74m-68.27-1.7 26.6-12.39 27.15-12.65",
                }),
                c.jsx("path", {
                  fill: "#E6FFDA",
                  stroke: "#111B21",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.5,
                  d: "M48.1 66.8a3.52 3.52 0 1 0 0-7.04 3.52 3.52 0 0 0 0 7.03Zm16.84-41.38a3.52 3.52 0 1 0 0-7.04 3.52 3.52 0 0 0 0 7.04Z",
                }),
                c.jsx("path", {
                  fill: "#25D366",
                  stroke: "#111B21",
                  strokeMiterlimit: 10,
                  strokeWidth: 1.5,
                  d: "M108.66 78.53 96.52 66.39l3.68-3.69 12.14 12.14c.47.48.72 1.08.72 1.85s-.25 1.37-.72 1.84-1.07.72-1.84.72a2.5 2.5 0 0 1-1.85-.72Z",
                }),
                c.jsx("path", {
                  fill: "#25D366",
                  fillRule: "evenodd",
                  d: "M106.13 51.56a20.56 20.56 0 1 1-41.13.02 20.56 20.56 0 0 1 41.13-.02ZM85.5 67a15.5 15.5 0 1 0 0-31 15.5 15.5 0 0 0 0 31Z",
                  clipRule: "evenodd",
                }),
                c.jsx("path", {
                  fill: "#111B21",
                  d: "M85.56 72.12v-.75h-.75v.75h.75Zm0 0v.76h.75v-.75h-.75Zm0 .75a21.31 21.31 0 0 0 21.32-21.31h-1.5a19.81 19.81 0 0 1-19.82 19.81v1.5Zm.75-.74h-1.5 1.5ZM64.25 51.56a21.31 21.31 0 0 0 21.31 21.32v-1.5a19.81 19.81 0 0 1-19.81-19.82h-1.5Zm21.31-21.31a21.32 21.32 0 0 0-21.31 21.31h1.5a19.82 19.82 0 0 1 19.81-19.81v-1.5Zm21.32 21.3a21.3 21.3 0 0 0-21.32-21.3v1.5a19.81 19.81 0 0 1 19.82 19.8h1.5Zm-6.63-.05c0 8.15-6.6 14.75-14.75 14.75v1.5c8.97 0 16.25-7.28 16.25-16.25h-1.5ZM85.5 36.75c8.15 0 14.75 6.6 14.75 14.75h1.5c0-8.97-7.27-16.25-16.25-16.25v1.5ZM70.75 51.5c0-8.15 6.6-14.75 14.75-14.75v-1.5A16.25 16.25 0 0 0 69.25 51.5h1.5ZM85.5 66.25c-8.15 0-14.75-6.6-14.75-14.75h-1.5c0 8.97 7.28 16.25 16.25 16.25v-1.5Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoWebsearchIcon = m));
  },
  98,
);
