__d(
  "WAWebFilterActiveIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "filter-active";
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
                  d: "M22 5C22 6.65685 20.6569 8 19 8C17.3431 8 16 6.65685 16 5C16 3.34315 17.3431 2 19 2C20.6569 2 22 3.34315 22 5Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M14.1 6H4C3.71667 6 3.47917 6.09583 3.2875 6.2875C3.09583 6.47917 3 6.71667 3 7C3 7.28333 3.09583 7.52083 3.2875 7.7125C3.47917 7.90417 3.71667 8 4 8H14.9996C14.5629 7.41859 14.25 6.73888 14.1 6ZM20.9693 7.26325C20.4423 7.72213 19.7536 8 19 8C17.6938 8 16.5825 7.16519 16.1707 6H20C20.2833 6 20.5208 6.09583 20.7125 6.2875C20.9042 6.47917 21 6.71667 21 7C21 7.09265 20.9897 7.1804 20.9693 7.26325ZM10.2875 17.7125C10.4792 17.9042 10.7167 18 11 18H13C13.2833 18 13.5208 17.9042 13.7125 17.7125C13.9042 17.5208 14 17.2833 14 17C14 16.7167 13.9042 16.4792 13.7125 16.2875C13.5208 16.0958 13.2833 16 13 16H11C10.7167 16 10.4792 16.0958 10.2875 16.2875C10.0958 16.4792 10 16.7167 10 17C10 17.2833 10.0958 17.5208 10.2875 17.7125ZM6.2875 12.7125C6.47917 12.9042 6.71667 13 7 13H17C17.2833 13 17.5208 12.9042 17.7125 12.7125C17.9042 12.5208 18 12.2833 18 12C18 11.7167 17.9042 11.4792 17.7125 11.2875C17.5208 11.0958 17.2833 11 17 11H7C6.71667 11 6.47917 11.0958 6.2875 11.2875C6.09583 11.4792 6 11.7167 6 12C6 12.2833 6.09583 12.5208 6.2875 12.7125Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.FilterActiveIcon = m));
  },
  98,
);
