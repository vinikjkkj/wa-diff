__d(
  "WDSIconIcLightbulb.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-lightbulb";
    function m(t) {
      var n = t.height,
        o = t.iconXstyle,
        a = t.viewBox,
        i = t.width,
        l = babelHelpers.objectWithoutPropertiesLoose(t, e),
        u;
      if (a) {
        var m = a.height,
          p = m === void 0 ? 0 : m,
          _ = a.width,
          f = _ === void 0 ? 0 : _,
          g = a.x,
          h = g === void 0 ? 0 : g,
          y = a.y,
          C = y === void 0 ? 0 : y;
        u = [h, C, f, p].join(" ");
      }
      var b = 24,
        v = 24;
      return (
        (n != null || i != null) && ((b = n), (v = i)),
        c.jsx(
          r("WDSSvgComponentBase.react"),
          babelHelpers.extends({}, l, {
            children: c.jsxs("svg", {
              viewBox: u != null ? u : "0 0 24 24",
              height: b,
              width: v,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(o),
              fill: "currentColor",
              children: [
                c.jsx("title", { children: d }),
                c.jsx("path", {
                  d: "M12 22C11.45 22 10.9792 21.8042 10.5875 21.4125C10.1958 21.0208 10 20.55 10 20H14C14 20.55 13.8042 21.0208 13.4125 21.4125C13.0208 21.8042 12.55 22 12 22ZM9 19C8.71667 19 8.47917 18.9042 8.2875 18.7125C8.09583 18.5208 8 18.2833 8 18C8 17.7167 8.09583 17.4792 8.2875 17.2875C8.47917 17.0958 8.71667 17 9 17H15C15.2833 17 15.5208 17.0958 15.7125 17.2875C15.9042 17.4792 16 17.7167 16 18C16 18.2833 15.9042 18.5208 15.7125 18.7125C15.5208 18.9042 15.2833 19 15 19H9ZM8.25 16C7.1 15.3167 6.1875 14.4 5.5125 13.25C4.8375 12.1 4.5 10.85 4.5 9.5C4.5 7.41667 5.22917 5.64583 6.6875 4.1875C8.14583 2.72917 9.91667 2 12 2C14.0833 2 15.8542 2.72917 17.3125 4.1875C18.7708 5.64583 19.5 7.41667 19.5 9.5C19.5 10.85 19.1625 12.1 18.4875 13.25C17.8125 14.4 16.9 15.3167 15.75 16H8.25ZM8.85 14H15.15C15.9 13.4667 16.4792 12.8083 16.8875 12.025C17.2958 11.2417 17.5 10.4 17.5 9.5C17.5 7.96667 16.9667 6.66667 15.9 5.6C14.8333 4.53333 13.5333 4 12 4C10.4667 4 9.16667 4.53333 8.1 5.6C7.03333 6.66667 6.5 7.96667 6.5 9.5C6.5 10.4 6.70417 11.2417 7.1125 12.025C7.52083 12.8083 8.1 13.4667 8.85 14Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.default = m));
  },
  98,
);
