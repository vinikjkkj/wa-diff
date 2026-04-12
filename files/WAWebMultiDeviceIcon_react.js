__d(
  "WAWebMultiDeviceIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "multi-device";
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
        R = 22;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 22 16",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M3.66667 2.49984H20.1667V0.666504H3.66667C2.65833 0.666504 1.83333 1.4915 1.83333 2.49984V12.5832H0V15.3332H12.8333V12.5832H3.66667V2.49984ZM21.0833 4.33317H15.5833C15.0792 4.33317 14.6667 4.74567 14.6667 5.24984V14.4165C14.6667 14.9207 15.0792 15.3332 15.5833 15.3332H21.0833C21.5875 15.3332 22 14.9207 22 14.4165V5.24984C22 4.74567 21.5875 4.33317 21.0833 4.33317ZM20.1667 12.5832H16.5V6.1665H20.1667V12.5832Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MultiDeviceIcon = m));
  },
  98,
);
