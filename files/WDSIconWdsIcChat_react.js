__d(
  "WDSIconWdsIcChat.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-chat";
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
                  d: "M3.00001 9L0.940011 5.53C0.540097 4.86348 1.0127 4 1.79 4H19.3333C20.8061 4 22 5.19391 22 6.66667V17.3333C22 18.8061 20.8061 20 19.3333 20H5.66668C4.19392 20 3.00001 18.8061 3.00001 17.3333V9ZM5.00001 8.44603L3.53239 6H19.3333C19.7015 6 20 6.29848 20 6.66667V17.3333C20 17.7015 19.7015 18 19.3333 18H5.66668C5.29849 18 5.00001 17.7015 5.00001 17.3333V8.44603Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M7.00001 10C7.00001 9.44772 7.44773 9 8.00001 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H8.00001C7.44773 11 7.00001 10.5523 7.00001 10Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M7.00001 14C7.00001 13.4477 7.44773 13 8.00001 13H14C14.5523 13 15 13.4477 15 14C15 14.5523 14.5523 15 14 15H8.00001C7.44773 15 7.00001 14.5523 7.00001 14Z",
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
