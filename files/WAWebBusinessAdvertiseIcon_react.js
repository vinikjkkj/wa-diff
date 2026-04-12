__d(
  "WAWebBusinessAdvertiseIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "business-advertise";
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
                c.jsxs("g", {
                  clipPath: "url(#clip0_49_15713)",
                  children: [
                    c.jsx("path", {
                      d: "M18.9999 11C18.4476 11 18 11.4477 18 12C18 12.5523 18.4476 13 18.9999 13C19.6495 13 20.342 13 21.0001 13C21.5523 13 22 12.5523 22 12C22 11.4477 21.5523 11 21.0001 11C20.342 11 19.6495 11 18.9999 11Z",
                      fill: "currentColor",
                    }),
                    c.jsx("path", {
                      d: "M16.6011 16.8072C16.2704 17.2516 16.3632 17.8787 16.8073 18.2099C17.326 18.5966 17.8786 19.0107 18.4032 19.4036C18.8437 19.7336 19.4676 19.6446 19.7972 19.2037C20.129 18.7599 20.0392 18.1303 19.5958 17.7979C19.0715 17.4049 18.5194 16.9903 18.0014 16.6014C17.5596 16.2697 16.931 16.364 16.6011 16.8072Z",
                      fill: "currentColor",
                    }),
                    c.jsx("path", {
                      d: "M19.6005 6.20285C20.0429 5.87049 20.1305 5.24205 19.7992 4.79887C19.4685 4.35657 18.8426 4.2672 18.4007 4.59844C17.8751 4.99242 17.3215 5.40811 16.8021 5.79802C16.3595 6.13031 16.2704 6.75915 16.6018 7.20242C16.9318 7.6438 17.5567 7.73263 17.998 7.4026C18.5185 7.01339 19.0735 6.59866 19.6005 6.20285Z",
                      fill: "currentColor",
                    }),
                    c.jsx("path", {
                      d: "M4 9C2.9 9 2 9.9 2 11V13C2 14.1 2.9 15 4 15H5V19C5 19.5523 5.44772 20 6 20C6.55228 20 7 19.5523 7 19V15H8L13 18V6L8 9H4Z",
                      fill: "currentColor",
                    }),
                    c.jsx("path", {
                      d: "M15.5 11.9999C15.5 10.6699 14.92 9.4699 14 8.6499V15.3399C14.92 14.5299 15.5 13.3299 15.5 11.9999Z",
                      fill: "currentColor",
                    }),
                  ],
                }),
                c.jsx("defs", {
                  children: c.jsx("clipPath", {
                    id: "clip0_49_15713",
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
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.BusinessAdvertiseIcon = m));
  },
  98,
);
