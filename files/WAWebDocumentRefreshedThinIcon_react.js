__d(
  "WAWebDocumentRefreshedThinIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "document-refreshed-thin";
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
      var S = 20,
        R = 14;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 14 20",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M4.74917 14H9.24417C9.45639 14 9.63542 13.9285 9.78125 13.7856C9.92708 13.6427 10 13.4656 10 13.2544C10 13.0431 9.92819 12.8646 9.78458 12.7188C9.64097 12.5729 9.46306 12.5 9.25083 12.5H4.75583C4.54361 12.5 4.36458 12.5715 4.21875 12.7144C4.07292 12.8573 4 13.0344 4 13.2456C4 13.4569 4.07181 13.6354 4.21542 13.7812C4.35903 13.9271 4.53694 14 4.74917 14ZM4.74917 11H9.24417C9.45639 11 9.63542 10.9285 9.78125 10.7856C9.92708 10.6427 10 10.4656 10 10.2544C10 10.0431 9.92819 9.86458 9.78458 9.71875C9.64097 9.57292 9.46306 9.5 9.25083 9.5H4.75583C4.54361 9.5 4.36458 9.57146 4.21875 9.71438C4.07292 9.85729 4 10.0344 4 10.2456C4 10.4569 4.07181 10.6354 4.21542 10.7812C4.35903 10.9271 4.53694 11 4.74917 11ZM2.49417 17C2.08139 17 1.72917 16.8531 1.4375 16.5594C1.14583 16.2656 1 15.9125 1 15.5V4.5C1 4.0875 1.14687 3.73438 1.44062 3.44063C1.73437 3.14688 2.0875 3 2.5 3H8.375C8.5725 3 8.76076 3.03472 8.93979 3.10417C9.11882 3.17361 9.28472 3.28472 9.4375 3.4375L12.5625 6.5625C12.7153 6.71528 12.8264 6.88118 12.8958 7.06021C12.9653 7.23924 13 7.4275 13 7.625V15.5C13 15.9125 12.8531 16.2656 12.5592 16.5594C12.2653 16.8531 11.9119 17 11.4992 17H2.49417ZM8 7.25V4.5H2.5V15.5H11.5V8H8.75C8.5375 8 8.35938 7.92813 8.21562 7.78438C8.07187 7.64063 8 7.4625 8 7.25Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.DocumentRefreshedThinIcon = m));
  },
  98,
);
