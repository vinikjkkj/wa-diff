__d(
  "WAWebLocationSearchingIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "location-searching";
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
                  d: "M11 22v-1q-3.125-.35-5.363-2.587Q3.4 16.175 3.05 13.05h-1a.97.97 0 0 1-.713-.288.97.97 0 0 1-.287-.712q0-.424.287-.713a.97.97 0 0 1 .713-.287h1q.35-3.124 2.587-5.363Q7.875 3.45 11 3.1v-1q0-.424.287-.713A.97.97 0 0 1 12 1.1q.424 0 .712.287.288.288.288.713v1q3.124.35 5.362 2.587t2.588 5.363h1q.424 0 .712.287.288.288.288.713 0 .424-.288.712a.97.97 0 0 1-.712.288h-1q-.35 3.124-2.588 5.363Q16.125 20.65 13 21v1q0 .424-.288.712A.97.97 0 0 1 12 23a.97.97 0 0 1-.713-.288A.97.97 0 0 1 11 22m1-2.95q2.9 0 4.95-2.05T19 12.05 16.95 7.1 12 5.05q-2.901 0-4.95 2.05T5 12.05 7.05 17 12 19.05",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.LocationSearchingIcon = m));
  },
  98,
);
