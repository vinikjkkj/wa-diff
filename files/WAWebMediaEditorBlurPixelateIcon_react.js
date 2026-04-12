__d(
  "WAWebMediaEditorBlurPixelateIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "media-editor-blur-pixelate";
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
                c.jsx("rect", {
                  x: 4.5,
                  y: 4.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 4.5,
                  y: 10.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 4.5,
                  y: 16.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 7.5,
                  y: 7.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 7.5,
                  y: 13.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 13.5,
                  y: 7.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 13.5,
                  y: 13.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 10.5,
                  y: 4.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 10.5,
                  y: 10.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 10.5,
                  y: 16.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 16.5,
                  y: 4.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 16.5,
                  y: 10.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
                c.jsx("rect", {
                  x: 16.5,
                  y: 16.5,
                  width: 3,
                  height: 3,
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MediaEditorBlurPixelateIcon = m));
  },
  98,
);
