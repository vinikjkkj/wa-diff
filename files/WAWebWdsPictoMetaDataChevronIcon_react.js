__d(
  "WAWebWdsPictoMetaDataChevronIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-meta-data-chevron";
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
        R = 88;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 88 88",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M46.9317 43.9827L38.2672 52.6558C36.9607 53.9623 36.9942 56.1063 38.2672 57.4128C39.5737 58.7192 41.6842 58.7192 42.9907 57.4128L54.0337 46.3612C55.3402 45.0547 55.3402 42.9442 54.0337 41.6377L43.0039 30.6128C41.6974 29.3063 39.5869 29.3063 38.2804 30.6128C36.9739 31.9193 36.9739 34.0298 38.2804 35.3363L46.9317 43.9827Z",
                  fill: "#25D366",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M44 10.5C62.492 10.5 77.5 25.508 77.5 44C77.5 62.492 62.492 77.5 44 77.5C25.508 77.5 10.5 62.492 10.5 44C10.5 25.508 25.508 10.5 44 10.5ZM44 17.2C29.193 17.2 17.2 29.193 17.2 44C17.2 58.807 29.193 70.8 44 70.8C58.807 70.8 70.8 58.807 70.8 44C70.8 29.193 58.807 17.2 44 17.2Z",
                  fill: "#25D366",
                }),
                c.jsx("path", {
                  d: "M46.9317 43.9827L38.2672 52.6558C36.9607 53.9623 36.9942 56.1063 38.2672 57.4128C39.5737 58.7192 41.6842 58.7192 42.9907 57.4128L54.0337 46.3612C55.3402 45.0547 55.3402 42.9442 54.0337 41.6377L43.0039 30.6128C41.6974 29.3063 39.5869 29.3063 38.2804 30.6128C36.9739 31.9193 36.9739 34.0298 38.2804 35.3363L46.9317 43.9827Z",
                  stroke: "#111B21",
                  strokeWidth: 1.46591,
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M44 10.5C62.492 10.5 77.5 25.508 77.5 44C77.5 62.492 62.492 77.5 44 77.5C25.508 77.5 10.5 62.492 10.5 44C10.5 25.508 25.508 10.5 44 10.5ZM44 17.2C29.193 17.2 17.2 29.193 17.2 44C17.2 58.807 29.193 70.8 44 70.8C58.807 70.8 70.8 58.807 70.8 44C70.8 29.193 58.807 17.2 44 17.2Z",
                  stroke: "#111B21",
                  strokeWidth: 1.46591,
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoMetaDataChevronIcon = m));
  },
  98,
);
