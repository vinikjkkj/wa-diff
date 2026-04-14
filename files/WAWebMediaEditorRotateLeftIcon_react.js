__d(
  "WAWebMediaEditorRotateLeftIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "media-editor-rotate-left";
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
                  d: "M6.3542 8.1443C6.3542 7.7438 6.03051 7.4185 5.63045 7.4185L5.01611 7.41915C5.03258 5.57318 5.47035 4.24139 6.34295 3.36586C7.23254 2.4733 8.59469 2.03425 10.4907 2.03425H10.6135C10.9457 2.03425 11.2144 1.76409 11.2144 1.43161V0.815805C11.2144 0.415302 10.8908 0.090004 10.4907 0.090004C8.0866 0.090004 6.22855 0.730549 4.97198 1.99134C3.73442 3.23304 3.09655 5.05999 3.07758 7.41919L2.11375 7.4185C1.94433 7.4185 1.78034 7.4781 1.65028 7.58684C1.34333 7.84348 1.30195 8.30096 1.55763 8.60881L3.31599 10.7259C3.344 10.7596 3.37501 10.7907 3.40863 10.8189C3.71579 11.0757 4.17235 11.034 4.42821 10.7259L6.18656 8.60881C6.29491 8.47836 6.3542 8.31399 6.3542 8.1443Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M9.35864 8.89517V17.2464C9.35864 18.6072 10.4633 19.71 11.8256 19.71H20.143C21.5053 19.71 22.61 18.6072 22.61 17.2464V8.89517C22.61 7.53441 21.5053 6.43158 20.143 6.43158H11.8256C10.4633 6.43158 9.35864 7.53442 9.35864 8.89517ZM11.8256 17.764C11.5391 17.764 11.3071 17.5321 11.3071 17.2464V8.89517C11.3071 8.60945 11.5391 8.37755 11.8256 8.37755H20.143C20.4295 8.37755 20.6615 8.60945 20.6615 8.89517V17.2464C20.6615 17.5321 20.4295 17.764 20.143 17.764H11.8256Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MediaEditorRotateLeftIcon = m));
  },
  98,
);
