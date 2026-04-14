__d(
  "WAWebWdsSmbPaymentsPixFilledIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-smb-payments-pix-filled";
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
              viewBox: p,
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsxs("g", {
                  fill: "currentColor",
                  clipPath: "url(#a)",
                  children: [
                    c.jsx("path", {
                      d: "M2.1 9.17a4 4 0 0 0 0 5.66l1.28 1.28h4.3a.6.6 0 0 0 .41-.17l2.33-2.32a2.12 2.12 0 0 1 2.99 0l2.33 2.33a.6.6 0 0 0 .42.17h4.45l1.29-1.3a4 4 0 0 0 0-5.65L20.62 7.9h-4.29a.6.6 0 0 0-.42.17l-2.32 2.32a2.12 2.12 0 0 1-2.99 0L8.27 8.05a.6.6 0 0 0-.42-.17H3.39L2.1 9.18Z",
                    }),
                    c.jsx("path", {
                      d: "M18.6 18.12h-2.45a2.6 2.6 0 0 1-1.83-.76L12 15.03a.12.12 0 0 0-.16 0L9.5 17.36a2.6 2.6 0 0 1-1.83.75h-2.3l3.8 3.79a4 4 0 0 0 5.65 0l3.78-3.78ZM14.83 2.1l3.79 3.79h-2.3a2.6 2.6 0 0 0-1.82.76l-2.32 2.32a.12.12 0 0 1-.17 0L9.68 6.64a2.6 2.6 0 0 0-1.83-.76H5.4L9.17 2.1a4 4 0 0 1 5.66 0Z",
                    }),
                  ],
                }),
                c.jsx("defs", {
                  children: c.jsx("clipPath", {
                    id: "a",
                    children: c.jsx("path", { d: "M0 0h24v24H0z" }),
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsSmbPaymentsPixFilledIcon = m));
  },
  98,
);
