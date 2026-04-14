__d(
  "WAWebOfflineMessageLoadIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "offline-message-load";
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
      var S = 12,
        R = 17;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 17 12",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M0.708496 2.46777C0.708496 1.56814 1.44753 0.831299 2.35175 0.831299H16.646C16.9646 0.831299 17.0698 1.03474 16.879 1.28571L14.0882 5.15382V10.174C14.0882 11.0745 13.3492 11.8105 12.445 11.8105H2.35175C1.44753 11.8105 0.708496 11.0745 0.708496 10.174V2.46777ZM10.6252 4.37297C10.8208 4.37297 10.9793 4.53153 10.9793 4.72713V5.43547C10.9793 5.63107 10.8208 5.78963 10.6252 5.78963H4.25016C4.05456 5.78963 3.896 5.63107 3.896 5.43547V4.72713C3.896 4.53153 4.05456 4.37297 4.25016 4.37297H10.6252ZM9.56266 6.85213C9.75826 6.85213 9.91683 7.0107 9.91683 7.2063V7.91463C9.91683 8.11023 9.75826 8.2688 9.56266 8.2688H4.25016C4.05456 8.2688 3.896 8.11023 3.896 7.91463V7.2063C3.896 7.0107 4.05456 6.85213 4.25016 6.85213H9.56266Z",
                  fill: "white",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.OfflineMessageLoadIcon = m));
  },
  98,
);
