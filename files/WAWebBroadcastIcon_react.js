__d(
  "WAWebBroadcastIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "broadcast";
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
      var S = 15,
        R = 16;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 16 15",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              x: "0px",
              y: "0px",
              enableBackground: "new 0 0 16 15",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M10.5,3L3.1,5.4C2.8,5.5,2.5,5.9,2.5,6.3v1.9c0,0.4,0.3,0.8,0.7,0.9L4,9.4c0,0.1,0,0.3,0,0.4 c0,1.5,1.2,2.9,2.9,2.9c1.1,0,2-0.6,2.5-1.4l1.3,0.5c0.2,0,0.5-0.2,0.5-0.6V3.5C11,3.1,10.8,2.9,10.5,3z M6.6,11.5 c-1,0-1.7-0.8-1.7-1.7l0,0l3.2,1.1C7.7,11.2,7.2,11.5,6.6,11.5z M12.7,2.7h-0.3C12.1,2.7,12,2.9,12,3v8.6c0,0.2,0.2,0.4,0.4,0.4 h0.3c0.2,0,0.4-0.2,0.4-0.4V3C13.2,2.9,12.9,2.7,12.7,2.7z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.BroadcastIcon = m));
  },
  98,
);
