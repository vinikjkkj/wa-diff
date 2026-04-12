__d(
  "WAWebWebLoginDesktopUpsellIllustrationIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "web-login-desktop-upsell-illustration";
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
      var S = 54,
        R = 72;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 72 54",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsxs("g", {
                  clipPath: "url(#clip0_913_5240)",
                  children: [
                    c.jsx("path", {
                      fill: "#fff",
                      style: { fill: "#fff" },
                      d: "M0 0h72v54H0z",
                    }),
                    c.jsx("path", {
                      d: "M8.75 15A6.25 6.25 0 0 1 15 8.75h42A6.25 6.25 0 0 1 63.25 15v37.25H8.75z",
                      fill: "#E6FFDA",
                      stroke: "#111B21",
                      strokeWidth: 1.5,
                      strokeMiterlimit: 10,
                    }),
                    c.jsx("path", {
                      d: "M71.22 44.75a9.25 9.25 0 0 1-9.22 8.5H10a9.25 9.25 0 0 1-9.22-8.5z",
                      fill: "#E6FFDA",
                      stroke: "#111B21",
                      strokeWidth: 1.5,
                      strokeMiterlimit: 10,
                    }),
                    c.jsx("rect", {
                      x: 21.75,
                      y: 0.75,
                      width: 49.5,
                      height: 34.5,
                      rx: 6.25,
                      fill: "#FCF5EB",
                      stroke: "#111B21",
                      strokeWidth: 1.5,
                      strokeMiterlimit: 10,
                    }),
                    c.jsx("path", {
                      d: "M43.39 14.955c-.654-1.334 2.328-2.92 2.505-3.648l-.007-.01c.041-.16 0-.318-.047-.476a10.55 10.55 0 0 0-2.25-4.09c-.26-.286-.549-.572-.92-.683-.245-.069-.507-.055-.755-.014-2.124.335-3.598 2.363-3.86 4.438-.263 2.076.445 4.166 1.3 6.11 1.838 4.176 4.592 8.235 8.728 10.376 1.474.766 3.176 1.266 4.786.942 1.083-.218 2.183-1.007 2.128-2.08-.03-.51-.31-.976-.582-1.42-.616-.986-1.226-1.973-1.842-2.955-.31-.497-.68-1.038-1.266-1.156-1.215-.241-2.036 1.545-3.265 1.383-.483-.065-4.256-5.806-4.653-6.717",
                      fill: "#25D366",
                      stroke: "#111B21",
                      strokeWidth: 1.5,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                    }),
                  ],
                }),
                c.jsx("defs", {
                  children: c.jsx("clipPath", {
                    id: "clip0_913_5240",
                    children: c.jsx("path", {
                      fill: "#fff",
                      style: { fill: "#fff" },
                      d: "M0 0h72v54H0z",
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
      (l.WebLoginDesktopUpsellIllustrationIcon = m));
  },
  98,
);
