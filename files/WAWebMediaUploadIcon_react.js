__d(
  "WAWebMediaUploadIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "media-upload";
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
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M5,10.1023258 L9.3,10.1023258 L9.3,16.6023258 C9.3,17.1023258 9.7,17.5023258 10.2,17.5023258 L14.5,17.5023258 C15,17.5023258 15.4,17.1023258 15.4,16.6023258 L15.4,10.1023258 L19.7,10.1023258 C20.5,10.1023258 20.7,9.60232575 20.2,9.00232575 L13.3,1.80232575 C12.6,0.902325754 12,1.10232575 11.3,1.80232575 L4.6,9.00232575 C4,9.60232575 4.2,10.1023258 5,10.1023258 Z M20.1,20.0023258 L4.5,20.0023258 C4.2,20.0023258 4,20.2023258 4,20.5023258 L4,21.5023258 C4,21.8023258 4.2,22.0023258 4.5,22.0023258 L20.1,22.0023258 C20.4,22.0023258 20.6,21.8023258 20.6,21.5023258 L20.6,20.5023258 C20.6,20.3023258 20.4,20.0023258 20.1,20.0023258 Z",
                  fill: "currentColor",
                  fillRule: "nonzero",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MediaUploadIcon = m));
  },
  98,
);
