__d(
  "WAWebMediaGifIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "media-gif";
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
      var S = 24,
        R = 24;
      return (
        (n != null || u != null) && ((S = n), (R = u)),
        c.jsx(
          o("WAWebSvgComponentBase").BaseSvgSpan,
          babelHelpers.extends({ name: i != null ? i : d }, m, {
            children: c.jsxs("svg", {
              viewBox: p != null ? p : "0 0 24 24",
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              version: "1.1",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  d: "M17.9,9 L17.9,11 L18.2,11 C19.3,11 20.3,11 21.4,11 C21.6,11 21.9,11.1 22,11.2 C22.3,11.4 22.4,11.8 22.3,12.2 C22.2,12.6 21.9,12.8 21.5,12.8 C20.4,12.8 19.3,12.8 18.2,12.8 L17.9,12.8 L17.9,13.1 C17.9,13.9 17.9,14.7 17.9,15.5 C17.9,16.3 17.1,16.7 16.5,16.4 C16.2,16.2 16,15.9 16,15.5 C16,14.8 16,14.2 16,13.5 C16,11.8 16,10.1 16,8.4 C16,7.7 16.4,7.3 17.1,7.3 C18.7,7.3 20.3,7.3 22,7.3 C22.5,7.3 22.9,7.6 23,8 C23.1,8.6 22.7,9 22.1,9 C20.8,9 19.5,9 18.3,9 L17.9,9 Z M7.7,12.8 C7.2,12.8 6.7,12.8 6.3,12.8 C6.1,12.8 5.9,12.7 5.8,12.7 C5.5,12.5 5.4,12.2 5.5,11.8 C5.6,11.5 5.9,11.2 6.2,11.2 C7.1,11.2 7.9,11.2 8.8,11.2 C9.2,11.2 9.6,11.6 9.6,12.1 C9.6,12.9 9.6,13.7 9.6,14.6 C9.6,15.1 9.3,15.4 8.9,15.7 C7.8,16.3 6.7,16.7 5.4,16.6 C3.6,16.5 2.1,15.7 1.4,13.9 C0.2,11.3 1.5,8 4.7,7.3 C6.1,7 7.5,7.2 8.8,8 C9.2,8.2 9.3,8.6 9.2,9 C9.1,9.4 8.9,9.6 8.5,9.7 C8.2,9.8 7.9,9.7 7.7,9.5 C7.2,9.2 6.7,9 6.2,8.9 C4.7,8.7 3.3,9.8 3.1,11.3 C3,11.9 3.1,12.5 3.3,13.1 C3.8,14.3 5,15 6.3,14.8 C6.8,14.7 7.3,14.6 7.7,14.3 C7.8,14.2 7.9,14.1 7.9,14 C7.7,13.6 7.7,13.2 7.7,12.8 Z M13.6,11.8 C13.6,13 13.6,14.2 13.6,15.4 C13.6,16.1 13.1,16.5 12.4,16.4 C12,16.3 11.7,16 11.7,15.6 C11.7,15.5 11.7,15.4 11.7,15.3 C11.7,13 11.7,10.6 11.7,8.3 C11.7,8.1 11.7,7.9 11.8,7.7 C12,7.3 12.4,7.1 12.9,7.2 C13.3,7.3 13.6,7.7 13.6,8.1 C13.6,9.4 13.6,10.6 13.6,11.8 Z",
                  fill: "currentColor",
                  fillRule: "nonzero",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.MediaGifIcon = m));
  },
  98,
);
