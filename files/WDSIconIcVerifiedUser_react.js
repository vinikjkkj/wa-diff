__d(
  "WDSIconIcVerifiedUser.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-verified-user";
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
                  d: "M10.95 12.7L9.55 11.3C9.35 11.1 9.11667 11 8.85 11C8.58333 11 8.35 11.1 8.15 11.3C7.95 11.5 7.85 11.7375 7.85 12.0125C7.85 12.2875 7.95 12.525 8.15 12.725L10.25 14.85C10.45 15.05 10.6833 15.15 10.95 15.15C11.2167 15.15 11.45 15.05 11.65 14.85L15.9 10.6C16.1 10.4 16.2 10.1625 16.2 9.88752C16.2 9.61252 16.1 9.37502 15.9 9.17502C15.7 8.97502 15.4625 8.87502 15.1875 8.87502C14.9125 8.87502 14.675 8.97502 14.475 9.17502L10.95 12.7ZM12 21.9C11.8833 21.9 11.775 21.8917 11.675 21.875C11.575 21.8584 11.475 21.8334 11.375 21.8C9.125 21.05 7.33333 19.6625 6 17.6375C4.66667 15.6125 4 13.4334 4 11.1V6.37502C4 5.95836 4.12083 5.58336 4.3625 5.25002C4.60417 4.91669 4.91667 4.67502 5.3 4.52502L11.3 2.27502C11.5333 2.19169 11.7667 2.15002 12 2.15002C12.2333 2.15002 12.4667 2.19169 12.7 2.27502L18.7 4.52502C19.0833 4.67502 19.3958 4.91669 19.6375 5.25002C19.8792 5.58336 20 5.95836 20 6.37502V11.1C20 13.4334 19.3333 15.6125 18 17.6375C16.6667 19.6625 14.875 21.05 12.625 21.8C12.525 21.8334 12.425 21.8584 12.325 21.875C12.225 21.8917 12.1167 21.9 12 21.9ZM12 19.9C13.7333 19.35 15.1667 18.25 16.3 16.6C17.4333 14.95 18 13.1167 18 11.1V6.37502L12 4.12502L6 6.37502V11.1C6 13.1167 6.56667 14.95 7.7 16.6C8.83333 18.25 10.2667 19.35 12 19.9Z",
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
