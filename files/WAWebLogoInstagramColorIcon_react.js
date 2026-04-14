__d(
  "WAWebLogoInstagramColorIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "logo-instagram-color";
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
      var S = 22,
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 22",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M17.9287 0H8.07107C4.72349 0 2 2.72362 2 6.07121V15.9288C2 19.2765 4.72349 22 8.07107 22H17.9287C21.2765 22 24 19.2764 24 15.9288V6.07121C24.0001 2.72362 21.2765 0 17.9287 0ZM22.0482 15.9288C22.0482 18.2002 20.2002 20.0481 17.9288 20.0481H8.07107C5.79979 20.0482 3.95195 18.2002 3.95195 15.9288V6.07121C3.95195 3.79992 5.79979 1.95195 8.07107 1.95195H17.9287C20.2001 1.95195 22.0481 3.79992 22.0481 6.07121V15.9288H22.0482Z",
                  fill: "url(#paint0_linear)",
                }),
                c.jsx("path", {
                  d: "M12.9998 5.06152C9.72513 5.06152 7.06104 7.72561 7.06104 11.0003C7.06104 14.2749 9.72513 16.9388 12.9998 16.9388C16.2745 16.9388 18.9386 14.2749 18.9386 11.0003C18.9386 7.72561 16.2745 5.06152 12.9998 5.06152ZM12.9998 14.8938C10.8528 14.8938 9.10593 13.1472 9.10593 11.0002C9.10593 8.85303 10.8527 7.10628 12.9998 7.10628C15.147 7.10628 16.8937 8.85303 16.8937 11.0002C16.8937 13.1472 15.1468 14.8938 12.9998 14.8938Z",
                  fill: "url(#paint1_linear)",
                }),
                c.jsx("path", {
                  d: "M19.1871 3.32764C18.7931 3.32764 18.4061 3.48714 18.1278 3.76661C17.8482 4.04471 17.6875 4.43188 17.6875 4.82723C17.6875 5.22135 17.8484 5.60838 18.1278 5.88785C18.4059 6.16595 18.7931 6.32682 19.1871 6.32682C19.5824 6.32682 19.9682 6.16595 20.2477 5.88785C20.5272 5.60838 20.6867 5.22121 20.6867 4.82723C20.6867 4.43188 20.5272 4.04471 20.2477 3.76661C19.9696 3.48714 19.5824 3.32764 19.1871 3.32764Z",
                  fill: "url(#paint2_linear)",
                }),
                c.jsxs("defs", {
                  children: [
                    c.jsxs("linearGradient", {
                      id: "paint0_linear",
                      x1: 24,
                      y1: 0,
                      x2: 2,
                      y2: 22,
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        c.jsx("stop", { stopColor: "#B630A1" }),
                        c.jsx("stop", {
                          offset: 0.494792,
                          stopColor: "#DB2F76",
                        }),
                        c.jsx("stop", { offset: 1, stopColor: "#FBB15B" }),
                      ],
                    }),
                    c.jsxs("linearGradient", {
                      id: "paint1_linear",
                      x1: 21.9999,
                      y1: 1.5,
                      x2: 3.99988,
                      y2: 19.5,
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        c.jsx("stop", { stopColor: "#DA2E7A" }),
                        c.jsx("stop", { offset: 1, stopColor: "#F06846" }),
                      ],
                    }),
                    c.jsxs("linearGradient", {
                      id: "paint2_linear",
                      x1: 20.9998,
                      y1: 3,
                      x2: 17.4998,
                      y2: 6.5,
                      gradientUnits: "userSpaceOnUse",
                      children: [
                        c.jsx("stop", { stopColor: "#BE3099" }),
                        c.jsx("stop", { offset: 1, stopColor: "#E1406B" }),
                      ],
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
      (l.LogoInstagramColorIcon = m));
  },
  98,
);
