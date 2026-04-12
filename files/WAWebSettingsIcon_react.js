__d(
  "WAWebSettingsIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "settings";
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
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M19.261 12C19.261 12.34 19.2309 12.66 19.1908 12.98L21.3047 14.63C21.4951 14.78 21.5452 15.05 21.425 15.27L19.4213 18.73C19.301 18.95 19.0406 19.04 18.8101 18.95L16.3155 17.95C15.7946 18.34 15.2335 18.68 14.6224 18.93L14.2417 21.58C14.2117 21.82 14.0013 22 13.7508 22H9.74342C9.49296 22 9.28257 21.82 9.25252 21.58L8.87181 18.93C8.26069 18.68 7.69965 18.35 7.17869 17.95L4.68409 18.95C4.46368 19.03 4.19319 18.95 4.07296 18.73L2.06927 15.27C2.01044 15.1663 1.99024 15.0452 2.01224 14.9281C2.03424 14.811 2.09702 14.7054 2.18949 14.63L4.30339 12.98C4.25974 12.6551 4.23632 12.3278 4.23326 12C4.23326 11.67 4.26331 11.34 4.30339 11.02L2.18949 9.37C2.09494 9.29613 2.03059 9.19042 2.00846 9.07263C1.98633 8.95484 2.00795 8.83304 2.06927 8.73L4.07296 5.27C4.19319 5.05 4.45367 4.96 4.68409 5.05L7.17869 6.05C7.69965 5.66 8.26069 5.32 8.87181 5.07L9.25252 2.42C9.28257 2.18 9.49296 2 9.74342 2H13.7508C14.0013 2 14.2117 2.18 14.2417 2.42L14.6224 5.07C15.2335 5.32 15.7946 5.65 16.3155 6.05L18.8101 5.05C19.0305 4.97 19.301 5.05 19.4213 5.27L21.425 8.73C21.5452 8.95 21.4951 9.22 21.3047 9.37L19.1908 11.02C19.2309 11.34 19.261 11.66 19.261 12ZM8.24065 12C8.24065 13.93 9.81355 15.5 11.7471 15.5C13.6807 15.5 15.2536 13.93 15.2536 12C15.2536 10.07 13.6807 8.5 11.7471 8.5C9.81355 8.5 8.24065 10.07 8.24065 12Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.SettingsIcon = m));
  },
  98,
);
