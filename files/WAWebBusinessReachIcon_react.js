__d(
  "WAWebBusinessReachIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "business-reach";
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
      var S = 16,
        R = 20;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 20 16",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M7.83317 7.99992L6.49984 12.4999L5.1665 7.99992L0.666504 6.66658L5.1665 5.33325L6.49984 0.833252L7.83317 5.33325L12.3332 6.66658L7.83317 7.99992ZM13.1665 11.8333L16.4998 9.99992L14.6665 13.3333L16.4998 16.6666L13.1665 14.8333L9.83317 16.6666L11.6665 13.3333L9.83317 9.99992L13.1665 11.8333ZM7.33317 13.3333L5.9165 15.8333L7.33317 18.3333L4.83317 16.9166L2.33317 18.3333L3.74984 15.8333L2.33317 13.3333L4.83317 14.7499L7.33317 13.3333Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.BusinessReachIcon = m));
  },
  98,
);
