__d(
  "WAWebLabelOffRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "label-off-refreshed";
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
                  d: "M18.4502 15.6L17.0002 14.15L18.5502 12L15.0002 6.99998H9.8502L7.8502 4.99998H15.0002C15.3335 4.99998 15.6419 5.07081 15.9252 5.21248C16.2085 5.35414 16.4502 5.56664 16.6502 5.84998L20.1752 10.85C20.4252 11.2 20.5502 11.5833 20.5502 12C20.5502 12.4166 20.4252 12.8 20.1752 13.15L18.4502 15.6ZM5.0002 19C4.4502 19 3.97936 18.8041 3.5877 18.4125C3.19603 18.0208 3.0002 17.55 3.0002 17V6.99998C3.0002 6.81664 3.02103 6.64998 3.0627 6.49998C3.10436 6.34998 3.16686 6.19998 3.2502 6.04998L2.1002 4.89998C1.91686 4.71664 1.8252 4.48331 1.8252 4.19998C1.8252 3.91664 1.91686 3.68331 2.1002 3.49998C2.28353 3.31664 2.51686 3.22498 2.8002 3.22498C3.08353 3.22498 3.31686 3.31664 3.5002 3.49998L20.5002 20.5C20.6835 20.6833 20.7752 20.9166 20.7752 21.2C20.7752 21.4833 20.6835 21.7166 20.5002 21.9C20.3169 22.0833 20.0835 22.175 19.8002 22.175C19.5169 22.175 19.2835 22.0833 19.1002 21.9L15.9502 18.75C15.8002 18.8333 15.6502 18.8958 15.5002 18.9375C15.3502 18.9791 15.1835 19 15.0002 19H5.0002ZM14.2002 17L5.0002 7.79998V17H14.2002Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.LabelOffRefreshedIcon = m));
  },
  98,
);
