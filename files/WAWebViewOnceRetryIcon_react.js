__d(
  "WAWebViewOnceRetryIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "view-once-retry";
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
                  d: "M8.39015 10.6507H9.75301V14.9364C9.75301 15.4079 10.1387 15.7936 10.6102 15.7936H14.0387C14.5102 15.7936 14.8959 15.4079 14.8959 14.9364V10.6507H16.2587C17.0216 10.6507 17.4073 9.725 16.8673 9.185L12.933 5.25071C12.5987 4.91643 12.0587 4.91643 11.7244 5.25071L7.79015 9.185C7.25015 9.725 7.62729 10.6507 8.39015 10.6507ZM6.33301 18.365C6.33301 18.8364 6.71872 19.2221 7.19015 19.2221H17.4759C17.9473 19.2221 18.333 18.8364 18.333 18.365C18.333 17.8936 17.9473 17.5079 17.4759 17.5079H7.19015C6.71872 17.5079 6.33301 17.8936 6.33301 18.365Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ViewOnceRetryIcon = m));
  },
  98,
);
