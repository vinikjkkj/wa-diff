__d(
  "WAWebMessageFailIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "message-fail";
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
        R = 18;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 18 20",
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
                  d: "M3.5 14.7364L3.49996 6.83225L2.1143 4.5H14.7364C15.1581 4.5 15.5 4.84187 15.5 5.26359V14.7364C15.5 15.1581 15.1581 15.5 14.7364 15.5H4.26C3.84138 15.5 3.5 15.1612 3.5 14.7364ZM1.99996 7.24424L0.249959 4.29874C-0.0895067 3.73296 0.310173 3 0.969977 3H14.7364C15.9865 3 17 4.01345 17 5.26359V14.7364C17 15.9866 15.9865 17 14.7364 17H4.26C3.00985 17 2 15.9866 2 14.7364L1.99996 7.24424ZM11.2683 12.8247L9.50054 11.057L7.73027 12.8272C7.57971 12.9778 7.40264 13.0532 7.19905 13.0535C6.99556 13.0537 6.81869 12.9787 6.66843 12.8284C6.52111 12.6811 6.44736 12.5057 6.44716 12.3022C6.44687 12.0986 6.52185 11.9217 6.67211 11.7715L8.43988 10.0037L6.66961 8.23341C6.51905 8.08286 6.44363 7.90579 6.44333 7.7022C6.44314 7.49871 6.51817 7.32183 6.66843 7.17157C6.81869 7.02131 6.99556 6.94628 7.19905 6.94648C7.40264 6.94677 7.57971 7.0222 7.73027 7.17275L9.50054 8.94302L11.2683 7.17526C11.4186 7.025 11.5955 6.95001 11.7991 6.95031C12.0026 6.9505 12.179 7.02529 12.3284 7.17467C12.4778 7.32404 12.5514 7.50082 12.5493 7.705C12.5473 7.90917 12.4715 8.08605 12.3219 8.23562L10.5587 9.99882L12.3265 11.7666C12.4767 11.9168 12.552 12.0934 12.5524 12.2963C12.5529 12.4991 12.4783 12.6754 12.3287 12.825C12.1791 12.9746 12.0026 13.0495 11.7991 13.0497C11.5955 13.05 11.4186 12.975 11.2683 12.8247Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.MessageFailIcon = m));
  },
  98,
);
