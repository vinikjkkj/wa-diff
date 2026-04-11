__d(
  "WDSIconIcShieldVerifiedFilled.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-shield-verified-filled";
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
                  id: "a",
                  width: 24,
                  height: 24,
                  x: 0,
                  y: 0,
                  maskUnits: "userSpaceOnUse",
                  style: { maskType: "alpha" },
                  children: c.jsx("path", {
                    fill: "#d9d9d9",
                    d: "M0 0h24v24H0z",
                  }),
                }),
                c.jsx("g", {
                  mask: "url(#a)",
                  children: c.jsx("path", {
                    fill: "currentColor",
                    d: "m10.95 12.7-1.4-1.4a.96.96 0 0 0-1.4 0q-.3.3-.3.71 0 .42.3.72l2.1 2.12a.96.96 0 0 0 1.4 0l4.25-4.25q.3-.3.3-.71 0-.42-.3-.71a1 1 0 0 0-.71-.3q-.41 0-.71.3zM12 21.9a2 2 0 0 1-.62-.1A10 10 0 0 1 6 17.64Q4 14.6 4 11.1V6.38q0-.63.36-1.13t.94-.72l6-2.25a2 2 0 0 1 1.4 0l6 2.25q.57.22.94.72.36.49.36 1.13v4.72q0 3.5-2 6.54a10 10 0 0 1-5.68 4.24z",
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
