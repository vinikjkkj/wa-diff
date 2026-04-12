__d(
  "WAWebOutlineSmoothIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "outline-smooth";
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
                  d: "M12 6.8C13.3255 6.8 14.4 5.72548 14.4 4.4C14.4 3.07452 13.3255 2 12 2C10.6745 2 9.6 3.07452 9.6 4.4C9.6 5.72548 10.6745 6.8 12 6.8Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M2.4 18C3.72548 18 4.8 16.9255 4.8 15.6C4.8 14.2745 3.72548 13.2 2.4 13.2C1.07452 13.2 0 14.2745 0 15.6C0 16.9255 1.07452 18 2.4 18Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M24 15.6C24 16.9255 22.9255 18 21.6 18C20.2745 18 19.2 16.9255 19.2 15.6C19.2 14.2745 20.2745 13.2 21.6 13.2C22.9255 13.2 24 14.2745 24 15.6Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M8.45173 6.81238C8.84982 6.6207 9.01714 6.1426 8.82545 5.74452C8.63377 5.34644 8.15567 5.17912 7.75759 5.3708C6.96932 5.75036 6.23447 6.23171 5.56699 6.79818C5.23012 7.08406 5.18879 7.58891 5.47468 7.92578C5.76057 8.26264 6.26541 8.30397 6.60228 8.01808C7.16902 7.53711 7.78973 7.13114 8.45173 6.81238Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M16.2423 5.3708C15.8442 5.17912 15.3661 5.34644 15.1744 5.74452C14.9827 6.1426 15.15 6.6207 15.5481 6.81238C16.2101 7.13114 16.8308 7.53711 17.3976 8.01808C17.7344 8.30397 18.2393 8.26264 18.5252 7.92578C18.8111 7.58891 18.7697 7.08407 18.4329 6.79818C17.7654 6.23171 17.0305 5.75036 16.2423 5.3708Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M4.88232 9.95429C5.12771 9.58687 5.02879 9.09009 4.66137 8.8447C4.29395 8.59931 3.79717 8.69823 3.55178 9.06565C3.07649 9.77728 2.67721 10.5509 2.3661 11.3726C2.20967 11.7858 2.41782 12.2476 2.83102 12.404C3.24423 12.5605 3.70602 12.3523 3.86245 11.9391C4.13081 11.2303 4.47456 10.5648 4.88232 9.95429Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M20.4481 9.06565C20.2027 8.69823 19.7059 8.59931 19.3385 8.8447C18.9711 9.0901 18.8721 9.58687 19.1175 9.95429C19.5253 10.5648 19.869 11.2303 20.1374 11.9391C20.2938 12.3523 20.7556 12.5605 21.1688 12.404C21.582 12.2476 21.7902 11.7858 21.6337 11.3726C21.3226 10.5509 20.9234 9.77728 20.4481 9.06565Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.OutlineSmoothIcon = m));
  },
  98,
);
