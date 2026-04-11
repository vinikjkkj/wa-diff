__d(
  "WDSIconIcDraw.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-draw";
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
                  d: "M5 21q-0.425 0-0.7125-0.2875T4 20v-2.425q0-0.4 0.15-0.7625t0.425-0.6375l12.6-12.575q0.3-0.3 0.675-0.45t0.75-0.15q0.4 0 0.7625 0.15t0.6375 0.45l1.4 1.4q0.3 0.275 0.45 0.6375t0.15 0.7625q0 0.375-0.15 0.75t-0.45 0.675L8.825 20.425q-0.275 0.275-0.6375 0.425t-0.7625 0.15h-2.425Zm13.65-13.225 1.35-1.35-1.425-1.425-1.35 1.35 1.425 1.425ZM14 21q1.85 0 3.425-0.925t1.575-2.575q0-0.8-0.4-1.3875T17.55 15.025q-0.35-0.25-0.75-0.25t-0.675 0.3q-0.275 0.3-0.275 0.7375t0.35 0.6875q0.35 0.275 0.575 0.5t0.225 0.5q0 0.575-0.9125 1.0375T14 19q-0.425 0-0.7125 0.2875T13 20q0 0.425 0.2875 0.7125T14 21ZM9 6q0 0.35-0.4375 0.6375T6.55 7.65q-2 0.875-2.775 1.5875T3 11q0 0.65 0.3 1.15t0.775 0.875q0.325 0.275 0.725 0.2375t0.675-0.3625q0.275-0.325 0.25-0.725t-0.35-0.675q-0.175-0.125-0.275-0.25t-0.1-0.25q0-0.3 0.45-0.6t1.9-0.925q2.2-0.95 2.925-1.725t0.725-1.75q0-1.375-1.1-2.1875T7 3q-1.125 0-2.0125 0.4T3.625 4.375q-0.275 0.325-0.225 0.725t0.375 0.65q0.325 0.275 0.725 0.225t0.675-0.325q0.35-0.35 0.775-0.5t1.05-0.15q1.025 0 1.5125 0.3t0.4875 0.7Z",
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
