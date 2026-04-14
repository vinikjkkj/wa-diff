__d(
  "WAWebAlertUpdateIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "alert-update";
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
      var S = 48,
        R = 48;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 48 48",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              x: "0px",
              y: "0px",
              enableBackground: "new 0 0 48 48",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M24.154,2C11.919,2,2,11.924,2,24.165S11.919,46.33,24.154,46.33 s22.154-9.924,22.154-22.165S36.389,2,24.154,2z M31.701,23.037h-6.738l3.08-3.08c-1.059-1.059-2.406-1.733-4.043-1.733 c-3.176,0-5.775,2.599-5.775,5.775c0,3.177,2.599,5.776,5.775,5.776c2.503,0,4.62-1.637,5.391-3.85h2.021 c-0.866,3.273-3.85,5.776-7.412,5.776c-4.235,0-7.701-3.465-7.701-7.701c0-4.235,3.465-7.701,7.701-7.701 c2.118,0,4.043,0.866,5.391,2.31l2.31-2.31C31.701,16.299,31.701,23.037,31.701,23.037z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.AlertUpdateIcon = m));
  },
  98,
);
