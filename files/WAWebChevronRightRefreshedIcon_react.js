__d(
  "WAWebChevronRightRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "chevron-right-refreshed";
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
                  d: "M12.6 12.0003L8.69999 8.10033C8.51666 7.91703 8.42499 7.68363 8.42499 7.40033C8.42499 7.11703 8.51666 6.88363 8.69999 6.70033C8.88332 6.51703 9.11666 6.42533 9.39999 6.42533C9.68332 6.42533 9.91666 6.51703 10.1 6.70033L14.7 11.3003C14.9 11.5003 15 11.7336 15 12.0003C15 12.267 14.9 12.5003 14.7 12.7003L10.1 17.3003C9.91666 17.4837 9.68332 17.5753 9.39999 17.5753C9.11666 17.5753 8.88332 17.4837 8.69999 17.3003C8.51666 17.117 8.42499 16.8837 8.42499 16.6003C8.42499 16.317 8.51666 16.0837 8.69999 15.9003L12.6 12.0003Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ChevronRightRefreshedIcon = m));
  },
  98,
);
