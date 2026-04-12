__d(
  "WAWebWdsPictoPrivateMentionIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-private-mention";
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
        R = 88;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 88 88",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M44.6693 77.4999C49.7458 77.4999 54.6548 76.8863 57.8348 75.8261C60.1779 75.1011 61.4608 73.6506 61.4608 71.7535C61.4608 69.9127 60.066 68.5178 58.2251 68.5178C57.7791 68.5178 57.1093 68.6854 56.4957 68.8525C52.8139 69.6894 49.8015 70.2473 45.6175 70.2473C29.2161 70.2473 18.9514 60.3175 18.9514 44.3623C18.9514 28.4632 29.2719 17.6964 44.5017 17.6964C59.3967 17.6964 69.3827 27.0127 69.3827 41.0152C69.3827 49.6621 66.5931 55.1852 62.521 55.1852C59.8428 55.1852 58.5041 53.7904 58.5041 51.1126V30.5273C58.5041 28.24 57.0536 26.678 54.7662 26.678C52.7021 26.678 51.3077 28.3516 51.3077 29.6905V30.8062C49.2436 28.4074 45.8403 26.678 42.27 26.678C33.7348 26.678 27.6541 33.9861 27.6541 44.2509C27.6541 54.6273 33.7349 61.9908 42.4375 61.9908C46.6215 61.9908 50.1919 60.0385 52.3674 56.6352C53.9298 59.9266 57.3326 61.9908 61.7398 61.9908C70.7214 61.9908 76.6905 53.4 76.6905 40.7919C76.6905 22.8287 63.5807 10.4999 44.5574 10.4999C24.8647 10.4999 11.3086 24.2234 11.3086 44.1952C11.3086 64.1668 24.6974 77.4999 44.6693 77.4999ZM43.7205 54.5154C38.9786 54.5154 36.0219 50.5547 36.0219 44.0833C36.0219 37.6681 39.0348 33.6513 43.7762 33.6513C48.5743 33.6513 51.6424 37.5563 51.6424 43.9162C51.6424 50.4433 48.5181 54.5154 43.7205 54.5154Z",
                  fill: "#25D366",
                  stroke: "black",
                  strokeWidth: 1.5,
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoPrivateMentionIcon = m));
  },
  98,
);
