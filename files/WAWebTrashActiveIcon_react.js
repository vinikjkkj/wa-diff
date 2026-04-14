__d(
  "WAWebTrashActiveIcon.react",
  ["WAWebSvgComponentBase", "react", "stylex"],
  function (t, n, r, o, a, i, l) {
    var e = ["height", "iconXstyle", "name", "viewBox", "width"],
      s,
      u,
      c = u || (u = o("react")),
      d = "trash-active";
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
                  d: "M16 7.5H22.25C22.6642 7.5 23 7.83579 23 8.25C23 8.66421 22.6642 9 22.25 9H16V7.5Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M16 12H21.25C21.6642 12 22 12.3358 22 12.75C22 13.1642 21.6642 13.5 21.25 13.5H16V12Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  d: "M16 16.5H19.25C19.6642 16.5 20 16.8358 20 17.25C20 17.6642 19.6642 18 19.25 18H16V16.5Z",
                  fill: "currentColor",
                }),
                c.jsx("path", {
                  fillRule: "evenodd",
                  clipRule: "evenodd",
                  d: "M11 4.88889H13.1429C13.6143 4.88889 14 5.28889 14 5.77778C14 6.26667 13.6143 6.66667 13.1429 6.66667H2.85714C2.38571 6.66667 2 6.26667 2 5.77778C2 5.28889 2.38571 4.88889 2.85714 4.88889H5L5.60857 4.25778C5.76286 4.09778 5.98571 4 6.20857 4H9.79143C10.0143 4 10.2371 4.09778 10.3914 4.25778L11 4.88889ZM4.57143 20C3.62857 20 2.85714 19.2 2.85714 18.2222V9.33333C2.85714 8.35556 3.62857 7.55556 4.57143 7.55556H11.4286C12.3714 7.55556 13.1429 8.35556 13.1429 9.33333V18.2222C13.1429 19.2 12.3714 20 11.4286 20H4.57143Z",
                  fill: "currentColor",
                }),
              ],
            }),
          }),
        )
      );
    }
    ((m.displayName = m.name + " [from " + i.id + "]"),
      (l.TrashActiveIcon = m));
  },
  98,
);
