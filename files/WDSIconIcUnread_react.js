__d(
  "WDSIconIcUnread.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-unread";
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
                  d: "M6.99991 10C6.99991 9.44772 7.44763 9 7.99991 9H16.9999C17.5522 9 17.9999 9.44772 17.9999 10C17.9999 10.5523 17.5522 11 16.9999 11H7.99991C7.44763 11 6.99991 10.5523 6.99991 10Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M6.99991 14C6.99991 13.4477 7.44763 13 7.99991 13H13.9999C14.5522 13 14.9999 13.4477 14.9999 14C14.9999 14.5523 14.5522 15 13.9999 15H7.99991C7.44763 15 6.99991 14.5523 6.99991 14Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M15.9999 5C15.9999 4.44772 15.5522 4 14.9999 4H1.78991C1.01261 4 0.539969 4.86348 0.939883 5.53L2.99991 9V17.3333C2.99991 18.8061 4.19382 20 5.66658 20H19.3332C20.806 20 21.9999 18.8061 21.9999 17.3333V11C21.9999 10.4477 21.5522 10 20.9999 10C20.4476 10 19.9999 10.4477 19.9999 11V17.3333C19.9999 17.7015 19.7014 18 19.3332 18H5.66658C5.29839 18 4.99991 17.7015 4.99991 17.3333V8.44603L3.53229 6H14.9999C15.5522 6 15.9999 5.55228 15.9999 5Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M20.9999 8C21.7999 8 22.5599 7.68 23.1199 7.12C23.6799 6.56 23.9999 5.79 23.9999 5C23.9999 4.21 23.6799 3.44 23.1199 2.88C22.5599 2.32 21.7899 2 20.9999 2C20.2099 2 19.4399 2.32 18.8799 2.88C18.3199 3.44 17.9999 4.21 17.9999 5C17.9999 5.79 18.3199 6.56 18.8799 7.12C19.4399 7.68 20.2099 8 20.9999 8Z",
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
