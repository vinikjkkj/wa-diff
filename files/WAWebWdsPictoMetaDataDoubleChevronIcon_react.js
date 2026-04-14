__d(
  "WAWebWdsPictoMetaDataDoubleChevronIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-meta-data-double-chevron";
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
      var S = 70,
        R = 70;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 70 70",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M19.8366 43.656L28.5011 34.983L19.8498 26.3365C18.5433 25.03 18.5433 22.9195 19.8498 21.613C21.1563 20.3065 23.2668 20.3065 24.5733 21.613L35.6031 32.638C36.9096 33.9445 36.9096 36.055 35.6031 37.3615L24.5601 48.413C23.2536 49.7195 21.1431 49.7195 19.8366 48.413C18.5636 47.1065 18.5301 44.9625 19.8366 43.656Z",
                  fill: "#25D366",
                }),
                c.jsx("path", {
                  d: "M45.2512 34.983L36.5867 43.656C35.2802 44.9625 35.3137 47.1065 36.5867 48.413C37.8932 49.7195 40.0037 49.7195 41.3102 48.413L52.3532 37.3615C53.6597 36.055 53.6597 33.9445 52.3532 32.638L41.3234 21.613C40.0169 20.3065 37.9064 20.3065 36.5999 21.613C35.2934 22.9195 35.2934 25.03 36.5999 26.3365L45.2512 34.983Z",
                  fill: "#25D366",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M68.5 35C68.5 16.508 53.492 1.5 35 1.5C16.508 1.5 1.5 16.508 1.5 35C1.5 53.492 16.508 68.5 35 68.5C53.492 68.5 68.5 53.492 68.5 35ZM8.2 35C8.2 20.193 20.193 8.2 35 8.2C49.807 8.2 61.8 20.193 61.8 35C61.8 49.807 49.807 61.8 35 61.8C20.193 61.8 8.2 49.807 8.2 35Z",
                  fill: "#25D366",
                }),
                c.jsx("path", {
                  d: "M19.8366 43.656L28.5011 34.983L19.8498 26.3365C18.5433 25.03 18.5433 22.9195 19.8498 21.613C21.1563 20.3065 23.2668 20.3065 24.5733 21.613L35.6031 32.638C36.9096 33.9445 36.9096 36.055 35.6031 37.3615L24.5601 48.413C23.2536 49.7195 21.1431 49.7195 19.8366 48.413C18.5636 47.1065 18.5301 44.9625 19.8366 43.656Z",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                }),
                c.jsx("path", {
                  d: "M45.2512 34.983L36.5867 43.656C35.2802 44.9625 35.3137 47.1065 36.5867 48.413C37.8932 49.7195 40.0037 49.7195 41.3102 48.413L52.3532 37.3615C53.6597 36.055 53.6597 33.9445 52.3532 32.638L41.3234 21.613C40.0169 20.3065 37.9064 20.3065 36.5999 21.613C35.2934 22.9195 35.2934 25.03 36.5999 26.3365L45.2512 34.983Z",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M68.5 35C68.5 16.508 53.492 1.5 35 1.5C16.508 1.5 1.5 16.508 1.5 35C1.5 53.492 16.508 68.5 35 68.5C53.492 68.5 68.5 53.492 68.5 35ZM8.2 35C8.2 20.193 20.193 8.2 35 8.2C49.807 8.2 61.8 20.193 61.8 35C61.8 49.807 49.807 61.8 35 61.8C20.193 61.8 8.2 49.807 8.2 35Z",
                  stroke: "#111B21",
                  strokeWidth: 1.5,
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoMetaDataDoubleChevronIcon = m));
  },
  98,
);
