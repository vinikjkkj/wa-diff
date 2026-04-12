__d(
  "WAWebStorefrontIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "storefront";
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
                  d: "M4.0002 3H20.0002C20.2835 3 20.521 3.09583 20.7127 3.2875C20.9044 3.47917 21.0002 3.71667 21.0002 4C21.0002 4.28333 20.9044 4.52083 20.7127 4.7125C20.521 4.90417 20.2835 5 20.0002 5H4.0002C3.71686 5 3.47936 4.90417 3.2877 4.7125C3.09603 4.52083 3.0002 4.28333 3.0002 4C3.0002 3.71667 3.09603 3.47917 3.2877 3.2875C3.47936 3.09583 3.71686 3 4.0002 3ZM4.0002 21C3.71686 21 3.47936 20.9042 3.2877 20.7125C3.09603 20.5208 3.0002 20.2833 3.0002 20V14H2.8252C2.50853 14 2.2502 13.8792 2.0502 13.6375C1.8502 13.3958 1.78353 13.1167 1.8502 12.8L2.8502 6.8C2.9002 6.56667 3.01686 6.375 3.2002 6.225C3.38353 6.075 3.59186 6 3.8252 6H20.1752C20.4085 6 20.6169 6.075 20.8002 6.225C20.9835 6.375 21.1002 6.56667 21.1502 6.8L22.1502 12.8C22.2169 13.1167 22.1502 13.3958 21.9502 13.6375C21.7502 13.8792 21.4919 14 21.1752 14H21.0002V20C21.0002 20.2833 20.9044 20.5208 20.7127 20.7125C20.521 20.9042 20.2835 21 20.0002 21C19.7169 21 19.4794 20.9042 19.2877 20.7125C19.096 20.5208 19.0002 20.2833 19.0002 20V14H15.0002V20C15.0002 20.2833 14.9044 20.5208 14.7127 20.7125C14.521 20.9042 14.2835 21 14.0002 21H4.0002ZM5.0002 19H13.0002V14H5.0002V19ZM4.0502 12H19.9502L19.3502 8H4.6502L4.0502 12Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"), (l.StorefrontIcon = m));
  },
  98,
);
