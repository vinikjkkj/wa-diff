__d(
  "WAWebVideoPipLargeIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "video-pip-large";
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
        R = 37;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 37 28",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M33.8354224,11.9998779 L22.16,11.9998779 C20.96768,11.9998779 20,11.0321979 20,9.83987797 L20,3.15999996 C20,1.96767998 20.96768,1 22.16,1 L33.8354224,1 C35.0277424,1 35.9954224,1.96767998 35.9954224,3.15999996 L35.9954224,9.83987797 C35.9954224,11.0321979 35.0277424,11.9998779 33.8354224,11.9998779 Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M17.5694596,5 L17.5694596,7 L4.15999996,7 C3.51933499,7 3,7.51951438 2.99999977,8.15932623 L3.01055908,23.8326453 C3.01055908,24.4731309 3.52989407,24.9926453 4.17055904,24.9926453 L27.850046,24.9926453 C28.4900723,24.9926453 29.0100192,24.4726895 29.0100198,23.8337553 L28.9994607,14.320724 L30.9994595,14.3185041 L31.0100192,23.8326453 C31.0100192,25.5772513 29.5946495,26.9926453 27.850046,26.9926453 L4.17055904,26.9926453 C2.42516991,26.9926453 1.01055908,25.5775458 1.01055931,23.833319 L1,8.15999996 C1,6.41509947 2.41461083,5 4.15999996,5 L17.5694596,5 Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.VideoPipLargeIcon = m));
  },
  98,
);
