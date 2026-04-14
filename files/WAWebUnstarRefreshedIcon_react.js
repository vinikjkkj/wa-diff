__d(
  "WAWebUnstarRefreshedIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "unstar-refreshed";
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
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M6.74533 8.16L2.8072 4.22188C2.41668 3.83135 2.41668 3.19819 2.8072 2.80766C3.19773 2.41714 3.83089 2.41714 4.22142 2.80766L21.192 19.7782C21.5825 20.1688 21.5825 20.8019 21.192 21.1924C20.8015 21.583 20.1683 21.583 19.7778 21.1924L18.431 19.8457C18.2675 20.5959 17.383 21.0615 16.6387 20.6151L12.0001 17.8332L7.36144 20.6151C6.4528 21.16 5.33537 20.3459 5.57548 19.314L6.79399 14.0771L2.70679 10.5543C1.90226 9.86091 2.32885 8.54113 3.38705 8.44981L6.74533 8.16ZM15.9078 17.3225L16.049 17.9294L12.6172 15.8713C12.2373 15.6434 11.7628 15.6434 11.3829 15.8713L7.95108 17.9294L8.85162 14.059C8.95276 13.6243 8.80433 13.1695 8.46628 12.8781L5.45091 10.2791L8.59329 10.008L15.9078 17.3225Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M13.5527 9.20828C13.5881 9.29156 13.6323 9.36947 13.684 9.44106L13.9546 9.71174C14.1275 9.83653 14.3336 9.91534 14.5539 9.93435L18.5492 10.2791L16.3863 12.1434L17.8044 13.5615L21.2933 10.5543C22.0979 9.86091 21.6713 8.54113 20.6131 8.44981L15.2051 7.98312L13.1044 3.04179C12.6903 2.06777 11.3098 2.06778 10.8957 3.04179L9.81852 5.5756L11.3435 7.10054L12.0001 5.55606L13.5527 9.20828Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.UnstarRefreshedIcon = m));
  },
  98,
);
