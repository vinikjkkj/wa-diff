__d(
  "WAWebCollectionsFolderIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "collections-folder";
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
      var S = 40,
        R = 40;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 56 56",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsxs("g", {
                  clipPath: "url(#clip0)",
                  children: [
                    c.jsx("path", {
                      d: "M4.48047 16.8052C4.48047 14.3302 6.4869 12.3237 8.96195 12.3237H44.8138C47.2889 12.3237 49.2953 14.3302 49.2953 16.8052V44.8145C49.2953 47.2895 47.2889 49.296 44.8138 49.296H8.96195C6.48689 49.296 4.48047 47.2895 4.48047 44.8145V16.8052Z",
                      fill: "currentColor",
                    }),
                    c.jsx("path", {
                      d: "M8.96094 8.96244C8.96094 6.48738 10.9674 4.48096 13.4424 4.48096H40.3313C42.8064 4.48096 44.8128 6.48738 44.8128 8.96244V8.96244H8.96094V8.96244Z",
                      fill: "currentColor",
                    }),
                  ],
                }),
                c.jsx("defs", {
                  children: c.jsx("clipPath", {
                    id: "clip0",
                    children: c.jsx("rect", {
                      width: 44.8148,
                      height: 44.8148,
                      fill: "white",
                      transform: "translate(4.48047 4.4812)",
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
      (l.CollectionsFolderIcon = m));
  },
  98,
);
