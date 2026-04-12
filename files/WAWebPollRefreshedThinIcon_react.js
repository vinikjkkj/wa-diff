__d(
  "WAWebPollRefreshedThinIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "poll-refreshed-thin";
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
      var S = 20,
        R = 16;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 16 20",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M1 6C1 5.72222 1.09722 5.48611 1.29167 5.29167C1.48611 5.09722 1.72222 5 2 5L10 5C10.2778 5 10.5139 5.09722 10.7083 5.29167C10.9028 5.48611 11 5.72222 11 6C11 6.27778 10.9028 6.51389 10.7083 6.70833C10.5139 6.90278 10.2778 7 10 7L2 7C1.72222 7 1.48611 6.90278 1.29167 6.70833C1.09722 6.51389 1 6.27778 1 6ZM1 10C1 9.72222 1.09722 9.48611 1.29167 9.29167C1.48611 9.09722 1.72222 9 2 9L14 9C14.2778 9 14.5139 9.09722 14.7083 9.29167C14.9028 9.48611 15 9.72222 15 10C15 10.2778 14.9028 10.5139 14.7083 10.7083C14.5139 10.9028 14.2778 11 14 11L2 11C1.72222 11 1.48611 10.9028 1.29167 10.7083C1.09722 10.5139 1 10.2778 1 10ZM1 14C1 13.7222 1.09722 13.4861 1.29167 13.2917C1.48611 13.0972 1.72222 13 2 13L7 13C7.27778 13 7.51389 13.0972 7.70833 13.2917C7.90278 13.4861 8 13.7222 8 14C8 14.2778 7.90278 14.5139 7.70833 14.7083C7.51389 14.9028 7.27778 15 7 15L2 15C1.72222 15 1.48611 14.9028 1.29167 14.7083C1.09722 14.5139 1 14.2778 1 14Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PollRefreshedThinIcon = m));
  },
  98,
);
