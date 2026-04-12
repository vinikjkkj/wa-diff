__d(
  "WAWebWdsIcAiFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-ai-filled";
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
                  fill: "currentColor",
                  d: "M15.63 4.727a2.727 2.727 0 1 1-5.453.001 2.727 2.727 0 0 1 5.454 0Zm4.464 1.431c.358.112.63.407.712.774l1.169 5.22a1.051 1.051 0 0 1-1.34 1.234l-5.104-1.598a1.05 1.05 0 0 1-.397-1.777l3.935-3.623a1.05 1.05 0 0 1 1.025-.23M7.863 9c.364-.849 1.57-.849 1.935 0l1.392 3.242c.107.248.305.446.553.552l3.25 1.39c.85.363.85 1.566 0 1.93l-3.25 1.39a1.05 1.05 0 0 0-.553.551l-1.42 3.309c-.36.838-1.548.851-1.926.02l-1.527-3.35a1.05 1.05 0 0 0-.534-.526L2.63 16.123c-.843-.37-.837-1.565.009-1.927l3.28-1.402a1.05 1.05 0 0 0 .552-.552z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsIcAiFilledIcon = m));
  },
  98,
);
