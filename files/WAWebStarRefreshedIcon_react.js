__d(
  "WAWebStarRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "star-refreshed";
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
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M12.0001 5.5563L10.4474 9.20853C10.2737 9.61713 9.88857 9.89642 9.44622 9.9346L5.45091 10.2794L8.46629 12.8783C8.80433 13.1697 8.95276 13.6246 8.85162 14.0593L7.95108 17.9296L11.3829 15.8715C11.7628 15.6437 12.2373 15.6437 12.6172 15.8715L16.049 17.9296L15.1485 14.0593C15.0474 13.6246 15.1958 13.1697 15.5338 12.8783L18.5492 10.2794L14.5539 9.9346C14.1115 9.89642 13.7264 9.61713 13.5527 9.20853L12.0001 5.5563ZM10.8957 3.04204C11.3098 2.06802 12.6903 2.06802 13.1044 3.04204L15.2051 7.98336L20.6131 8.45006C21.6713 8.54138 22.0979 9.86115 21.2933 10.5546L17.2061 14.0773L18.4246 19.3142C18.6647 20.3462 17.5473 21.1602 16.6387 20.6153L12.0001 17.8335L7.36144 20.6153C6.4528 21.1602 5.33537 20.3462 5.57548 19.3142L6.79399 14.0773L2.70679 10.5546C1.90226 9.86116 2.32885 8.54138 3.38705 8.45006L8.79502 7.98336L10.8957 3.04204Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.StarRefreshedIcon = m));
  },
  98,
);
