__d(
  "WDSIconIcThumbUp.react",
  ["WDSSvgComponentBase.react", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "ic-thumb-up";
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
                  d: "M21 7.99998C21.5333 7.99998 22 8.19998 22.4 8.59998C22.8 8.99998 23 9.46664 23 9.99998V12C23 12.1166 22.9833 12.2416 22.95 12.375C22.9167 12.5083 22.8833 12.6333 22.85 12.75L19.85 19.8C19.7 20.1333 19.45 20.4166 19.1 20.65C18.75 20.8833 18.3833 21 18 21H7V7.99998L13 2.04998C13.25 1.79998 13.5458 1.65414 13.8875 1.61248C14.2292 1.57081 14.5583 1.63331 14.875 1.79998C15.1917 1.96664 15.425 2.19998 15.575 2.49998C15.725 2.79998 15.7583 3.10831 15.675 3.42498L14.55 7.99998H21ZM9 8.84998V19H18L21 12V9.99998H12L13.35 4.49998L9 8.84998ZM4 21C3.45 21 2.97917 20.8041 2.5875 20.4125C2.19583 20.0208 2 19.55 2 19V9.99998C2 9.44998 2.19583 8.97914 2.5875 8.58748C2.97917 8.19581 3.45 7.99998 4 7.99998H7V9.99998H4V19H7V21H4Z",
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
