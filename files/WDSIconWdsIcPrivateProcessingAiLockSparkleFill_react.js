__d(
  "WDSIconWdsIcPrivateProcessingAiLockSparkleFill.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-private-processing-ai-lock-sparkle-fill";
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
                  fill: "currentColor",
                  fillRule: "evenodd",
                  d: "M11.87.525C14.665.452 17 2.669 17 5.462v2.115c2.282.463 4 2.481 4 4.9v6a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5v-6a5 5 0 0 1 4-4.9V5.462C7 2.771 9.174.595 11.87.525m.635 11.78a.542.542 0 0 0-.994 0l-.715 1.663a.54.54 0 0 1-.284.283l-1.685.721a.538.538 0 0 0-.004.988l1.62.711a.54.54 0 0 1 .274.27l.784 1.72c.194.427.804.42.99-.01l.729-1.698a.54.54 0 0 1 .284-.284l1.669-.713a.539.539 0 0 0 0-.99l-1.67-.715a.54.54 0 0 1-.283-.283zm-.584-9.781C10.28 2.566 9 3.883 9 5.462v2.015h6V5.462c0-1.639-1.377-2.982-3.08-2.938",
                  clipRule: "evenodd",
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
