__d(
  "WDSIconIcPlayArrow.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-play-arrow";
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
                c.jsx("mask", {
                  id: "mask0_39062_27",
                  style: { maskType: "alpha" },
                  maskUnits: "userSpaceOnUse",
                  x: 0,
                  y: 0,
                  width: 24,
                  height: 24,
                  children: c.jsx("rect", {
                    width: 24,
                    height: 24,
                    fill: "#D9D9D9",
                  }),
                }),
                c.jsx("g", {
                  mask: "url(#mask0_39062_27)",
                  children: c.jsx("path", {
                    d: "M8 17.175V6.825C8 6.54166 8.1 6.30416 8.3 6.1125C8.5 5.92083 8.73333 5.825 9 5.825C9.08333 5.825 9.17083 5.8375 9.2625 5.8625C9.35417 5.8875 9.44167 5.925 9.525 5.975L17.675 11.15C17.825 11.25 17.9375 11.375 18.0125 11.525C18.0875 11.675 18.125 11.8333 18.125 12C18.125 12.1667 18.0875 12.325 18.0125 12.475C17.9375 12.625 17.825 12.75 17.675 12.85L9.525 18.025C9.44167 18.075 9.35417 18.1125 9.2625 18.1375C9.17083 18.1625 9.08333 18.175 9 18.175C8.73333 18.175 8.5 18.0792 8.3 17.8875C8.1 17.6958 8 17.4583 8 17.175ZM10 15.35L15.25 12L10 8.65V15.35Z",
                    fill: "currentColor",
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
