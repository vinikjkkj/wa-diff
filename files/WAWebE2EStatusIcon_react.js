__d(
  "WAWebE2EStatusIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "e2e-status";
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
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M20.3351 11.583C20.4874 15.1659 18.3165 18.5828 14.7619 19.8518C14.3677 19.9923 13.9702 20.102 13.5718 20.1813",
                  stroke: "#8696A0",
                  strokeWidth: 1.4,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                c.jsx("path", {
                  d: "M5.61426 6.39954C6.52735 5.35496 7.71219 4.52266 9.11157 4.02283C11.6343 3.12242 14.3025 3.50061 16.408 4.82167",
                  stroke: "#8696A0",
                  strokeWidth: 1.4,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                c.jsx("path", {
                  d: "M10.3036 20.1821C7.50086 19.624 5.05315 17.6498 4.02262 14.7625C3.35894 12.9029 3.3898 10.9646 3.98122 9.23047",
                  stroke: "#8696A0",
                  strokeWidth: 1.4,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                c.jsx("path", {
                  d: "M17.2768 11.9373C17.2768 14.8864 14.886 17.2769 11.937 17.2769C8.98793 17.2769 6.59717 14.8864 6.59717 11.9373C6.59717 8.98828 8.98793 6.59778 11.937 6.59778C12.9754 6.59778 13.9446 6.89418 14.7646 7.40699",
                  stroke: "#8696A0",
                  strokeWidth: 1.4,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.E2EStatusIcon = m));
  },
  98,
);
