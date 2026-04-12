__d(
  "WAWebVideoPlaceholderIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-placeholder";
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
      var S = 28,
        R = 46;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 46 28",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M0.632234 3.05765C0 4.25556 0 5.82371 0 8.96V19.04C0 22.1763 0 23.7444 0.632234 24.9423C1.18836 25.9961 2.07575 26.8527 3.16722 27.3896C4.40804 28 6.03238 28 9.28106 28H23.5894C26.838 28 28.4624 28 29.7032 27.3896C30.7947 26.8527 31.682 25.9961 32.2382 24.9423C32.8704 23.7444 32.8704 22.1763 32.8704 19.04V8.96C32.8704 5.82371 32.8704 4.25556 32.2382 3.05765C31.682 2.00395 30.7947 1.14725 29.7032 0.610364C28.4624 0 26.838 0 23.5894 0H9.28106C6.03238 0 4.40804 0 3.16722 0.610364C2.07575 1.14725 1.18836 2.00395 0.632234 3.05765Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M36.7051 8.4197C36.3068 8.77319 36.0801 9.27163 36.0801 9.79396V18.206C36.0801 18.7284 36.3068 19.2268 36.7051 19.5803L41.899 24.1895C43.1385 25.2895 45.1411 24.4407 45.1411 22.8153V5.18474C45.1411 3.55931 43.1385 2.71047 41.899 3.81048L36.7051 8.4197Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.VideoPlaceholderIcon = m));
  },
  98,
);
