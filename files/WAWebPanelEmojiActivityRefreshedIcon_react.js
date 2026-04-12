__d(
  "WAWebPanelEmojiActivityRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "panel-emoji-activity-refreshed";
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
                  d: "M4.05 11H6.9a5.84 5.84 0 0 0-1.65-3.25q-.45.725-.763 1.537A7.7 7.7 0 0 0 4.05 11m13.05 0h2.85q-.125-.9-.437-1.713a9 9 0 0 0-.763-1.537A5.84 5.84 0 0 0 17.1 11M5.25 16.25A5.84 5.84 0 0 0 6.9 13H4.05q.125.9.438 1.713.312.812.762 1.537m13.5 0q.45-.725.762-1.537A7.7 7.7 0 0 0 19.95 13H17.1a5.84 5.84 0 0 0 1.65 3.25M8.95 11H11V4.05a8.8 8.8 0 0 0-2.463.737A7.5 7.5 0 0 0 6.5 6.2a8.6 8.6 0 0 1 1.613 2.163Q8.75 9.575 8.95 11M13 11h2.05q.2-1.426.837-2.637A8.6 8.6 0 0 1 17.5 6.2a7.5 7.5 0 0 0-2.037-1.413A8.8 8.8 0 0 0 13 4.05zm-2 8.95V13H8.95a8 8 0 0 1-.837 2.637A8.6 8.6 0 0 1 6.5 17.8q.9.875 2.037 1.412 1.138.539 2.463.738m2 0a8.8 8.8 0 0 0 2.463-.738A7.5 7.5 0 0 0 17.5 17.8a8.6 8.6 0 0 1-1.613-2.163A8 8 0 0 1 15.05 13H13zM12 22a9.7 9.7 0 0 1-3.9-.788 10.1 10.1 0 0 1-3.175-2.137q-1.35-1.35-2.137-3.175A9.7 9.7 0 0 1 2 12q0-2.075.788-3.9a10.1 10.1 0 0 1 2.137-3.175q1.35-1.35 3.175-2.137A9.7 9.7 0 0 1 12 2q2.075 0 3.9.788a10.1 10.1 0 0 1 3.175 2.137q1.35 1.35 2.137 3.175A9.7 9.7 0 0 1 22 12a9.7 9.7 0 0 1-.788 3.9 10.1 10.1 0 0 1-2.137 3.175q-1.35 1.35-3.175 2.137A9.7 9.7 0 0 1 12 22",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PanelEmojiActivityRefreshedIcon = m));
  },
  98,
);
