__d(
  "WAWebWdsPictoAiIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-picto-ai";
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
                c.jsx("style", {
                  children:
                    ".st0{fill:#25d366;stroke:#111b21;stroke-width:1.5}",
                }),
                c.jsx("path", {
                  d: "m49.2 22.2-2.8-.6c-1.6-.3-2.7-2-2.4-3.6.3-1.6 2-2.7 3.6-2.4l2.8.6.6-2.8c.3-1.6 2-2.7 3.6-2.4 1.6.3 2.7 2 2.4 3.6l-.6 2.8 2.7.6c1.6.3 2.7 2 2.4 3.6-.3 1.4-1.6 2.4-3 2.4-.2 0-.4 0-.6-.1l-2.7-.6-.6 2.7c-.3 1.4-1.6 2.4-3 2.4-.2 0-.4 0-.6-.1-1.6-.3-2.7-2-2.4-3.6l.6-2.5z",
                  className: "st0",
                }),
                c.jsx("path", {
                  d: "m74.7 31.6.9 10.4c.1 1.1-.4 2.1-1.3 2.7-.5.4-1.1.6-1.7.6-.4 0-.9-.1-1.3-.3l-9.5-4.4c-1-.5-1.7-1.4-1.7-2.5-.1-1.1.4-2.1 1.3-2.7l8.6-6c.9-.6 2-.7 3-.3.9.5 1.6 1.5 1.7 2.5z",
                  className: "st0",
                }),
                c.jsx("path", {
                  d: "M19.5 40c4 0 7.2-3.2 7.2-7.2s-3.2-7.2-7.2-7.2-7.2 3.2-7.2 7.2 3.3 7.2 7.2 7.2z",
                  className: "st0",
                }),
                c.jsx("path", {
                  d: "M61.2 49.9c2.4 1.1 2.6 3.3 2.6 4 0 .8-.3 3-2.6 4l-10.5 4.5c-.5.2-1 .7-1.3 1.3l-4.6 10.7c-1 2.4-3.4 2.6-4 2.6-.7 0-2.9-.2-4-2.6l-4.9-10.8c-.3-.6-.7-1-1.2-1.2L20.5 58c-2.4-1-2.6-3.3-2.6-4 0-.7.3-3 2.7-4l10.6-4.5c.5-.2 1-.7 1.3-1.3L37 33.8c1-2.5 3.4-2.7 4-2.7s3 .2 4 2.7l4.5 10.5c.2.5.7 1 1.2 1.2l10.5 4.4z",
                  className: "st0",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.WdsPictoAiIcon = m));
  },
  98,
);
