__d(
  "WDSIconWdsIcChatFilled.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-chat-filled";
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
                  d: "M22 6.66667C22 5.19391 20.8061 4 19.3333 4H1.78997C1.01268 4 0.54003 4.86348 0.939944 5.53L2.99997 9V17.3333C2.99997 18.8061 4.19388 20 5.66664 20H19.3333C20.8061 20 22 18.8061 22 17.3333V6.66667ZM6.99997 10C6.99997 9.44772 7.44769 9 7.99997 9H17C17.5523 9 18 9.44772 18 10C18 10.5523 17.5523 11 17 11H7.99997C7.44769 11 6.99997 10.5523 6.99997 10ZM7.99997 13C7.44769 13 6.99997 13.4477 6.99997 14C6.99997 14.5523 7.44769 15 7.99997 15H14C14.5523 15 15 14.5523 15 14C15 13.4477 14.5523 13 14 13H7.99997Z",
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
