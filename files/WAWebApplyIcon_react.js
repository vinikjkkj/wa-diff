__d(
  "WAWebApplyIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "apply";
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
      var S = 18,
        R = 18;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 18 18",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              color: "#010101",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M9 17.4736C4.37646 17.4736 0.533203 13.6387 0.533203 9.00684C0.533203 4.3833 4.36816 0.540039 8.9917 0.540039C13.6235 0.540039 17.4668 4.3833 17.4668 9.00684C17.4668 13.6387 13.6318 17.4736 9 17.4736ZM9 16.0625C12.918 16.0625 16.064 12.9248 16.0557 9.00684C16.0474 5.09717 12.9097 1.95117 8.9917 1.95117C5.07373 1.95117 1.95264 5.09717 1.95264 9.00684C1.95264 12.9248 5.08203 16.0625 9 16.0625ZM6.09473 11.0654C5.72949 11.0654 5.48877 10.7915 5.48877 10.4014V6.4917C5.48877 6.00195 5.75439 5.80273 6.17773 5.80273H10.1206C10.5024 5.80273 10.7515 6.04346 10.7515 6.40869C10.7515 6.78223 10.4941 7.02295 10.104 7.02295H8.58496L7.36475 6.89014L8.65137 8.09375L11.7144 11.1567C11.8306 11.2729 11.9136 11.4307 11.9136 11.5967C11.9136 11.9702 11.6729 12.2192 11.2993 12.2192C11.1001 12.2192 10.9507 12.1445 10.8345 12.0283L7.77148 8.96533L6.57617 7.69531L6.70068 8.98193V10.418C6.70068 10.8164 6.45996 11.0654 6.09473 11.0654Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.ApplyIcon = m));
  },
  98,
);
