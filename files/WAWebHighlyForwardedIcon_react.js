__d(
  "WAWebHighlyForwardedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "highly-forwarded";
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
      var S = 16,
        R = 20;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 20 16",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M13.6059557,5.26308901 C13.6220086,5.26163419 13.6302968,5.26102868 13.6302968,5.26102868 L13.6666317,3.82396292 C13.6881611,2.97246613 14.1900805,2.77489995 14.7806307,3.3754967 L18.4132486,7.06991365 C18.7126057,7.37436354 18.7160739,7.87287893 18.4230266,8.18124118 L14.7679628,12.0273223 C14.1812438,12.6447038 13.7056141,12.4510723 13.7056141,11.6045324 L13.7056141,9.93754567 L14.8701549,8.71214475 C15.4496567,8.10235763 15.441656,7.13001879 14.8512575,6.52957627 L13.6059557,5.26308901 L13.6059557,5.26308901 Z",
                  fillOpacity: 0.25,
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M9.55511091,3.82396292 C9.57664026,2.97246613 10.0785597,2.77489995 10.6691099,3.3754967 L14.3017278,7.06991365 C14.6010849,7.37436354 14.6045531,7.87287893 14.3115058,8.18124118 L10.656442,12.0273223 C10.069723,12.6447038 9.59409325,12.4510723 9.59409325,11.6045324 L9.59409325,9.87219486 C9.59409325,9.87219486 5.03474338,9.49878283 2.43099409,12.3846575 C1.83824676,12.8974744 1.66218866,12.9568393 1.47026458,12.8572726 C1.32851376,12.7423664 1.28325362,12.3846575 1.73218749,11.260453 C3.56459895,5.69602505 9.51877595,5.26102868 9.51877595,5.26102868 L9.55511091,3.82396292 Z",
                  fillOpacity: 0.4,
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.HighlyForwardedIcon = m));
  },
  98,
);
