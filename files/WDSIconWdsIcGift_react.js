__d(
  "WDSIconWdsIcGift.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-gift";
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
                  d: "M6.2 6H4C3.45 6 2.97917 6.19583 2.5875 6.5875C2.19583 6.97917 2 7.45 2 8V20C2 20.55 2.19583 21.0208 2.5875 21.4125C2.97917 21.8042 3.45 22 4 22H20C20.55 22 21.0208 21.8042 21.4125 21.4125C21.8042 21.0208 22 20.55 22 20V8C22 7.45 21.8042 6.97917 21.4125 6.5875C21.0208 6.19583 20.55 6 20 6H17.8C17.8833 5.85 17.9375 5.69167 17.9625 5.525C17.9875 5.35833 18 5.18333 18 5C18 4.16667 17.7083 3.45833 17.125 2.875C16.5417 2.29167 15.8333 2 15 2C14.5 2 14.0333 2.125 13.6 2.375C13.1667 2.625 12.8 2.95 12.5 3.35L12 4L11.5 3.35C11.1833 2.96667 10.8125 2.64583 10.3875 2.3875C9.9625 2.12917 9.5 2 9 2C8.16667 2 7.45833 2.29167 6.875 2.875C6.29167 3.45833 6 4.16667 6 5C6 5.18333 6.0125 5.35833 6.0375 5.525C6.0625 5.69167 6.11667 5.85 6.2 6ZM4 20V15H11V20H4ZM13 20H20V15H13V20ZM13 13H20V8H13V13ZM11 8H4V13H11V8ZM9.7125 5.7125C9.52083 5.90417 9.28333 6 9 6C8.71667 6 8.47917 5.90417 8.2875 5.7125C8.09583 5.52083 8 5.28333 8 5C8 4.71667 8.09583 4.47917 8.2875 4.2875C8.47917 4.09583 8.71667 4 9 4C9.28333 4 9.52083 4.09583 9.7125 4.2875C9.90417 4.47917 10 4.71667 10 5C10 5.28333 9.90417 5.52083 9.7125 5.7125ZM15.7125 5.7125C15.5208 5.90417 15.2833 6 15 6C14.7167 6 14.4792 5.90417 14.2875 5.7125C14.0958 5.52083 14 5.28333 14 5C14 4.71667 14.0958 4.47917 14.2875 4.2875C14.4792 4.09583 14.7167 4 15 4C15.2833 4 15.5208 4.09583 15.7125 4.2875C15.9042 4.47917 16 4.71667 16 5C16 5.28333 15.9042 5.52083 15.7125 5.7125Z",
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
