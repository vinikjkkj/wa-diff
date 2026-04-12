__d(
  "WAWebBusinessToolsOutlineIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "business-tools-outline";
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
                c.jsx("g", {
                  clipPath: "url(#clip0_49_15709)",
                  children: c.jsx("path", {
                    d: "M18.36 9L18.96 12H5.04L5.64 9H18.36ZM20 5C20 4.44772 19.5523 4 19 4H5C4.44772 4 4 4.44772 4 5C4 5.55228 4.44772 6 5 6H19C19.5523 6 20 5.55228 20 5ZM20.1608 7.80388C20.0673 7.33646 19.6569 7 19.1802 7H4.8198C4.34312 7 3.93271 7.33646 3.83922 7.80388L3.01942 11.9029C3.0065 11.9675 3 12.0332 3 12.099V13C3 13.5523 3.44772 14 4 14V18C4 19.1046 4.89543 20 6 20H12C13.1046 20 14 19.1046 14 18V14H18V19C18 19.5523 18.4477 20 19 20C19.5523 20 20 19.5523 20 19V14C20.5523 14 21 13.5523 21 13V12.099C21 12.0332 20.9935 11.9675 20.9806 11.9029L20.1608 7.80388ZM6 18V14H12V18H6Z",
                    fill: "currentColor",
                  }),
                }),
                c.jsx("defs", {
                  children: c.jsx("clipPath", {
                    id: "clip0_49_15709",
                    children: c.jsx("rect", {
                      width: 24,
                      height: 24,
                      fill: "white",
                    }),
                  }),
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.BusinessToolsOutlineIcon = m));
  },
  98,
);
