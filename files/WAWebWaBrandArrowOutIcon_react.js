__d(
  "WAWebWaBrandArrowOutIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wa-brand-arrow-out";
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
      var S = 16,
        R = 16;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 16 16",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("g", {
                  clipPath: "url(#a)",
                  children: c.jsx("path", {
                    fillRule: "evenodd",
                    clipRule: "evenodd",
                    d: "M4.764 3.447a.75.75 0 0 0-.006 1.5l5.713.023-6.276 6.275a.75.75 0 1 0 1.06 1.06l6.277-6.275.022 5.713a.75.75 0 0 0 1.5-.006l-.03-7.487a.75.75 0 0 0-.78-.774z",
                    fill: "currentColor",
                  }),
                }),
                c.jsx("defs", {
                  children: c.jsx("clipPath", {
                    id: "a",
                    children: c.jsx("path", {
                      fill: "#fff",
                      d: "M.5 0h16v16H.5z",
                    }),
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WaBrandArrowOutIcon = m));
  },
  98,
);
