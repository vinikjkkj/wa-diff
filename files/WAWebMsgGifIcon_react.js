__d(
  "WAWebMsgGifIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "msg-gif";
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
      var S = 14,
        R = 21;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 21 14",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              x: "0px",
              y: "0px",
              enableBackground: "new 0 0 21 14",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M17.5,1.1H3.4C2,1.1,0.8,2.3,0.8,3.7v5.8c0,1.4,1.2,2.6,2.6,2.6h14.1c1.4,0,2.6-1.2,2.6-2.6V3.7 C20.1,2.3,18.9,1.1,17.5,1.1z M9.1,7.1c0,1.6-1,2.5-2.6,2.5c-1.8,0-2.8-1.1-2.8-3s1.1-3,2.8-3c1.4,0,2.4,0.8,2.6,2H7.6 C7.4,5.1,7,4.8,6.4,4.8c-0.8,0-1.3,0.7-1.3,1.8s0.5,1.8,1.4,1.8c0.7,0,1.1-0.4,1.2-1V7.3H6.4v-1h2.7V7.1z M11.7,9.5h-1.5V3.7h1.5 V9.5z M16.9,4.9h-2.4v1.3h2.2v1.1h-2.2v2.1H13V3.7h3.9V4.9z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.MsgGifIcon = m));
  },
  98,
);
