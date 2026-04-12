__d(
  "WAWebReplyRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "reply-refreshed";
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
                  d: "M6.8249 12L9.7249 14.9C9.9249 15.1 10.0207 15.3334 10.0124 15.6C10.0041 15.8667 9.8999 16.1 9.6999 16.3C9.4999 16.4834 9.26657 16.5792 8.9999 16.5875C8.73324 16.5959 8.4999 16.5 8.2999 16.3L3.6999 11.7C3.4999 11.5 3.3999 11.2667 3.3999 11C3.3999 10.7334 3.4999 10.5 3.6999 10.3L8.2999 5.70005C8.48324 5.51672 8.7124 5.42505 8.9874 5.42505C9.2624 5.42505 9.4999 5.51672 9.6999 5.70005C9.8999 5.90005 9.9999 6.13755 9.9999 6.41255C9.9999 6.68755 9.8999 6.92505 9.6999 7.12505L6.8249 10H15.9999C17.3832 10 18.5624 10.4875 19.5374 11.4625C20.5124 12.4375 20.9999 13.6167 20.9999 15V18C20.9999 18.2834 20.9041 18.5209 20.7124 18.7125C20.5207 18.9042 20.2832 19 19.9999 19C19.7166 19 19.4791 18.9042 19.2874 18.7125C19.0957 18.5209 18.9999 18.2834 18.9999 18V15C18.9999 14.1667 18.7082 13.4584 18.1249 12.875C17.5416 12.2917 16.8332 12 15.9999 12H6.8249Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.ReplyRefreshedIcon = m));
  },
  98,
);
