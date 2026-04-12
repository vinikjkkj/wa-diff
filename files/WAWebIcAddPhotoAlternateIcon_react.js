__d(
  "WAWebIcAddPhotoAlternateIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-add-photo-alternate";
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
              viewBox: p,
              height: S,
              width: R,
              preserveAspectRatio: "xMidYMid meet",
              className: (s || (s = r("stylex")))(a),
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M5 21c-.55 0-1.02-.2-1.41-.59-.4-.39-.59-.86-.59-1.41V5c0-.55.2-1.02.59-1.41C3.98 3.19 4.45 3 5 3h8c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71-.19.2-.43.29-.71.29H5v14h14v-8c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v8c0 .55-.2 1.02-.59 1.41-.39.4-.86.59-1.41.59H5ZM17 7h-1a.97.97 0 0 1-.71-.29A.97.97 0 0 1 15 6c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29h1V4c0-.28.1-.52.29-.71.19-.2.43-.29.71-.29.28 0 .52.1.71.29.2.19.29.43.29.71v1h1c.28 0 .52.1.71.29.2.19.29.43.29.71 0 .28-.1.52-.29.71-.19.2-.43.29-.71.29h-1v1c0 .28-.1.52-.29.71-.19.2-.43.29-.71.29a.97.97 0 0 1-.71-.29A.97.97 0 0 1 17 8V7Zm-5.75 9L9.4 13.53a.48.48 0 0 0-.4-.2c-.17 0-.3.06-.4.2l-2 2.67a.44.44 0 0 0-.05.53c.1.18.25.27.45.27h10c.2 0 .35-.1.45-.27a.44.44 0 0 0-.05-.53l-2.75-3.67a.48.48 0 0 0-.4-.2c-.17 0-.3.06-.4.2L11.25 16Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.IcAddPhotoAlternateIcon = m));
  },
  98,
);
