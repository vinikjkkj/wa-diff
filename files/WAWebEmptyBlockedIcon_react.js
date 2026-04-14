__d(
  "WAWebEmptyBlockedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "empty-blocked";
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
      var S = 90,
        R = 90;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 90 90",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              x: "0px",
              y: "0px",
              enableBackground: "new 0 0 90 90",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M67.436,76.012c-5.561,0-10.104-4.542-10.104-10.104c0-2.08,0.637-4.033,1.741-5.689l14.052,14.052 C71.469,75.375,69.517,76.012,67.436,76.012z M57.715,51.856C51.474,49.479,44.13,48.29,39.12,48.29 c-10.274,0-30.481,4.967-30.481,15.241v7.642h42.58c-0.552-1.656-0.849-3.439-0.849-5.264 C50.328,60.092,53.257,54.955,57.715,51.856z M39.12,40.649c8.406,0,15.241-6.877,15.241-15.241c0-8.406-6.877-15.241-15.241-15.241 S23.88,17.045,23.88,25.408C23.837,33.814,30.715,40.649,39.12,40.649z M67.436,51.984c-7.684,0-13.925,6.241-13.925,13.925 c0,7.684,6.241,13.925,13.925,13.925s13.925-6.241,13.925-13.925C81.361,58.224,75.12,51.984,67.436,51.984z M75.8,71.554 L61.748,57.502c1.613-1.104,3.566-1.741,5.689-1.741c5.561,0,10.104,4.542,10.104,10.104C77.54,67.988,76.903,69.941,75.8,71.554z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.EmptyBlockedIcon = m));
  },
  98,
);
