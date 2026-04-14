__d(
  "WAWebLocationRefreshedOutlineIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "location-refreshed-outline";
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
      var S = 20,
        R = 15;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 15 20",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M7.5 16.0208C9.15278 14.5347 10.3993 13.1667 11.2396 11.9167C12.0799 10.6667 12.5 9.54861 12.5 8.5625C12.5 7.10417 12.0243 5.89583 11.0729 4.9375C10.1215 3.97917 8.93056 3.5 7.5 3.5C6.06944 3.5 4.87847 3.97917 3.92708 4.9375C2.97569 5.89583 2.5 7.10417 2.5 8.5625C2.5 9.54861 2.92014 10.6667 3.76042 11.9167C4.60069 13.1667 5.84722 14.5347 7.5 16.0208ZM7.5 17.5208C7.31944 17.5208 7.14931 17.4896 6.98958 17.4271C6.82986 17.3646 6.67361 17.2708 6.52083 17.1458C5.96528 16.6597 5.36458 16.0903 4.71875 15.4375C4.07292 14.7847 3.47222 14.0833 2.91667 13.3333C2.36111 12.5833 1.90278 11.8021 1.54167 10.9896C1.18056 10.1771 1 9.36806 1 8.5625C1 6.70139 1.61806 5.14236 2.85417 3.88542C4.09028 2.62847 5.63889 2 7.5 2C9.34722 2 10.8924 2.62847 12.1354 3.88542C13.3785 5.14236 14 6.70139 14 8.5625C14 9.36806 13.816 10.1806 13.4479 11C13.0799 11.8194 12.6215 12.6042 12.0729 13.3542C11.5243 14.1042 10.9271 14.8021 10.2812 15.4479C9.63542 16.0938 9.03472 16.6597 8.47917 17.1458C8.32639 17.2708 8.17014 17.3646 8.01042 17.4271C7.85069 17.4896 7.68056 17.5208 7.5 17.5208ZM7.5 10C7.91667 10 8.27083 9.85417 8.5625 9.5625C8.85417 9.27083 9 8.91667 9 8.5C9 8.08333 8.85417 7.72917 8.5625 7.4375C8.27083 7.14583 7.91667 7 7.5 7C7.08333 7 6.72917 7.14583 6.4375 7.4375C6.14583 7.72917 6 8.08333 6 8.5C6 8.91667 6.14583 9.27083 6.4375 9.5625C6.72917 9.85417 7.08333 10 7.5 10Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.LocationRefreshedOutlineIcon = m));
  },
  98,
);
