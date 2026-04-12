__d(
  "WAWebPendingParticipantsIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "pending-participants";
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
                  d: "M11.4042 19.8325C11.4042 19.8325 10.3333 18.2415 10.3333 16.1913C10.3333 14.141 11.0406 13.1828 11.0406 13.1828C11.0406 13.1828 10.7067 13.1828 10.3333 13.1828C7.21833 13.1828 1 14.6679 1 17.6159V19.3325C1 19.6086 1.22386 19.8325 1.5 19.8325H11.4042ZM10.3333 10.9663C12.9117 10.9663 15 8.98248 15 6.53319C15 4.08391 12.9117 2.1001 10.3333 2.1001C7.755 2.1001 5.66667 4.08391 5.66667 6.53319C5.66667 8.98248 7.755 10.9663 10.3333 10.9663Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M18.2998 10.8999C15.2638 10.8999 12.7998 13.3639 12.7998 16.3999C12.7998 19.4359 15.2638 21.8999 18.2998 21.8999C21.3358 21.8999 23.7998 19.4359 23.7998 16.3999C23.7998 13.3639 21.3358 10.8999 18.2998 10.8999ZM20.1148 18.9849L17.7498 16.6199V13.0999H18.8498V16.1689L20.8848 18.2039L20.1148 18.9849Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.PendingParticipantsIcon = m));
  },
  98,
);
