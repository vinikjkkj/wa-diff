__d(
  "WDSIconWdsIcStickerPlusCreateFilled.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-sticker-plus-create-filled";
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
                  d: "M9.27273 2C5.25611 2 2 5.25611 2 9.27273V14.7273C2 18.7439 5.25611 22 9.27273 22H13.2329V21.9951C13.9587 21.9951 14.543 21.399 14.5284 20.6733L14.5149 19.9966V19.6598C14.5149 16.8203 16.8167 14.5185 19.6561 14.5185L20.8584 14.5185C21.4463 14.5185 21.9311 14.0774 22 13.5081V9.27273C22 5.25611 18.7439 2 14.7273 2H9.27273ZM11 16V13H8C7.71667 13 7.47917 12.9042 7.2875 12.7125C7.09583 12.5208 7 12.2833 7 12C7 11.7167 7.09583 11.4792 7.2875 11.2875C7.47917 11.0958 7.71667 11 8 11H11V8C11 7.71667 11.0958 7.47917 11.2875 7.2875C11.4792 7.09583 11.7167 7 12 7C12.2833 7 12.5208 7.09583 12.7125 7.2875C12.9042 7.47917 13 7.71667 13 8V11H16C16.2833 11 16.5208 11.0958 16.7125 11.2875C16.9042 11.4792 17 11.7167 17 12C17 12.2833 16.9042 12.5208 16.7125 12.7125C16.5208 12.9042 16.2833 13 16 13H13V16C13 16.2833 12.9042 16.5208 12.7125 16.7125C12.5208 16.9042 12.2833 17 12 17C11.7167 17 11.4792 16.9042 11.2875 16.7125C11.0958 16.5208 11 16.2833 11 16Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M18.9787 19.8647C18.175 20.732 17.1642 21.3608 16.0565 21.703C16.1745 21.3712 16.2356 21.0126 16.2281 20.6393L16.2149 19.9796V19.6598C16.2149 17.7592 17.7556 16.2185 19.6561 16.2185L20.8584 16.2185C21.1163 16.2185 21.3663 16.1843 21.6039 16.12C21.2774 17.0685 20.7554 17.9475 20.0617 18.6961L18.9787 19.8647Z",
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
