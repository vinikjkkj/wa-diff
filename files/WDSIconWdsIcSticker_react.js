__d(
  "WDSIconWdsIcSticker.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-sticker";
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
                  d: "M12 22C13.8087 21.9781 15.5379 21.2537 16.8221 19.9799L19.8489 16.9776C21.2256 15.612 22 13.7532 22 11.8141V9.27273C22 5.25611 18.7439 2 14.7273 2H9.27273C5.25611 2 2 5.25611 2 9.27273V14.7273C2 18.7439 5.25611 22 9.27273 22H12ZM9.27273 4H14.7273C17.5736 4 19.8932 6.25535 19.9964 9.07648H19.9889V11.1248C19.9889 11.6259 19.5817 12.0315 19.0806 12.0296L16.8216 12.0208C14.1479 12.0105 11.979 14.1827 11.9935 16.8564L12.0058 19.1204C12.0081 19.5417 11.722 19.8971 11.3331 20H9.27273C6.36068 20 4 17.6393 4 14.7273V9.27273C4 6.36068 6.36068 4 9.27273 4ZM13.9744 19.5537C13.9959 19.4089 14.0066 19.2605 14.0057 19.1095L13.9935 16.8455C13.985 15.2837 15.252 14.0147 16.8138 14.0208L19.0729 14.0295C19.2275 14.0301 19.3793 14.0187 19.5274 13.996C19.2653 14.5726 18.8989 15.1029 18.4405 15.5576L15.4136 18.5599C14.9926 18.9776 14.5044 19.3124 13.9744 19.5537Z",
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
