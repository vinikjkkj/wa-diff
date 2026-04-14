__d(
  "WAWebReceiptIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "receipt";
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
                c.jsx("g", {
                  clipPath: "url(#clip0_49_15767)",
                  children: c.jsx("path", {
                    d: "M19.5 3.5L18 2L16.5 3.5L15 2L13.5 3.5L12 2L10.5 3.5L9 2L7.5 3.5L6 2L4.5 3.5L3 2V22L4.5 20.5L6 22L7.5 20.5L9 22L10.5 20.5L12 22L13.5 20.5L15 22L16.5 20.5L18 22L19.5 20.5L21 22V2L19.5 3.5ZM19 19.09H5V4.91H19V19.09ZM6 16C6 15.4477 6.44772 15 7 15H17C17.5523 15 18 15.4477 18 16C18 16.5523 17.5523 17 17 17H7C6.44772 17 6 16.5523 6 16ZM6 12C6 11.4477 6.44772 11 7 11H17C17.5523 11 18 11.4477 18 12C18 12.5523 17.5523 13 17 13H7C6.44772 13 6 12.5523 6 12ZM6 8C6 7.44772 6.44772 7 7 7H17C17.5523 7 18 7.44772 18 8C18 8.55228 17.5523 9 17 9H7C6.44772 9 6 8.55228 6 8Z",
                    fill: "currentColor",
                  }),
                }),
                c.jsx("defs", {
                  children: c.jsx("clipPath", {
                    id: "clip0_49_15767",
                    children: c.jsx("rect", {
                      width: 24,
                      height: 24,
                      fill: "white",
                    }),
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.ReceiptIcon = m));
  },
  98,
);
