__d(
  "WAWebWdsPictoDisappearingMessagesIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-disappearing-messages";
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
              id: "Layer_1",
              x: "0",
              y: "0",
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M77.5 44c0 18.5-15 33.5-33.5 33.5S10.5 62.5 10.5 44s15-33.5 33.5-33.5 33.5 15 33.5 33.5z",
                  fill: "#25d366",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                }),
                c.jsx("path", {
                  d: "M43.3 16.5c-14.1.9-25.4 11.3-27 23.8-2 14.8 10 29.9 27 31.3",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                }),
                c.jsx("path", {
                  d: "M56.5 22.2c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7.1.9.8 1.7 1.7 1.7z",
                  strokeMiterlimit: 10,
                  fill: "none",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                }),
                c.jsx("path", {
                  d: "M66.6 32.4c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7s.8 1.7 1.7 1.7z",
                  strokeMiterlimit: 10,
                  fill: "none",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                }),
                c.jsx("path", {
                  d: "M70.3 46.2c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7 0 .9.8 1.7 1.7 1.7z",
                  strokeMiterlimit: 10,
                  fill: "none",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                }),
                c.jsx("path", {
                  d: "M66.6 59.9c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7.1 1 .8 1.7 1.7 1.7z",
                  strokeMiterlimit: 10,
                  fill: "none",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                }),
                c.jsx("path", {
                  d: "M57 69.5c.9 0 1.7-.7 1.7-1.7 0-.9-.7-1.7-1.7-1.7-.9 0-1.7.7-1.7 1.7.1 1 .8 1.7 1.7 1.7z",
                  strokeMiterlimit: 10,
                  fill: "none",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                }),
                c.jsx("path", {
                  d: "M55.8 33.6c-.6-.6-1.6-.7-2.2-.2l-12.3 9.2c-1.7 1.3-1.9 3.8-.4 5.3l.5.5c1.5 1.5 4 1.3 5.3-.4L56 35.8c.5-.7.4-1.6-.2-2.2h0z",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  fill: "none",
                  stroke: "#111b21",
                  strokeWidth: 1.5,
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsPictoDisappearingMessagesIcon = m));
  },
  98,
);
