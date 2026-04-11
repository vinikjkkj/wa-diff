__d(
  "WDSIconIcGrade.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-grade";
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
                  d: "M8.85001 16.825L12 14.925L15.15 16.85L14.325 13.25L17.1 10.85L13.45 10.525L12 7.12495L10.55 10.5L6.90002 10.825L9.67501 13.25L8.85001 16.825ZM12 17.275L7.85001 19.775C7.66668 19.8916 7.47502 19.9416 7.27502 19.9249C7.07502 19.9083 6.90001 19.8416 6.75001 19.725C6.60001 19.6083 6.48335 19.4625 6.40002 19.2874C6.31668 19.1124 6.30001 18.9166 6.35001 18.7L7.45001 13.975L3.77502 10.8C3.60835 10.65 3.50418 10.4791 3.46252 10.2875C3.42085 10.0958 3.43335 9.90828 3.50001 9.72495C3.56668 9.54162 3.66668 9.39162 3.80001 9.27495C3.93335 9.15828 4.11668 9.08328 4.35001 9.04995L9.20001 8.62495L11.075 4.17495C11.1583 3.97495 11.2875 3.82495 11.4625 3.72495C11.6375 3.62495 11.8167 3.57495 12 3.57495C12.1833 3.57495 12.3625 3.62495 12.5375 3.72495C12.7125 3.82495 12.8417 3.97495 12.925 4.17495L14.8 8.62495L19.65 9.04995C19.8834 9.08328 20.0667 9.15828 20.2 9.27495C20.3333 9.39162 20.4333 9.54162 20.5 9.72495C20.5667 9.90828 20.5792 10.0958 20.5375 10.2875C20.4958 10.4791 20.3917 10.65 20.225 10.8L16.55 13.975L17.65 18.7C17.7 18.9166 17.6833 19.1124 17.6 19.2874C17.5167 19.4625 17.4 19.6083 17.25 19.725C17.1 19.8416 16.925 19.9083 16.725 19.9249C16.525 19.9416 16.3334 19.8916 16.15 19.775L12 17.275Z",
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
