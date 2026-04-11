__d(
  "WDSIconIcCake.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-cake";
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
                  d: "M4 22C3.71667 22 3.47917 21.9042 3.2875 21.7125C3.09583 21.5208 3 21.2833 3 21V16C3 15.45 3.19583 14.9792 3.5875 14.5875C3.97917 14.1958 4.45 14 5 14V10C5 9.45001 5.19583 8.97918 5.5875 8.58751C5.97917 8.19585 6.45 8.00001 7 8.00001H11V6.55001C10.7 6.35001 10.4583 6.10835 10.275 5.82501C10.0917 5.54168 10 5.20001 10 4.80001C10 4.55001 10.05 4.30418 10.15 4.06251C10.25 3.82085 10.4 3.60001 10.6 3.40001L11.65 2.35001C11.6833 2.31668 11.8 2.26668 12 2.20001C12.0333 2.20001 12.15 2.25001 12.35 2.35001L13.4 3.40001C13.6 3.60001 13.75 3.82085 13.85 4.06251C13.95 4.30418 14 4.55001 14 4.80001C14 5.20001 13.9083 5.54168 13.725 5.82501C13.5417 6.10835 13.3 6.35001 13 6.55001V8.00001H17C17.55 8.00001 18.0208 8.19585 18.4125 8.58751C18.8042 8.97918 19 9.45001 19 10V14C19.55 14 20.0208 14.1958 20.4125 14.5875C20.8042 14.9792 21 15.45 21 16V21C21 21.2833 20.9042 21.5208 20.7125 21.7125C20.5208 21.9042 20.2833 22 20 22H4ZM7 14H17V10H7V14ZM5 20H19V16H5V20Z",
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
