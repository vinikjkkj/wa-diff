__d(
  "WAWebWdsIllPhoneTextDownloadIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ill-phone-text-download";
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
      var S = 153,
        R = 229;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p,
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsxs("g", {
                  clipPath: "url(#a)",
                  children: [
                    c.jsx("path", {
                      fill: "#25D366",
                      stroke: "#111B21",
                      strokeMiterlimit: 10,
                      strokeWidth: 1.5,
                      d: "M208.06 20.62a18 18 0 0 0-18-18H132.1v149.47h57.97a18 18 0 0 0 18-18V20.63h-.01Z",
                    }),
                    c.jsx("path", {
                      fill: "#111B21",
                      d: "M142.3 16.38a2.21 2.21 0 1 0 0-4.43 2.21 2.21 0 0 0 0 4.43Z",
                    }),
                    c.jsx("path", {
                      fill: "#25D366",
                      stroke: "#111B21",
                      strokeMiterlimit: 10,
                      strokeWidth: 1.5,
                      d: "M198.04 20.62a18 18 0 0 0-18-18h-56.97a18 18 0 0 0-18 18v113.47a18.01 18.01 0 0 0 18 18h56.97a17.99 17.99 0 0 0 18-18V20.63Z",
                    }),
                    c.jsx("path", {
                      stroke: "#111B21",
                      strokeLinecap: "round",
                      strokeWidth: 1.5,
                      d: "M145.23 13.38h12.66",
                    }),
                    c.jsx("path", {
                      stroke: "#111B21",
                      strokeWidth: 1.5,
                      d: "M151.56 139.5a7.42 7.42 0 1 0 0-14.84 7.42 7.42 0 0 0 0 14.84Z",
                    }),
                    c.jsx("path", {
                      fill: "#E6FFDA",
                      stroke: "#111B21",
                      strokeLinejoin: "round",
                      strokeMiterlimit: 10,
                      strokeWidth: 1.5,
                      d: "M74.15 11.78c30.28-.98 55.43 17.75 56.17 41.84a36.03 36.03 0 0 1-3.7 16.95l8.99 14.22c1.27 2-.2 4.81-2.4 4.83l-22.73-1.05c-9.15 6.18-20.83 10.06-33.65 10.48-30.28.98-55.43-17.77-56.17-41.86-.74-24.1 23.2-44.43 53.49-45.41Z",
                    }),
                    c.jsx("path", {
                      fill: "#25D366",
                      stroke: "#111B21",
                      strokeWidth: 1.5,
                      d: "M89.2 41.04c1.31 0 2.5.97 2.51 2.34v13.45c0 .4.38.84 1 .84h7.73c1.17 0 2.06.7 2.39 1.6.32.92.04 2-.92 2.63L89.05 71.93l-9.96 8.35a4.5 4.5 0 0 1-5.71.06L50.42 61.9a2.22 2.22 0 0 1-.92-2.63 2.46 2.46 0 0 1 2.39-1.6h7.14c.63 0 1.01-.45 1.01-.84V43.38c0-1.37 1.2-2.34 2.5-2.34H89.2Zm0-12.58c1.31 0 2.51.98 2.51 2.34v2.97c0 1.36-1.2 2.33-2.5 2.33H62.54c-1.31 0-2.5-.97-2.5-2.33V30.8c0-1.36 1.19-2.34 2.5-2.34H89.2Z",
                    }),
                  ],
                }),
                c.jsx("defs", {
                  children: c.jsx("clipPath", {
                    id: "a",
                    children: c.jsx("path", {
                      fill: "#fff",
                      d: "M.5.86h228v152H.5z",
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
      (l.WdsIllPhoneTextDownloadIcon = m));
  },
  98,
);
