__d(
  "WAWebAdsStackIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ads-stack";
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
                c.jsx("g", {
                  id: "icon_manage_ads",
                  children: c.jsx("path", {
                    id: "Vector",
                    d: "M6.6251 19.375C6.13571 19.375 5.70921 19.1905 5.34557 18.8216C4.98192 18.4526 4.8001 18.0287 4.8001 17.55V3.45C4.8001 2.97125 4.98192 2.5474 5.34557 2.17845C5.70921 1.80948 6.13571 1.625 6.6251 1.625H20.7251C21.2038 1.625 21.6277 1.80948 21.9966 2.17845C22.3656 2.5474 22.5501 2.97125 22.5501 3.45V17.55C22.5501 18.0287 22.3656 18.4526 21.9966 18.8216C21.6277 19.1905 21.2038 19.375 20.7251 19.375H6.6251ZM6.6251 5.25H20.7251V3.45H6.6251V5.25ZM3.3001 22.7C2.81071 22.7 2.38421 22.5155 2.02057 22.1466C1.65692 21.7776 1.4751 21.3538 1.4751 20.875V4.95H3.3001V20.875H19.2251V22.7H3.3001Z",
                    fill: "currentColor",
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.AdsStackIcon = m));
  },
  98,
);
