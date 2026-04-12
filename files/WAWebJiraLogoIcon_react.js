__d(
  "WAWebJiraLogoIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "jira-logo";
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
      var S = 2500,
        R = 2500;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 -30.632 255.324 285.956",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsxs("linearGradient", {
                  id: "a",
                  children: [
                    c.jsx("stop", { offset: 0.18, stopColor: "#0052cc" }),
                    c.jsx("stop", { offset: 1, stopColor: "#2684ff" }),
                  ],
                }),
                c.jsx("linearGradient", {
                  id: "b",
                  x1: "98.031%",
                  x2: "58.888%",
                  xlinkHref: "#a",
                  y1: ".161%",
                  y2: "40.766%",
                }),
                c.jsx("linearGradient", {
                  id: "c",
                  x1: "100.665%",
                  x2: "55.402%",
                  xlinkHref: "#a",
                  y1: ".455%",
                  y2: "44.727%",
                }),
                c.jsx("path", {
                  d: "M244.658 0H121.707a55.5 55.5 0 0 0 55.502 55.502h22.649V77.37c.02 30.625 24.841 55.447 55.466 55.467V10.666C255.324 4.777 250.55 0 244.658 0",
                  fill: "#2684ff",
                }),
                c.jsx("path", {
                  d: "M183.822 61.262H60.872c.019 30.625 24.84 55.447 55.466 55.467h22.649v21.938c.039 30.625 24.877 55.43 55.502 55.43V71.93c0-5.891-4.776-10.667-10.667-10.667z",
                  fill: "url(#b)",
                }),
                c.jsx("path", {
                  d: "M122.951 122.489H0c0 30.653 24.85 55.502 55.502 55.502h22.72v21.867c.02 30.597 24.798 55.408 55.396 55.466V133.156c0-5.891-4.776-10.667-10.667-10.667",
                  fill: "url(#c)",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.JiraLogoIcon = m));
  },
  98,
);
