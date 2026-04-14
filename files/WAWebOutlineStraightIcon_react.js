__d(
  "WAWebOutlineStraightIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "outline-straight";
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
                  d: "M14.4 4.4C14.4 5.72548 13.3255 6.8 12 6.8C10.6745 6.8 9.6 5.72548 9.6 4.4C9.6 3.07452 10.6745 2 12 2C13.3255 2 14.4 3.07452 14.4 4.4Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M15.1215 6.81258C14.8339 6.47712 14.3289 6.43827 13.9934 6.72581C13.658 7.01335 13.6191 7.51839 13.9067 7.85385L15.2781 9.45385C15.5656 9.78931 16.0707 9.82816 16.4061 9.54062C16.7416 9.25308 16.7804 8.74804 16.4929 8.41258L15.1215 6.81258Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M10.0929 7.85385C10.3804 7.51839 10.3416 7.01335 10.0061 6.72581C9.67068 6.43828 9.16564 6.47712 8.8781 6.81258L7.50667 8.41258C7.21913 8.74805 7.25798 9.25309 7.59344 9.54062C7.9289 9.82816 8.43394 9.78931 8.72148 9.45385L10.0929 7.85385Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M18.3215 10.5459C18.0339 10.2105 17.5289 10.1716 17.1934 10.4591C16.858 10.7467 16.8191 11.2517 17.1067 11.5872L18.4781 13.1872C18.7656 13.5226 19.2707 13.5615 19.6061 13.274C19.9416 12.9864 19.9804 12.4814 19.6929 12.1459L18.3215 10.5459Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M6.89291 11.5872C7.18045 11.2517 7.1416 10.7467 6.80614 10.4591C6.47068 10.1716 5.96564 10.2105 5.6781 10.5459L4.30667 12.1459C4.01913 12.4814 4.05798 12.9864 4.39344 13.274C4.7289 13.5615 5.23394 13.5226 5.52148 13.1872L6.89291 11.5872Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M2.4 18C3.72548 18 4.8 16.9255 4.8 15.6C4.8 14.2745 3.72548 13.2 2.4 13.2C1.07452 13.2 0 14.2745 0 15.6C0 16.9255 1.07452 18 2.4 18Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M21.6 18C22.9255 18 24 16.9255 24 15.6C24 14.2745 22.9255 13.2 21.6 13.2C20.2745 13.2 19.2 14.2745 19.2 15.6C19.2 16.9255 20.2745 18 21.6 18Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.OutlineStraightIcon = m));
  },
  98,
);
