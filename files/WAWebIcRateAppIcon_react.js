__d(
  "WAWebIcRateAppIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-rate-app";
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
                  d: "m12 13.63 2.11 1.276q.304.195.61-.014a.5.5 0 0 0 .221-.568l-.554-2.414 1.886-1.637a.53.53 0 0 0 .167-.596q-.11-.347-.5-.375l-2.469-.194-.971-2.275A.5.5 0 0 0 12 6.5a.5.5 0 0 0-.499.333l-.97 2.275-2.47.194q-.388.028-.5.375a.53.53 0 0 0 .167.596l1.887 1.637-.555 2.414q-.084.36.222.568a.51.51 0 0 0 .61.014z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M2 4.6A2.6 2.6 0 0 1 4.6 2h14.8A2.6 2.6 0 0 1 22 4.6v12.8a2.6 2.6 0 0 1-2.6 2.6h-3.486l-3.03 3.03a1.25 1.25 0 0 1-1.768 0L8.086 20H4.6A2.6 2.6 0 0 1 2 17.4zM4.6 4a.6.6 0 0 0-.6.6v12.8a.6.6 0 0 0 .6.6h3.693a1.5 1.5 0 0 1 1.06.44L12 21.085l2.646-2.647A1.5 1.5 0 0 1 15.707 18H19.4a.6.6 0 0 0 .6-.6V4.6a.6.6 0 0 0-.6-.6z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.IcRateAppIcon = m));
  },
  98,
);
