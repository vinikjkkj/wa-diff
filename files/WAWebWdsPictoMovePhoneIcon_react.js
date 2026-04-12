__d(
  "WAWebWdsPictoMovePhoneIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-move-phone";
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
      var S = 88,
        R = 131;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 131 88",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M55.4 46.8c1.5 0 2.8-1.2 2.8-2.8s-1.2-2.8-2.8-2.8-2.8 1.2-2.8 2.8 1.3 2.8 2.8 2.8zm10.2 0c1.5 0 2.8-1.2 2.8-2.8s-1.2-2.8-2.8-2.8c-1.5 0-2.8 1.2-2.8 2.8s1.3 2.8 2.8 2.8zm10.2 0c1.5 0 2.8-1.2 2.8-2.8s-1.2-2.8-2.8-2.8S73 42.5 73 44s1.3 2.8 2.8 2.8zm36.1-34.1H87.5c-2.6 0-4.6 2.1-4.6 4.7v53.2c0 2.6 2.1 4.7 4.6 4.7h24.4c2.6 0 4.6-2.1 4.6-4.7V17.4c.1-2.6-2-4.7-4.6-4.7z",
                  style: {
                    fill: "#e6ffda",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeMiterlimit: 10,
                  },
                }),
                c.jsx("path", {
                  d: "M43 12.7H18.6c-2.6 0-4.6 2.1-4.6 4.7v53.2c0 2.6 2.1 4.7 4.6 4.7H43c2.6 0 4.6-2.1 4.6-4.7V17.4c.1-2.6-2-4.7-4.6-4.7z",
                  style: {
                    fill: "#25d366",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeLinecap: "round",
                    strokeMiterlimit: 10,
                  },
                }),
                c.jsx("path", {
                  d: "M43 19.8H18.7c-.8 0-1.5.7-1.5 1.5V66c0 .8.7 1.5 1.5 1.5H43c.8 0 1.5-.7 1.5-1.5V21.3c0-.8-.7-1.5-1.5-1.5zm-16.9 51h9.5M95 17.1h9.4",
                  style: {
                    strokeLinecap: "round",
                    fill: "none",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeMiterlimit: 10,
                  },
                }),
                c.jsx("path", {
                  d: "M83.3 21.3h32.9M83.3 63.9h32.9m-16.5 7.9c1.2 0 2.1-1 2.1-2.2s-1-2.2-2.1-2.2c-1.2 0-2.1 1-2.1 2.2s.9 2.2 2.1 2.2z",
                  style: {
                    fill: "none",
                    stroke: "#111b21",
                    strokeWidth: 1.5,
                    strokeMiterlimit: 10,
                  },
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoMovePhoneIcon = m));
  },
  98,
);
