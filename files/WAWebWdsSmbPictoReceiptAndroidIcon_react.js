__d(
  "WAWebWdsSmbPictoReceiptAndroidIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-smb-picto-receipt-android";
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
              viewBox: p,
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "#25D366",
                  stroke: "#111B21",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.238,
                  d: "M66.254 13.173c2.785 0 2.785-2.673 5.57-2.673h.013v67c-2.779 0-2.785-2.674-5.564-2.674-2.78 0-2.785 2.674-5.564 2.674-2.78 0-2.786-2.674-5.565-2.674-2.779 0-2.785 2.674-5.564 2.674s-2.785-2.674-5.564-2.674-2.779 2.674-5.564 2.674-2.791-2.674-5.57-2.674c-2.78 0-2.78 2.674-5.565 2.674-2.785 0-2.785-2.674-5.57-2.674s-2.785 2.674-5.57 2.674h-.013v-67c2.78 0 2.785 2.673 5.564 2.673 2.78 0 2.785-2.673 5.564-2.673 2.78 0 2.786 2.673 5.565 2.673 2.779 0 2.785-2.673 5.564-2.673s2.785 2.673 5.564 2.673S46.764 10.5 49.55 10.5s2.792 2.673 5.57 2.673c2.78 0 2.78-2.673 5.565-2.673 2.785 0 2.785 2.673 5.57 2.673Z",
                }),
                c.jsx("path", {
                  stroke: "#111B21",
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: 1.238,
                  d: "M28.422 27.434h31.152M28.422 44h31.152M28.422 60.565h31.152",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.WdsSmbPictoReceiptAndroidIcon = m));
  },
  98,
);
