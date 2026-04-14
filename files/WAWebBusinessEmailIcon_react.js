__d(
  "WAWebBusinessEmailIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "business-email";
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
                c.jsx("title", { children: "business-email" }),
                c.jsx("desc", { children: "Created with Sketch." }),
                c.jsx("defs", {}),
                c.jsxs("g", {
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: [
                    c.jsx("path", {
                      d: "M20.9169216,8.25409863 L12.2871787,13.5717219 L3.65743574,8.25409863 L3.65743574,6.12704932 L12.2871787,11.4446726 L20.9169216,6.12704932 L20.9169216,8.25409863 Z M20.9169216,4 L3.65743574,4 C2.47084608,4 1.51078718,4.95717219 1.51078718,6.12704932 L1.5,18.8893452 C1.5,20.0592223 2.47084608,21.0163945 3.65743574,21.0163945 L20.9169216,21.0163945 C22.1035113,21.0163945 23.0743574,20.0592223 23.0743574,18.8893452 L23.0743574,6.12704932 C23.0743574,4.95717219 22.1035113,4 20.9169216,4 L20.9169216,4 Z",
                      fill: "currentColor",
                    }),
                    c.jsx("g", {
                      id: "slices",
                      transform: "translate(0.000000, -480.000000)",
                    }),
                  ],
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.BusinessEmailIcon = m));
  },
  98,
);
