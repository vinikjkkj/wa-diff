__d(
  "WDSIconWdsIcPencilAi.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "wds-ic-pencil-ai";
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
                  d: "M18.4362 14.319C18.6367 13.8522 19.3001 13.8522 19.5007 14.319L20.267 16.1023C20.3256 16.2386 20.4345 16.3472 20.5712 16.4056L22.3593 17.1699C22.8273 17.3699 22.8273 18.0316 22.3593 18.2316L20.5712 18.9959C20.4345 19.0543 20.3256 19.1629 20.267 19.2993L19.4851 21.1189C19.2869 21.5801 18.6338 21.5872 18.4256 21.1304L17.5858 19.2877C17.5269 19.1584 17.4222 19.0553 17.2918 18.9981L15.5561 18.2364C15.0925 18.033 15.0957 17.3759 15.5613 17.1769L17.3657 16.4056C17.5023 16.3472 17.6113 16.2386 17.6698 16.1023L18.4362 14.319Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M5 18.5312H6.425L16.2 8.75625L14.775 7.33125L5 17.1062V18.5312ZM4 20.5312C3.71667 20.5312 3.47917 20.4354 3.2875 20.2437C3.09583 20.0521 3 19.8146 3 19.5312V17.1062C3 16.8396 3.05 16.5854 3.15 16.3438C3.25 16.1021 3.39167 15.8896 3.575 15.7063L16.2 3.10625C16.4 2.92292 16.6208 2.78125 16.8625 2.68125C17.1042 2.58125 17.3583 2.53125 17.625 2.53125C17.8917 2.53125 18.15 2.58125 18.4 2.68125C18.65 2.78125 18.8667 2.93125 19.05 3.13125L20.425 4.53125C20.625 4.71458 20.7708 4.93125 20.8625 5.18125C20.9542 5.43125 21 5.68125 21 5.93125C21 6.19792 20.9542 6.45208 20.8625 6.69375C20.7708 6.93542 20.625 7.15625 20.425 7.35625L7.825 19.9563C7.64167 20.1396 7.42917 20.2812 7.1875 20.3813C6.94583 20.4813 6.69167 20.5312 6.425 20.5312H4ZM15.475 8.05625L14.775 7.33125L16.2 8.75625L15.475 8.05625Z",
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
