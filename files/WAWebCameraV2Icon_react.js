__d(
  "WAWebCameraV2Icon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "camera-v2";
    function m(t) {
      var n = t.height,
        a = t.iconXstyle,
        i = t.name,
        l = t.viewBox,
        u = t.width,
        m = babelHelpers.objectWithoutPropertiesLoose(t, e),
        p;
      if (l) {
        var _ = l.height,
          f = _ === void 0 ? 0 : _,
          g = l.width,
          h = g === void 0 ? 0 : g,
          y = l.x,
          C = y === void 0 ? 0 : y,
          b = l.y,
          v = b === void 0 ? 0 : b;
        p = [C, v, h, f].join(" ");
      }
      var S = 16,
        R = 16;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 16 16",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M7.99961 10.0267C6.77739 10.0267 5.78287 9.03214 5.78287 7.80992C5.78287 6.5877 6.77739 5.59318 7.99961 5.59318C9.22183 5.59318 10.2163 6.5877 10.2163 7.80992C10.2163 9.03214 9.22183 10.0267 7.99961 10.0267Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11.0704 2.45088C11.2894 2.82567 11.6744 3.07215 12.1086 3.07215H12.1616C13.5448 3.07215 14.6663 4.19344 14.6663 5.57688V11.2105C14.6663 12.5935 13.5448 13.715 12.1616 13.715H3.83774C2.45452 13.715 1.33301 12.5935 1.33301 11.2105V5.57688C1.33301 4.19344 2.45452 3.07215 3.83774 3.07215H3.89075C4.32495 3.07215 4.70991 2.82567 4.92899 2.45088C5.31991 1.78257 6.04432 1.33334 6.87474 1.33334H9.12461C9.95503 1.33334 10.6792 1.78257 11.0704 2.45088ZM7.99961 4.4889C6.16849 4.4889 4.67859 5.9788 4.67859 7.80992C4.67859 9.64104 6.16849 11.1309 7.99961 11.1309C9.83073 11.1309 11.3206 9.64104 11.3206 7.80992C11.3206 5.9788 9.83073 4.4889 7.99961 4.4889Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.CameraV2Icon = m));
  },
  98,
);
