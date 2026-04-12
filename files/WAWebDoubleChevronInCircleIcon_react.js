__d(
  "WAWebDoubleChevronInCircleIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "double-chevron-in-circle";
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
      var S = 19,
        R = 19;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 19 19",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M5.79303 5.94909C6.10056 5.64155 6.59918 5.64155 6.90672 5.94909L9.87657 8.91893C10.1841 9.22647 10.1841 9.72509 9.87657 10.0326L6.90672 13.0025C6.59918 13.31 6.10056 13.31 5.79303 13.0025C5.48549 12.6949 5.48549 12.1963 5.79303 11.8888L8.20603 9.47578L5.79303 7.06278C5.48549 6.75524 5.48549 6.25662 5.79303 5.94909Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M9.99302 5.94909C10.3006 5.64155 10.7992 5.64155 11.1067 5.94909L14.0766 8.91893C14.3841 9.22647 14.3841 9.72509 14.0766 10.0326L11.1067 13.0025C10.7992 13.31 10.3006 13.31 9.99302 13.0025C9.68549 12.6949 9.68549 12.1963 9.99302 11.8888L12.406 9.47578L9.99302 7.06278C9.68549 6.75524 9.68549 6.25662 9.99302 5.94909Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M18.2569 9.5037C18.2569 14.3372 14.3386 18.2555 9.50517 18.2555C4.67171 18.2555 0.753418 14.3372 0.753418 9.5037C0.753418 4.67024 4.67171 0.751953 9.50517 0.751953C14.3386 0.751953 18.2569 4.67024 18.2569 9.5037ZM16.6819 9.5037C16.6819 13.4673 13.4688 16.6805 9.50517 16.6805C5.54156 16.6805 2.32842 13.4673 2.32842 9.5037C2.32842 5.54009 5.54156 2.32695 9.50517 2.32695C13.4688 2.32695 16.6819 5.54009 16.6819 9.5037Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.DoubleChevronInCircleIcon = m));
  },
  98,
);
