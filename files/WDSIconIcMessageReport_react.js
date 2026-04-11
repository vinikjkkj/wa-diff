__d(
  "WDSIconIcMessageReport.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-message-report";
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
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M0.941186 5.52617L2.99687 8.84848V17.3333C2.99687 18.8061 4.19077 20 5.66353 20H19.3302C20.803 20 21.9969 18.8061 21.9969 17.3333V6.66667C21.9969 5.19391 20.803 4 19.3302 4H1.79156C1.00815 4 0.528975 4.85997 0.941186 5.52617ZM4.99687 8.27977V17.3333C4.99687 17.7015 5.29534 18 5.66353 18H19.3302C19.6984 18 19.9969 17.7015 19.9969 17.3333V6.66667C19.9969 6.29848 19.6984 6 19.3302 6H3.58626L4.99687 8.27977Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M13.106 15.7125C12.9143 15.9042 12.6768 16 12.3935 16C12.1102 16 11.8727 15.9042 11.681 15.7125C11.4893 15.5208 11.3935 15.2833 11.3935 15C11.3935 14.7167 11.4893 14.4792 11.681 14.2875C11.8727 14.0958 12.1102 14 12.3935 14C12.6768 14 12.9143 14.0958 13.106 14.2875C13.2977 14.4792 13.3935 14.7167 13.3935 15C13.3935 15.2833 13.2977 15.5208 13.106 15.7125Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M13.106 12.7125C12.9143 12.9042 12.6768 13 12.3935 13C12.2602 13 12.131 12.975 12.006 12.925C11.881 12.875 11.7727 12.8042 11.681 12.7125C11.5893 12.6208 11.5185 12.5125 11.4685 12.3875C11.4185 12.2625 11.3935 12.1333 11.3935 12V9C11.3935 8.71667 11.4893 8.47917 11.681 8.2875C11.8727 8.09583 12.1102 8 12.3935 8C12.6768 8 12.9143 8.09583 13.106 8.2875C13.2977 8.47917 13.3935 8.71667 13.3935 9V12C13.3935 12.2833 13.2977 12.5208 13.106 12.7125Z",
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
