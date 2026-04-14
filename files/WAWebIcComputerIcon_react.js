__d(
  "WAWebIcComputerIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-computer";
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
                c.jsx("path", {
                  d: "M2 21C1.71667 21 1.47917 20.9042 1.2875 20.7125C1.09583 20.5208 1 20.2833 1 20C1 19.7167 1.09583 19.4792 1.2875 19.2875C1.47917 19.0958 1.71667 19 2 19H22C22.2833 19 22.5208 19.0958 22.7125 19.2875C22.9042 19.4792 23 19.7167 23 20C23 20.2833 22.9042 20.5208 22.7125 20.7125C22.5208 20.9042 22.2833 21 22 21H2ZM4 18C3.45 18 2.97917 17.8042 2.5875 17.4125C2.19583 17.0208 2 16.55 2 16V5C2 4.45 2.19583 3.97917 2.5875 3.5875C2.97917 3.19583 3.45 3 4 3H20C20.55 3 21.0208 3.19583 21.4125 3.5875C21.8042 3.97917 22 4.45 22 5V16C22 16.55 21.8042 17.0208 21.4125 17.4125C21.0208 17.8042 20.55 18 20 18H4ZM4 16H20V5H4V16Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.IcComputerIcon = m));
  },
  98,
);
