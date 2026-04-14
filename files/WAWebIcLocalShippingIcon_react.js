__d(
  "WAWebIcLocalShippingIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-local-shipping";
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
              fill: "none",
              children: [
                c.jsx("title", { children: i != null ? i : d }),
                c.jsx("path", {
                  fill: "currentColor",
                  d: "M6 20a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 3 17H2a.97.97 0 0 1-.71-.29A.97.97 0 0 1 1 16V6c0-.55.2-1.02.59-1.41C1.98 4.19 2.45 4 3 4h12c.55 0 1.02.2 1.41.59.4.39.59.86.59 1.41v2h2a1.99 1.99 0 0 1 1.6.8l2.2 2.92c.07.09.12.18.15.28.03.1.05.2.05.32V16c0 .28-.1.52-.29.71-.19.2-.43.29-.71.29h-1c0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 18 20a2.9 2.9 0 0 1-2.13-.88A2.9 2.9 0 0 1 15 17H9c0 .83-.3 1.54-.88 2.13A2.9 2.9 0 0 1 6 20Zm0-2c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 6 16c-.28 0-.52.1-.71.29-.2.19-.29.43-.29.71 0 .28.1.52.29.71.19.2.43.29.71.29Zm-3-3h.8c.28-.3.6-.54.98-.72A2.7 2.7 0 0 1 6 14c.45 0 .86.1 1.22.28.37.18.7.42.98.72H15V6H3v9Zm15 3c.28 0 .52-.1.71-.29.2-.19.29-.43.29-.71 0-.28-.1-.52-.29-.71A.97.97 0 0 0 18 16c-.28 0-.52.1-.71.29-.2.19-.29.43-.29.71 0 .28.1.52.29.71.19.2.43.29.71.29Zm-1-5h4.25L19 10h-2v3Z",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.IcLocalShippingIcon = m));
  },
  98,
);
