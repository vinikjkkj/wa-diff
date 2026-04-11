__d(
  "WDSIconWdsIcCallVideoMadeFilled.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-call-video-made-filled";
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
                  d: "M2.5875 19.4125C2.97917 19.8042 3.45 20 4 20H16C16.55 20 17.0208 19.8042 17.4125 19.4125C17.8042 19.0208 18 18.55 18 18V13.5L21.15 16.65C21.3167 16.8167 21.5 16.8583 21.7 16.775C21.9 16.6917 22 16.5333 22 16.3V7.7C22 7.46667 21.9 7.30833 21.7 7.225C21.5 7.14167 21.3167 7.18333 21.15 7.35L18 10.5V6C18 5.45 17.8042 4.97917 17.4125 4.5875C17.0208 4.19583 16.55 4 16 4H4C3.45 4 2.97917 4.19583 2.5875 4.5875C2.19583 4.97917 2 5.45 2 6V18C2 18.55 2.19583 19.0208 2.5875 19.4125ZM9 8C8.44772 8 8 8.44772 8 9C8 9.55228 8.44772 10 9 10H10.5858L6.29289 14.2929C5.90237 14.6834 5.90237 15.3166 6.29289 15.7071C6.68342 16.0976 7.31658 16.0976 7.70711 15.7071L12 11.4142V13C12 13.5523 12.4477 14 13 14C13.5523 14 14 13.5523 14 13V9.25C14 8.55964 13.4404 8 12.75 8H9Z",
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
