__d(
  "WDSIconIcFavoriteFilled.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-favorite-filled";
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
                  d: "M12 20.325C11.7667 20.325 11.5292 20.2834 11.2875 20.2C11.0458 20.1167 10.8333 19.9834 10.65 19.8L8.925 18.225C7.15833 16.6084 5.5625 15.0042 4.1375 13.4125C2.7125 11.8209 2 10.0667 2 8.15002C2 6.58336 2.525 5.27502 3.575 4.22502C4.625 3.17502 5.93333 2.65002 7.5 2.65002C8.38333 2.65002 9.21667 2.83752 10 3.21252C10.7833 3.58752 11.45 4.10002 12 4.75002C12.55 4.10002 13.2167 3.58752 14 3.21252C14.7833 2.83752 15.6167 2.65002 16.5 2.65002C18.0667 2.65002 19.375 3.17502 20.425 4.22502C21.475 5.27502 22 6.58336 22 8.15002C22 10.0667 21.2917 11.825 19.875 13.425C18.4583 15.025 16.85 16.6334 15.05 18.25L13.35 19.8C13.1667 19.9834 12.9542 20.1167 12.7125 20.2C12.4708 20.2834 12.2333 20.325 12 20.325Z",
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
