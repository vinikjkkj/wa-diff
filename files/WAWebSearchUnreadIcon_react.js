__d(
  "WAWebSearchUnreadIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "search-unread";
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
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M19.7184267,11.1602431 L19.7184267,15.3413127 C19.7184267,16.2540249 18.9455846,17 18,17 L7.71842675,17 C6.77284219,17 6,16.2540249 6,15.3413127 L6,10.5 L3.40821194,6.74308348 C3.12509322,6.3326898 3.29958688,6 3.7951967,6 L13.6115082,6 C13.5385307,6.32161137 13.5,6.65630602 13.5,7 C13.5,9.48528137 15.5147186,11.5 18,11.5 C18.6085836,11.5 19.1889505,11.3791898 19.7184267,11.1602431 Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M18,10 C19.6568542,10 21,8.65685425 21,7 C21,5.34314575 19.6568542,4 18,4 C16.3431458,4 15,5.34314575 15,7 C15,8.65685425 16.3431458,10 18,10 Z",
                  fillOpacity: 0.4,
                  fill: "#727475",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.SearchUnreadIcon = m));
  },
  98,
);
