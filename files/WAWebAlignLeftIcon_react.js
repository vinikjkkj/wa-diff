__d(
  "WAWebAlignLeftIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "align-left";
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
      var S = 28,
        R = 28;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 28 28",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M14.5,19 C14.7761424,19 15,19.2238576 15,19.5 L15,20 C15,20.2761424 14.7761424,20.5 14.5,20.5 L5.5,20.5 C5.22385763,20.5 5,20.2761424 5,20 L5,19.5 C5,19.2238576 5.22385763,19 5.5,19 L14.5,19 Z M22.5,15 C22.7761424,15 23,15.2238576 23,15.5 L23,16 C23,16.2761424 22.7761424,16.5 22.5,16.5 L5.5,16.5 C5.22385763,16.5 5,16.2761424 5,16 L5,15.5 C5,15.2238576 5.22385763,15 5.5,15 L22.5,15 Z M20.5,11 C20.7761424,11 21,11.2238576 21,11.5 L21,12 C21,12.2761424 20.7761424,12.5 20.5,12.5 L5.5,12.5 C5.22385763,12.5 5,12.2761424 5,12 L5,11.5 C5,11.2238576 5.22385763,11 5.5,11 L20.5,11 Z M22.5,7 C22.7761424,7 23,7.22385763 23,7.5 L23,8 C23,8.27614237 22.7761424,8.5 22.5,8.5 L5.5,8.5 C5.22385763,8.5 5,8.27614237 5,8 L5,7.5 C5,7.22385763 5.22385763,7 5.5,7 L22.5,7 Z",
                  id: "Combined-Shape",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.AlignLeftIcon = m));
  },
  98,
);
