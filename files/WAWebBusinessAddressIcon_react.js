__d(
  "WAWebBusinessAddressIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "business-address";
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
              version: "1.1",
              children: [
                c.jsx("title", { children: "business-address" }),
                c.jsx("desc", { children: "Created with Sketch." }),
                c.jsx("defs", {}),
                c.jsxs("g", {
                  stroke: "none",
                  strokeWidth: 1,
                  fill: "none",
                  fillRule: "evenodd",
                  children: [
                    c.jsx("path", {
                      d: "M12.0497571,11.9753826 C10.5804884,11.9753826 9.42411942,10.8207142 9.42411942,9.34974492 C9.42411942,7.88047615 10.5804884,6.72580776 12.0497571,6.72580776 C13.5190259,6.72580776 14.6753948,7.88047615 14.6753948,9.34974492 C14.6753948,10.8207142 13.5190259,11.9753826 12.0497571,11.9753826 M12.0497571,2 C7.95485066,2 4.70001221,5.25483845 4.70001221,9.34974492 C4.70001221,14.8101871 12.0497571,23 12.0497571,23 C12.0497571,23 19.399502,14.8101871 19.399502,9.34974492 C19.399502,5.25483845 16.1446636,2 12.0497571,2",
                      id: "Fill-1",
                      fill: "currentColor",
                    }),
                    c.jsx("g", { id: "slices" }),
                  ],
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.BusinessAddressIcon = m));
  },
  98,
);
