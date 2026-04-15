__d(
  "WDSIconWdsIcWhatsapp.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-whatsapp";
    function m(t) {
      var n = t.height,
        o = t.iconXstyle,
        a = t.viewBox,
        i = t.width,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u;
      if (a) {
        var m = a.height,
          p = m === void 0 ? 0 : m,
          _ = a.width,
          f = _ === void 0 ? 0 : _,
          g = a.x,
          h = g === void 0 ? 0 : g,
          y = a.y,
          C = y === void 0 ? 0 : y;
        u = [h, C, f, p].join(" ");
      }
      var b = 24,
        v = 24;
      return (
        (n != null || i != null) && ((b = n), (v = i)),
        c.jsx(
          r("WDSSvgComponentBase.react"),
          babelHelpers.extends({}, l, {
            children: c.jsxs("svg", {
              viewBox: u != null ? u : "0 0 24 24",
              height: b,
              width: v,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(o),
              fill: "currentColor",
              children: [
                c.jsx("title", { children: d }),
                c.jsxs("g", {
                  clipPath: "url(#clip0_3675_385)",
                  children: [
                    c.jsx("path", {
                      d: "M12.01 1.70996C6.36023 1.70996 1.78003 6.29016 1.78003 11.94C1.78003 13.7988 2.27581 15.5417 3.14232 17.0438L1.78003 22.17L7.09451 20.9136C8.55324 21.7143 10.2283 22.17 12.01 22.17C17.6598 22.17 22.24 17.5898 22.24 11.94C22.24 6.29016 17.6598 1.70996 12.01 1.70996ZM12.01 20.3377C10.3003 20.3377 8.70991 19.8265 7.38323 18.949L4.24338 19.7487L5.1241 16.7477C4.17139 15.3858 3.61234 13.7281 3.61234 11.94C3.61234 7.30198 7.37205 3.54227 12.01 3.54227C16.648 3.54227 20.4077 7.30198 20.4077 11.94C20.4077 16.5779 16.648 20.3377 12.01 20.3377Z",
                      fill: "currentColor",
                      style: {
                        fill: "#0A1014",
                        fill: "color(display-p3 0.0392 0.0627 0.0784)",
                        fillOpacity: 1,
                      },
                    }),
                    c.jsx("path", {
                      d: "M14.4068 13.2903L16.8819 14.4573C16.9955 14.5109 17.0683 14.6261 17.058 14.7513C17.0311 15.077 16.9006 15.7298 16.3154 16.3148C14.6636 17.9666 11.6979 16.0979 11.5774 16.0255C10.848 15.6337 10.1547 15.1094 9.49769 14.4522C8.8407 13.7952 8.31612 13.1018 7.92435 12.3725C7.85198 12.252 5.9833 9.28602 7.63507 7.63445C8.22026 7.04925 8.8729 6.91873 9.19856 6.89183C9.32378 6.8816 9.43896 6.95434 9.49257 7.06801L10.6596 9.5431C10.7149 9.66018 10.6906 9.79942 10.5989 9.89092L9.729 10.7608C9.54088 10.949 9.48556 11.2418 9.61514 11.4743C9.93246 12.0436 10.3593 12.5916 10.8539 13.0959C11.3582 13.5904 11.9065 14.0174 12.4756 14.3347C12.708 14.4643 13.0009 14.4092 13.189 14.2209L14.0589 13.3509C14.1504 13.2594 14.2897 13.2352 14.4068 13.2903Z",
                      fill: "currentColor",
                      style: {
                        fill: "#0A1014",
                        fill: "color(display-p3 0.0392 0.0627 0.0784)",
                        fillOpacity: 1,
                      },
                    }),
                  ],
                }),
                c.jsx("defs", {
                  children: c.jsx("clipPath", {
                    id: "clip0_3675_385",
                    children: c.jsx("rect", {
                      width: 20.46,
                      height: 20.46,
                      fill: "white",
                      style: { fill: "white", fillOpacity: 1 },
                      transform: "translate(1.78003 1.70996)",
                    }),
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
