__d(
  "WAWebIcChatlistClockIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-chatlist-clock";
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
                  d: "M8.75 6.5C8.75 6.08579 8.41421 5.75 8 5.75C7.58579 5.75 7.25 6.08579 7.25 6.5V9.79289C7.25 10.1244 7.3817 10.4424 7.61612 10.6768L9.76069 12.8213C10.0536 13.1142 10.5285 13.1142 10.8213 12.8213C11.1142 12.5285 11.1142 12.0536 10.8213 11.7607L8.75 9.68934V6.5Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M15 10C15 13.866 11.866 17 8 17C4.13401 17 1 13.866 1 10C1 6.13401 4.13401 3 8 3C11.866 3 15 6.13401 15 10ZM13.5 10C13.5 13.0376 11.0376 15.5 8 15.5C4.96243 15.5 2.5 13.0376 2.5 10C2.5 6.96243 4.96243 4.5 8 4.5C11.0376 4.5 13.5 6.96243 13.5 10Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.IcChatlistClockIcon = m));
  },
  98,
);
